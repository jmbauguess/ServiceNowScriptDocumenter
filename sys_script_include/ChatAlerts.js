/**
 * @namespace ChatAlerts
 * @description Polls the system for Chat Messages
 * @type {Class}
 * @extends {AbstractAjaxProcessor}
 */
var ChatAlerts = Class.create();
ChatAlerts.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	DEBUG: (gs.getProperty('chat.alert.debug_server') == 'true'),
	/**
	 * @memberOf ChatAlerts
	 * @description Logs to the console if the DEBUG property is true
	 */
	log: function(str) {
		if (this.DEBUG)
			gs.log(str);
	},
	/**
	 * @memberOf ChatAlerts
	 * @description AJAX Function to get chat messages from the server and return them to the client
	 * @return {HttpResponse} a response containing unacknowledge chat messages
	 */
	getMyMessages: function() {
		this.log('ChatAlerts.getMyMessages()');
		if (gs.getUserID() == '')
			return;
		var result = this.newItem("result");
		result.setAttribute("poll_interval", gs.getProperty('chat.alert.poll_interval', 30000));
		var gr = new GlideRecord('chat_message');
		gr.addQuery('state', 'active');
		gr.addQuery('body', '!=', '');
		gr.addQuery('u_acknowledged', false);
		gr.orderBy('sys_created_on');
		gr.query();
		while (gr.next()) {
			this.log("Found a record, " + gr.body);
			var cc = new GlideRecord('chat_channel_member');
			cc.addQuery('chat_channel', gr.chat_channel);
			cc.query();
			if (cc.getRowCount() == 2){
				this._addChatMessage(gr);
			}
		}
		result.setAttribute("message", "Returning message(s)");
	},
	/**
	 * @memberOf ChatAlerts
	 * @description Acknowledges messages, so they will no longer appear on screen
	 * @param {string} sysparm_message_sys_id The sys_id of a chat message
	 */
	acknowledgeMessage: function() {
		var messageSysId = this.getParameter('sysparm_message_sys_id');
		this.log('ChatAlerts.acknowledgeMessage(' + messageSysId + ')');
		var gr = new GlideRecord('chat_message');
		if (gr.get(messageSysId)) {
			gr.u_acknowledged = true;
			gr.update();
			this.log(gr.body + " was acknowledged");
		} else {
			this.log('ChatAlerts.acknowledgeMessage(' + messageSysId + ') Could not find chat_message');
		}		
	},
	/**
	 * @memberOf ChatAlerts
	 * @description Adds a chat message to the XML we are returning
	 * @param {GlideRecord} gr - A glide record of a chat message
	 */
	_addChatMessage: function(gr) {
		var chatMessage = this.newItem("chat_message");
		chatMessage.setAttribute("from_name", gr.from_id.name);
		chatMessage.setAttribute("body", gr.body);
		chatMessage.setAttribute("sys_id", gr.sys_id);
		var gdt = gr.sys_created_on.getGlideObject();
		var nowGdt = new GlideDateTime();
		var dateStr = gdt.getDisplayValue();
		var timeStr = dateStr.substr(dateStr.indexOf(' ') + 1, 5);
		var diffSecs = gs.dateDiff(nowGdt.getDate(), gdt.getDate(), true);
		var diffDays = diffSecs/60/60/24;
		if (diffDays >= 0) {
			dateStr = '';
		} else if (diffDays >= 7) {
			dateStr = gdt.getDate().toString() + ' ';
		} else {
			dateStr = this._dayOfWeek(gdt.getDayOfWeek()) + ' ';
		}
		dateStr += timeStr;
		chatMessage.setAttribute("dt", dateStr);
	},
	/**
	 * @memberOf ChatAlerts
	 * @description Helper function to get an abbreviation for the day of the week
	 * @param {Integer} i - the numerical day of the week
	 * @return {String} the three letter abbreviation for the day
	 */
	_dayOfWeek: function(i) {		
		this.weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return this.weekday[i];
	}
});