/**
 * SecurityAccessUtil
 * @namespace
 * @description Handles checks for Security Access Requests
 * @type {Class}
 */
var SecurityAccessUtil = Class.create();
SecurityAccessUtil.prototype = {
	/**
 	* @description Checks to see if the ritm is a Security Access Request
 	* @return {boolean} true if it's a security access request; false otherwise
 	*/
	isSecurityAccessRequest: function(title){
		return title == "Access Request Forms";
	},
	/**
 	* @description Gets the type of Security Access Request, so we can get the proper variables
 	* @return {string} One of the request access types (new_access, edit_access, delete_access)
 	*/
	getSecurityAccessType: function(approvalFor){
		var vendor = new GlideRecord('sc_item_option_mtom');
		vendor.addQuery('request_item', approvalFor.sys_id);
		vendor.orderByDesc('sc_item_option.item_option_new.name');
		vendor.query();
		var result = '';
		while (vendor.next()){
			if (vendor.sc_item_option.item_option_new.name == 'request_types'){
				result += vendor.sc_item_option.value;
			} else if (vendor.sc_item_option.item_option_new.name == 'new_employee') {
				if (vendor.sc_item_option.value == 'true'){
					result += '_new';
				}
			}
		}
		return result;
	},
	/**
 	* @description Given a category item and a phase, returns the approver required
 	* @param {string} catItem The sys_id of a cat item
 	* @param {integer} number Which approval to retrieve
 	* @return {string} sys_id of the approver
 	*/
	getApproverByPhase: function(catItem, number) {
		if (number > 3 || number < 1) {
			return '';
		}
		var approver = new GlideRecord('u_catalog_approvers');
		approver.addQuery('u_catalog_item', catItem);
		approver.query();
		if (approver.next()) {
			gs.log(approver.getValue('u_approver' + String(number)) + " is the value");
			return approver.getValue('u_approver' + String(number));
		}
	},
	/**
 	* @description Finds the approval records that are not the Hiring manager nor the normal application approvers
 	* @param {string} ritm Optional parameter to determine what requested item needs the approval checked
 	* @return {GlideRecord} a ready-to-be-queried glide record that should contain any approvals that are idle
 	*/
	getPeopleSoftNonAppApprovers: function(ritm) {
		var approval = new GlideRecord('sysapproval_approver');
		approval.addEncodedQuery('sysapproval.ref_sc_req_item.cat_item=41260ed701f635001148f272bc337a77');
		if (ritm) {
			approval.addQuery('sysapproval', ritm);
		}
		var appApprovers = this.getApplicationApprovers('PeopleSoft');
		for (var i = 0; i < appApprovers.length; i++) {
			approval.addQuery('approver', '!=', appApprovers[i]);
		}
		approval.query();
		return approval;
	},
	/**
 	* @description Sets the approval to cancelled if it has sat idle for a certain period of time
 	* @param {GlideRecord} approval The approval records to update
 	*/
	expirePeopleSoftApprovals: function(approval) {
		var expiration = new GlideDateTime(gs.daysAgoStart(gs.getProperty('peoplesoft.cancellation.days')));
		while (approval.next()) {
			gs.log(approval.sysapproval.number + " : " + approval.approver + " : " + approval.sysapproval.variables.hiring_manager + ":" + approval.sysapproval.variables.name);
			var updated = new GlideDateTime(approval.sys_updated_on);
			if (updated.compareTo(expiration) > 0 && approval.state == 'requested' && approval.approver == approval.sysapproval.variables.name) {
				approval.state = 'approved';
				approval.comments = 'The approval has been cancelled because it has sat idle for ' + gs.getProperty('peoplesoft.cancellation.days', 5) + ' days.';
				approval.update();
			}
		}
	},
	/**
 	* @description Queries the application approvers table for the sys_ids of the approvers for a given application access request
 	* @param {string} application The name of an application access request
 	* @return {array} An array containing the sys_ids of all approvers
 	*/
	getApplicationApprovers: function(application) {
		var approvers = new GlideRecord('u_catalog_approvers'), approverArray = [];
		approvers.addQuery('u_catalog_item.name', application);
		approvers.query();
		if (approvers.next()) {
			if (approvers.u_approver1 != '') {
				approverArray.push('' + approvers.u_approver1);
			}
			if (approvers.u_approver2 != '') {
				approverArray.push('' + approvers.u_approver2);
			}
			if (approvers.u_approver3 != '') {
				approverArray.push('' + approvers.u_approver3);
			}
		}
		return approverArray;
	},
	type: 'SecurityAccessUtil'
}