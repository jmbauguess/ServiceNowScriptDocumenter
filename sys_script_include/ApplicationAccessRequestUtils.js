/**
 * ApplicationAccessRequestUtils
 * @namespace
 * @description Application Access request utilities
 * @type {Class}
 */
var ApplicationAccessRequestUtils = Class.create();
ApplicationAccessRequestUtils.prototype = {
	/**
	 * @description Determines what type of user the request is for, then returns that user
	 * @param {GlideRecord} current - The current record
	 * @return {String} The name of the user requested for
	 */
	getSecurityAccessRequestUser: function(current) {
		if (current.variables.name != ''){
			return current.variables.name.name;
		} else {
			return current.variables.name_new_employee;
		}
	},
	/**
	 * @description Returns the name of the current category item
	 * @param {GlideRecord} current - the current record
	 * @return {String} the name of the category item, which is an application
	 */
	getCurrentApplication: function(current) {
		return current.cat_item.name;
	},
	/**
	 * @description Gets the Hiring Manager on the RITM
	 * @param {GlideRecord} gr - The sc_req_item glide record
	 */
	getHiringManager: function(gr){
		var hireMgr = new GlideRecord('sc_item_option_mtom');
		hireMgr.addQuery('request_item', gr.sys_id);
		hireMgr.addQuery('sc_item_option.item_option_new.name' , "hiring_manager");
		hireMgr.query();
		if (hireMgr.next()) {
			var manager = hireMgr.sc_item_option.value;
			var hireMgremail = new GlideRecord('sys_user');
			hireMgremail.addQuery('sys_id', manager);
			hireMgremail.query();
			if (hireMgremail.next()){
				return hireMgremail;
			}
		}
	},
	/**
	 * @description Gets the "Requested For" on the RITM
	 * @param {GlideRecord} gr - The sc_req_item glide record
	 */
	getRequestedFor: function(gr) {
		var requestedFor = new GlideRecord('sc_item_option_mtom');
		requestedFor.addQuery('request_item', gr.sys_id);
		requestedFor.addQuery('sc_item_option.item_option_new.name' , "name");
		requestedFor.query();
		if (requestedFor.next()) {
			var requestor = requestedFor.sc_item_option.value;
			var requestedForemail = new GlideRecord('sys_user');
			requestedForemail.addQuery('sys_id', requestor);
			requestedForemail.query();
			if (requestedForemail.next()){
				return requestedForemail;
			}
		}
		
	},
	/**
 	* @description Fires off a rework notification if the item has not be reworked in a specified period of time.  If the item has not been updated in 30 days, it is automatically rejected
	* @see ScheduledJob
 	*/
	reworkReminder: function() {
		// Get RITMs that are in the approval status of rework
		var gr = new GlideRecord('sc_req_item');
		gr.addQuery('approval', 'rework');
		gr.query();
		while (gr.next()) {
			var hireMgremail = this.getHiringManager(gr);
			if (gr.sys_updated_on <= gs.daysAgo(gs.getProperty('security.access.reminder.minimum', 14)) && gr.sys_updated_on >= gs.daysAgo(gs.getProperty('security.access.reminder.maximum', 16))){
				if (hireMgremail != gr.opened_by){
					gs.eventQueue("application.request.rework.reminder", gr, hireMgremail.sys_id, gr.opened_by);
				} else {
					gs.eventQueue("application.request.rework.reminder", gr, hireMgremail.sys_id);
				}
			}
		}
	},
	/**
 	* @description Checks for Access Request approvals that are idle.  If they are idle for 30 days, they are automatically rejected.  If they are idle for 15 days, a reminder is sent. The times can be changed via system properties on the Service Catalog system properties page
 	*/
	approvalReminder: function() {
		var approval = new GlideRecord('sysapproval_approver');
		approval.addEncodedQuery('state=requested^sysapproval.ref_sc_req_item.cat_item.category.title=Access Request Forms');
		approval.query();
		while (approval.next()) {
			if (approval.sys_updated_on <= gs.daysAgo(gs.getProperty('security.access.reminder.minimum', 14)) && approval.sys_updated_on >= gs.daysAgo(gs.getProperty('security.access.reminder.maximum', 16))) {
				gs.eventQueue("application.req.approval.secure.mgr", approval);
			}
		}
	},	
	type: 'ApplicationAccessRequestUtils'
}