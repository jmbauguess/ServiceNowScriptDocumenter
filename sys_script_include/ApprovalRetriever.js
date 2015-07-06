/**
 * ApprovalRetriever
 * @namespace
 * @description Retrieves approvals based on the ci
 * @type {Class}
 */
var ApprovalRetriever = Class.create();
ApprovalRetriever.prototype = {	
	/**
	 * @description Sets some class variables
	 * @param {GlideRecord} current the current record (typically a change request)
	 */
    initialize: function(current) {
		this.task = current;
		this.OTHER = 'u_other_approvers';
		this.BUSINESS = 'u_business_approvers';
		this.CHANGE = 'u_change_approvers';
    },
	/**
	 * @description Gets an approver or group of approvers from a given field on a given ci
	 * @param {string} fieldName - the name of a field
	 * @param {GlideRecord} ci - the sys_id of a configuration item
	 * @return {array} an array of approvers
	 */
	getApproversByFieldFromCI: function(fieldName, ci) {
		var table = new GlideRecord(this.task.cmdb_ci.sys_class_name);
		if (table.get(this.task.cmdb_ci.sys_id)) {
			try {
				return table.getValue(fieldName).split(',');
			} catch (e) {
				return [];
			}
		}
	},
	/**
	 * @description Wraps the attempt to split an array into a try catch block
	 * @param {string} value - a string to split into an array
	 * @return {array} either the string split by comma, or an empty array
	 */
	trySplittingValues: function(value) {
		try {
			return value.split(',');
		} catch (e) {
			return [];
		}
	},
	/**
	 * @description Removes any default approvers from the approval list for a task
	 * @example
	 * var ar = new ApprovalRetriever(current); 
	 * if (current.type == "Std-Application") {
	 *	ar.removeCIApprovers();		
	 * }
	 */
	removeCIApprovers: function() {
		var approvers = [], au = new ArrayUtil();
		var table = new GlideRecord(this.task.cmdb_ci.sys_class_name);
		if (table.get(this.task.cmdb_ci.sys_id)) {			
			approvers = au.union(this.trySplittingValues(table.getValue(this.OTHER)), 
								 this.trySplittingValues(table.getValue(this.BUSINESS)), 
								 this.trySplittingValues(table.getValue(this.CHANGE)));
		} else {			
			approvers = [];
		}
		var approvalRecords = new GlideRecord('sysapproval_approver');
		approvalRecords.addEncodedQuery('sysapproval=' + current.sys_id + '^approver.sys_idIN' + approvers.toString());
		approvalRecords.query();
		while (approvalRecords.next()) {
			approvalRecords.deleteRecord();
		}		
	},
	/**
	 * @description Resets approvals to a given state
	 * @param {string} state - the state to set the approvals
	 * @example
	 * var ar = new ApprovalRetriever(current);
	 * ar.resetNonCIApprovers('not requested');
	 */
	resetNonCIApprovers: function(state) {
		var approvers = new GlideRecord('sysapproval_approver');
		approvers.addQuery('sysapproval', this.task.sys_id);
		approvers.query();
		while (approvers.next()) {			
			approvers.state = state;
			approvers.update();
		}
	},
	/**
	 * @description Completely removes an approval record
	 * @example
	 * var ar = new ApprovalRetriever(current);
	 * ar.removeNonCIApprovers();
	 */
	removeNonCIApprovers: function() {
		var approvers = new GlideRecord('sysapproval_approver');
		approvers.addQuery('sysapproval', this.task.sys_id);
		approvers.query();
		while (approvers.next()) {
			approvers.deleteRecord();
		}
	},
	/**
	 * @description Removes and resets approvals on infrastructure
	 * @example
	 * var ar = new ApprovalRetriever(current);
	 * else {
	 *     ar.removeInfrastructureApprovers();
	 * }
	 */
	removeInfrastructureApprovers: function() {		
		var groupManager = this.task.assignment_group.manager.sys_id;
		var approvalRecord = new GlideRecord('sysapproval_approver');
		approvalRecord.addQuery('sysapproval', this.task.sys_id);
		approvalRecord.addQuery('approver', groupManager);
		approvalRecord.query();
		if (approvalRecord.next()) {
			approvalRecord.deleteRecord();
		}
		this.removeEmergencyApprovers();
	},
	/**
	 * @description Removes and resets Emergency approvals
	 * @example
	 * var ar = new ApprovalRetriever(current);
	 * if (current.type == "Emergency") {
	 *	ar.removeEmergencyApprovers();
	 * }
	 */
	removeEmergencyApprovers: function() {
		var approvers = [];
		var changeApprovers = new GlideRecord('sys_user_grmember');
		changeApprovers.addQuery('group.name', gs.getProperty('change.management.group', 'Change Managers - IT'));
		changeApprovers.query();
		while (changeApprovers.next()) {
			approvers.push(changeApprovers.user.sys_id + '');
		}
		var approvalRecords = new GlideRecord('sysapproval_approver');
		approvalRecords.addEncodedQuery('sysapproval=' + this.task.sys_id + '^approver.sys_idIN' + approvers.toString());
		approvalRecords.query();
		if (approvalRecords.next()) {
			approvalRecords.deleteMultiple();
		}	
	},
	/**
	 * @description Resets approvals related to proposed changes
	 * @example
	 * var ar = new ApprovalRetriever(current);
	 * if (NonAppliedProposedChangesExist(current)) {
	 *	ar.resetProposedChangeApprovers();
	 * }
	 */
	resetProposedChangeApprovers: function() {
		var approvers = [];
		var changeApprovers = new GlideRecord('sys_user_grmember');
		changeApprovers.addQuery('group.name', 'Configuration Management (CMDB)');
		changeApprovers.query();
		while (changeApprovers.next()) {
			approvers.push(changeApprovers.user.sys_id + '');
		}
		var approvalRecords = new GlideRecord('sysapproval_approver');
		approvalRecords.addEncodedQuery('sysapproval=' + this.task.sys_id + '^approver.sys_idIN' + approvers.toString());
		approvalRecords.query();
		if (approvalRecords.next()) {
			approvalRecords.deleteMultiple();
		}	
	},
    type: 'ApprovalRetriever'
}