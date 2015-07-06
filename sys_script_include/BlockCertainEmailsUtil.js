/**
 * BlockCertainEmailsUtil
 * @namespace
 * @description Contains various utilities for dealing with blocked emails
 Also finds the source email in the header field of a current object of a business Rule that hits the sys_email table, because for some reason, finding out who it's from directly isn't something the current object wants to do, outside of an inbound action of course.
 * @type {Class}
 */
var BlockCertainEmailsUtil = Class.create();
BlockCertainEmailsUtil.prototype = {
	/**
 	* @description Checks to see whether or not the email passed is an email in the "blocked list" of a given application 	
 	* @param {string} emailName The email address
	 * @return {boolean} true if the email is blocked; false if it's not blocked
 	*/
	checkBlockedEmail: function(emailName) {
		var isBlocked = false;
		var appMails = new GlideRecord('u_blocked_incident_emails');
		appMails.u_application_name = emailName;
		appMails.query();
		while (appMails.next()) {
			if (appMails.u_isregex) {
				var pattern = new RegExp(appMails.u_email_string,'im');
				var ismatch = pattern.test(emailName);
				if (ismatch) {
					isBlocked = true;
					break;
				}
			} else {
				if (emailName.toString().toLowerCase() == appMails.u_email_string) {
					isBlocked = true;
					break;
				}
			}
		}
		return isBlocked;
	},
	/**
	 * @description trims out the From part of an email header
	 * @param {string} header the header of an email
	 * @return {string} who the email is from
	 */
	trimOutFrom: function(header){
		var startIndex = (header.indexOf('<')+1);
		var endIndex = header.indexOf('>');
		return (header.substring(startIndex,endIndex));
	},	
	type: 'BlockCertainEmailsUtil'
};