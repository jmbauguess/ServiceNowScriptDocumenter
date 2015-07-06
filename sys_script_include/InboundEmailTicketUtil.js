/**
 * InboundEmailTicketUtil
 * @namespace
 * @description This is a class that contains all the utilities to handle Inbound Emails sent with the intent of creating new incident tickets.
 * @see BlockCertainEmailsUtil
 */
var InboundEmailTicketUtil = Class.create();
InboundEmailTicketUtil.prototype = {
	/**
 	* @description Sets email object for entire class equal to the current email record that we'll be dealing with
 	* @param {GlideRecord} emailThing An email record
 	*/
	initialize: function(emailThing) {
		this.email = emailThing;
		this.emailTrimmer = new BlockCertainEmailsUtil();
		this.thisEmail = this.emailTrimmer.trimOutFrom(this.email.headers);
		//This will trim out Fwd's, re's, etc. Because apprently users don't know how to take them out of email subjects
		var isDone = false;
		var subjStr = this.email.subject;
		do {
			if (subjStr.toLowerCase().indexOf("re:") === 0) {
				subjStr = subjStr.substring(4,subjStr.length);
			} else if (subjStr.toLowerCase().indexOf("fwd:") === 0) {
				subjStr = subjStr.substring(5,subjStr.length);
			} else if (subjStr.toLowerCase().indexOf("fw:") === 0) {
				subjStr = subjStr.substring(4,subjStr.length);
			}
			subjStr = subjStr.trim();
			if (subjStr.toLowerCase().indexOf("re:")!= 0
				&& subjStr.toLowerCase().indexOf("fwd:")!= 0
			&& subjStr.toLowerCase().indexOf("fw:")!= 0) {
				isDone=true;
			}
		} while (!isDone);
		this.modifiedEmailSubject = subjStr;
	},
	/**
 	* @description Checks for whether or not there is a user in the system, based on the email provided
 	* @param {string} emailRec String containing the sender
 	* @return {GlideRecord} the user from the email
 	*/
	checkForUser: function(emailSrc) {
		var userRecord = new GlideRecord('sys_user');
		userRecord.addQuery('email',emailSrc);
		userRecord.addActiveQuery();
		userRecord.query();
		return userRecord;
	},
	/**
 	* @description Checks all of the emails in the to,cc,and from fields. Finds if any of them have incidents that aren't resolved or closed with a short description that matches the subject of the email
 	* @return {boolean} true if this is a new incident; false otherwise
 	*/
	isNewTicket : function() {
		var emailsArray = this.email.to.split(',');
		var supportIndex = emailsArray.indexOf(gs.getProperty('incident.ticket.email'));
		if (supportIndex>-1) {
			emailsArray.splice(supportIndex,1);
		}
		//Add email.from to the mix
		emailsArray.push(this.email.from);
		var newIncident = true;
		for(var i=0; i < emailsArray.length; i++) {
			var usrRec = this.checkForUser(emailsArray[i]);
			if (usrRec.next()) {
				var incident = new GlideRecord('incident');
				incident.addQuery('short_description',this.modifiedEmailSubject);
				incident.addQuery('caller_id.name',usrRec.name);
				incident.addEncodedQuery('state!=7^state!=6');
				incident.query();
				if (incident.next()) {
					newIncident = false;
					i = emailsArray.length;
				}
			}
		}
		return newIncident;
	},
	/**
 	*	@description  Checks to see whether the person sending this email is from inside service-now or not. If that person is, found in our system, make an incident
 	*	@param {GlideRecord} current the current incident record
 	*/
	handleTicket: function(current) {
		if(this.checkForUser(this.email.from).hasNext()
			&& !this.emailTrimmer.checkBlockedEmail(this.email.from)) {
			return this.createIncident(current);
		} else {
			this.handleNonFoundEmail();
		}
	},
	/**
 	* @description Creates an incident based on the user and the contents of the email
 	* @param {GlideRecord} current An incident Record
 	*/
	createIncident: function(current) {
		//Create incident object and populate it
		var contact = this.checkForUser(this.email.from);
		if(contact.next()) {
			current.caller_id = contact.first_name + " " + contact.last_name;
		}
		current.assignment_group.setDisplayValue("Support Desk");
		current.short_description = this.modifiedEmailSubject;
		var description = this.email.body_text.toString().replace(/^\s+|\s+$/g,'');
		current.description = this.decodeHtmlEntity(description);
		current.contact_type = "email";		
		current.watch_list = this.handleWatchList();
		current.update();
		gs.eventQueue("inbound.email.fromSupportDesk",current,gs.getUserID(),gs.getUserName());
	},
	/**
	 * @description Handles the addition of users to the watch list of an incident
	 * @return {string} a list of users to add to the watch list
	 */
	handleWatchList: function() {
		var watchlist = this.email.to.split(','),
			supportIndex = watchlist.indexOf(gs.getProperty('incident.ticket.email')),
			theWatchList = [];
		if(supportIndex > -1) {
			watchlist.splice(supportIndex, 1);
		}
		if (watchlist.length > 0 && watchlist[0] != '') {
			for (var i = 0; i < watchlist.length; i++) {
				if(this.checkForUser(watchlist[i]).next()
					&& watchlist[i] != "guest@yourcompany.com") {
					theWatchList.push(gs.createUser(watchlist[i]));
				} else if (watchlist[i] != gs.getProperty('incident.ticket.email')) {
					theWatchList.push(watchlist[i] + '');
				}
			}
			return theWatchList.join();
		}
	},
		/**
 		* @description Forwards the current email to the support desk. Text, attachments, and all.
 		*/
		handleNonFoundEmail: function() {
			//Forward original email to service-desk
			var outsideEmailRecord = new GlideRecord('sys_email');
			outsideEmailRecord.addQuery('uid',this.email.uid);
			outsideEmailRecord.addEncodedQuery('sys_created_onONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)');
			outsideEmailRecord.query();
			while(outsideEmailRecord.next()) {
				var recordEmail = this.emailTrimmer.trimOutFrom(outsideEmailRecord.headers);
				if(recordEmail == this.thisEmail) {
					gs.eventQueue("inbound.email.toSupportDesk",outsideEmailRecord, outsideEmailRecord.user);
					break;
				}
			}
		},
		/**
 		* @description Looks through every email in the To,CC, and From fields and finds whether  or not there is an incident with a short description that matches the subject of this current email (minus the "Re: "). If one is found, add the contents of the this email to the worknotes
 		* @param {GlideRecord} current the current incident
 		*/
		handleWorkNotes: function(current) {
			//If "Re: " is found in the short description, cut it out
			var emailsArray = this.email.to.split(',');
			var supportIndex = emailsArray.indexOf(gs.getProperty('incident.ticket.email'));
			//Add email.from to the mix
			emailsArray.push(this.email.from);
			var checkIncident = false;
			var inc = '';
			//Go through each email, and make a user record from it. If a record is found, check that user's incidents. If there is an incident found with
			//a short description matching the subject of the email, use that as the incident you'll edit
			for (var i = 0; i < emailsArray.length; i++) {
				var usrRec = this.checkForUser(emailsArray[i]);
				if (usrRec.next()) {
					inc = new GlideRecord('incident');
					inc.addQuery('short_description',this.modifiedEmailSubject);
					inc.addQuery('caller_id.name',usrRec.name);
					inc.addActiveQuery();
					inc.query();
					if (inc.next()) {
						checkIncident = true;
						i = emailsArray.length;
					}
				}
			}
			if (checkIncident) {
				return this.addToIncident(inc);
			}
		},
		/**
 		* @description Takes the incident record, and adds the contents of this email, including attachments, to it
 		* @param {GlideRecord} inc the current incident
 		*/
		addToIncident: function(inc) {
			var matchedIndex = this.email.body_text.indexOf("From:");
			if (matchedIndex > -1) {
				modifiedBody = this.email.body_text.substring(0,matchedIndex);
			} else {
				modifiedBody = this.email.body_text;
			}
			if (this.thisEmail.indexOf('@gmail.com') > -1) {
				//Trims out extra parts of email from google mail
				var googleRegex = /On\s+\w+,\s+\w+\s+\d+,\s+\d+\s+at\s+\d+:\d+\s+\w+,.*?/;
				var googleIndex = googleRegex.exec(this.email.body_text);
				if (googleIndex && (googleIndex.index > 0)) {
					modifiedBody = this.email.body_text.substring(0, googleIndex.index);
				} else {
					modifiedBody = this.email.body_text;
				}
			}
			var watchList = (inc.watch_list + "," + this.handleWatchList()).split(',');
			var au = new ArrayUtil();
			inc.watch_list = au.unique(watchList).toString();
			inc.comments += this.decodeHtmlEntity(modifiedBody);
			inc.u_email_uid = this.email.uid;
			inc.update();
		},
		/**
 		* @description Ensures that special characters don't show up as HTML encoded entities. Ex: &#8211 should show up as -- and not the encoded value
 		* @param {string} str A string to decode
 		* @retun {string} the string without HTML encoding
 		*/
		decodeHtmlEntity : function(str) {
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
		},
		type: 'InboundEmailTicketUtil'
	};