/**
 * @description Useful for server side CM functionality
 * @namespace ChangeManagementUtil
 * @extends AbstractAjaxProcesseor
 * @type {Class}
 */
var ChangeManagementUtil = Class.create();
ChangeManagementUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	/**
	 * @description Checks to see if the emergency pre approval is complete, so we don't show an unnecessary message
	 * @memberOf ChangeManagementUtil
	 */
	isEmergencyPreApprovalComplete: function(){
		var changeTask = new GlideRecord('change_task');
		changeTask.addQuery('change_request', this.getParameter('sysparm_change'));
		changeTask.addQuery('short_description', 'Get Verbal Approval from Change Management');
		changeTask.addActiveQuery();
		changeTask.query();
		if (changeTask.next()){
			return false;
		} else {
			return true;
		}
	},
	/**
	 * @description Deletes the current workflow
	 * @param {GlideRecord} current The current change request
	 * @memberOf ChangeManagementUtil
	 */
	eliminateWorkflow: function(current) {
		var workflow = new Workflow();
		if (workflow.hasWorkflow(current)) {
			workflow.deleteWorkflow(current);
		}
	},
	/**
 	* @description In the instance where an Assignment Group/Assigned to is set in the Std-Application form, the Infrastructure type change will change the AG but not the Assigned to.  We need to ensure that the person is removed from AG if they aren't in the group
	 * @memberOf ChangeManagementUtil
	 * @param {string} sysparm_user The sys_id of a user
	 * @return {boolean} true if the user is a member of a group
 	*/
	isUserInGroup: function() {
		var user = gs.getUser().getUserByID(this.getParameter('sysparm_user'));
		var groups = user.getMyGroups();
		if (groups.indexOf("2e35338f2963f000ef11508d5fd10e03") > -1){
			return true;
		}
		return false;
	},
	/**
	 * @description Tells us if this is a server build
	 * @memberOf ChangeManagementUtil
	 * @param {string} type - The change type
	 * @return {boolean} true if it's a server build
	 */
	isServerBuild: function(type) {
		return (type == 'Std-New_Virtual_Server' || type == 'Std-New_Phys_Server') ? true : false;
	},
	/**
 	* @description Determines if there were work notes done on a record
 	* @memberOf ChangeManagementUtil
 	* @param {String} sysparm_task - a sys_id of a task record
 	* @return {boolean} true if there were worknotes for the given record
 	*/
	wereWorkNotesDone: function(){
		var task = this.getParameter('sysparm_task');
		var gr = new GlideRecord('sys_journal_field');
		gr.addQuery('element_id', task);
		gr.addQuery('element', 'work_notes');
		gr.query();
		if (gr.next()){
			return true;
		}
		return false;
	},
	/**
 	* @description Checks the approval status of a change request
 	* @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current - the current record (Change Request)
 	* @param {Array} comparison - a list of users that were original approvers
 	* @return {string} 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise
 	*/
	checkApprovalCountInWorkflowStageOne: function(current, comparison, cmdb) {		
		var gr = new GlideRecord('sysapproval_approver');
		gr.addQuery('sysapproval', current.sys_id);
		gr.query();
		var approved = 0, rejected = 0, added = 0, addedApproved = 0, total = 0, normal = 0, normalApproved = 0;
		while (gr.next()) {			
			if (gr.state == 'approved') {
				approved++;
			} else if (gr.state == 'rejected') {
				rejected++;
			}			
			if (comparison.toString().indexOf(gr.approver) == -1){
				added++;
			}
			if (comparison.toString().indexOf(gr.approver) == -1 && (gr.state == 'approved' || gr.state == 'not_required')){
				addedApproved++;
			}
			if (comparison.toString().indexOf(gr.approver) > -1){
				normal++;
			}
			if (comparison.toString().indexOf(gr.approver) > -1 && gr.state == 'approved'){
				normalApproved++;
			}
			if (gr.state == 'rework') {
				return 'rework';
			}
			total++;
		}
		if (rejected > 0){
			return 'rejected';
		}
		if ((normalApproved == normal) && (added == addedApproved)){
			return 'approved';
		} else if (added == addedApproved && this.seeIfRegularApproverIsRemoved(gr, comparison)) {
			return 'approved';
		} else if (cmdb && approved > 0) {
			return 'approved';
		} else {
			return '';
		}
	},
	/**
 	* @description Checks the approval status of a change request
 	* @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current - the current record (Change Request)
 	* @param {Array} comparison - a list of users that were original approvers
 	* @return {string} 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise
 	*/
	checkApprovalCountInWorkflowStageTwo: function(current, comparison){
		var gr = new GlideRecord('sysapproval_approver');
		gr.addQuery('sysapproval', current.sys_id);
		gr.query();
		var approved = 0, rejected = 0, added = 0, addedApproved = 0, total = 0, normalApproved = 0, normal = 0;
		while (gr.next()){
			if (gr.state == 'approved'){
				approved++;
			} else if (gr.state == 'rejected'){
				rejected++;
			}			
			if (gr.state == 'rework') {
				return 'rework';
			}
			if (comparison.toString().indexOf(gr.approver) == -1){
				added++;
			}
			if (comparison.toString().indexOf(gr.approver) == -1 && (gr.state == 'approved' || gr.state == 'not_required')){
				addedApproved++;
			}
			if (comparison.toString().indexOf(gr.approver) > -1){
				normal++;
			}
			if (comparison.toString().indexOf(gr.approver) > -1 && gr.state == 'approved'){
				normalApproved++;
			}
			total++;
		}
		if (rejected > 0){
			return 'rejected';
		}
		if ((normalApproved > 0) && (added == addedApproved)){
			return 'approved';
		} else if (added == addedApproved && this.seeIfRegularApproverIsRemoved(gr, comparison)) {
			return 'approved';
		} else {
			return '';
		}
	},
	/**
 	* @description Checks the approval status of a change request during the phase 2 approval
 	* @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current - the current record (Change Request)
 	* @param {Array} changeApproversTotal- the number of change approvers - based on the CI or CM group
 	* @return {string} 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise
 	*/
	checkCMPhaseApproval: function(current, changeApprovers) {
		var gr = new GlideRecord('sysapproval_approver');
		gr.addQuery('sysapproval', current.sys_id);
		gr.query();
		var approved = 0, rejected = 0, added = 0, addedApproved = 0, normal = 0, normalApproved = 0;
		while (gr.next()) {
			gs.log(changeApprovers.toString().indexOf(gr.approver) + " : " + gr.approver + " : " + changeApprovers.toString());
			if (gr.state == 'approved'){
				approved++;
			} else if (gr.state == 'rejected'){
				rejected++;
			}
			if (gr.state == 'rework') {
				return 'rework';
			}
			if (changeApprovers.toString().indexOf(gr.approver) == -1){
				added++;
			}
			if (changeApprovers.toString().indexOf(gr.approver) == -1 && (gr.state == 'approved' || gr.state == 'not_required')){
				addedApproved++;
			}
			if (changeApprovers.toString().indexOf(gr.approver) > -1){
				normal++;
			}
			if (changeApprovers.toString().indexOf(gr.approver) > -1 && gr.state == 'approved'){
				normalApproved++;
			}
		}
		if (rejected > 0) {
			return 'rejected';
		}
		if (normalApproved > 0 && (added == addedApproved)) {
			return 'approved';
		} else if (added == addedApproved && this.seeIfRegularApproverIsRemoved(gr, changeApprovers)) {
			return 'approved';
		} else {
			return '';
		}
	},
	/**
 	* @Depricated
 	* @description Checks the approval status of a change request
 	* @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current - the current record (Change Request)
 	* @return {string} 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise
 	*/
	checkApprovalCountInWorkflow: function(current){
		var gr = new GlideRecord('sysapproval_approver');
		gr.addQuery('sysapproval', current.sys_id);
		gr.query();
		var counter = 0;
		var approved = 0;
		var rejected = 0;
		var notyetrequested = 0;
		while (gr.next()){
			counter++;
			if (gr.state == 'approved'){
				approved++;
				gr.u_first_stage_cm = true;
				gr.update();
			} else if (gr.state == 'rejected'){
				rejected++;
			} else if (gr.state == 'not requested'){
				notyetrequested++;
			}
		}
		if (rejected > 0){
			return 'rejected';
		}
		if (approved == (counter - notyetrequested)){
			return 'approved';
		} else {
			return '';
		}
	},
	/**
 	* @Depricated
 	* @description Checks the approval status of a change request during the phase 2 approval
 	* @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current - the current record (Change Request)
 	* @param {integer} changeApproversTotal- the number of change approvers - based on the CI or CM group
 	* @return {string} 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise
 	*/
	checkPhaseTwoApproval: function(current, changeApproversTotal){
		var gr = new GlideRecord('sysapproval_approver');
		gr.addQuery('sysapproval', current.sys_id);
		gr.addQuery('u_first_stage_cm', false);
		gr.query();
		var counter = 0;
		var approved = 0;
		var rejected = 0;
		var changeApprovalsDone = 0;
		while (gr.next()){
			counter++;
			if (gr.state == 'approved'){
				approved++;
			} else if (gr.state == 'rejected'){
				rejected++;
			}
			if (gr.state == 'approved' && this.isCM(gr.approver) && changeApprovalsDone == 0){
				changeApprovalsDone++;
			} else if (gr.state == 'approved' && this.isCM(gr.approver) && changeApprovalsDone != 0){
				approved--;
			}
		}
		if (rejected > 0){
			return 'rejected';
		}
		if (approved == (counter - changeApproversTotal + 1) && changeApprovalsDone == 1){
			return 'approved';
		} else {
			return '';
		}
	},
	
	/**
 	* @description Determines if the approver is a change manager.  We only want the Change manager's approval to count once during phase 2
	 * @memberOf ChangeManagementUtil
	 * @param {string} approver The sys_id of an approver
	 * @return {boolean} true if the user is a member of the change management group
 	*/
	isCM: function(approver){
		var person = new GlideRecord('sys_user_grmember');
		person.addQuery('user', approver);
		person.query();
		while (person.next()){
			if (person.group.name == gs.getProperty('change.management.group', 'Change Managers - IT')){
				return true;
			}
		}
		return false;
	},
	/**
 	* @description checks the approvals to see if the default approver(s) have been removed
	 * @memberOf ChangeManagementUtil
 	* @param  {GlideRecord} approvalGR GlideRecord containing approvers
 	* @param  {Array} comparison an array of approvers
 	* @return {boolean} true if all the original approvers are removed; false if they are still there
 	*/
	seeIfRegularApproverIsRemoved: function(approvalGR, comparison){
		approvalGR.restoreLocation();
		var recordCount = approvalGR.getRowCount(), count = 0;		
		while (approvalGR.next()) {
			if (comparison.toString().indexOf(approvalGR.approver) > -1) {
				count++;
			}
		}
		approvalGR.restoreLocation();
		if (count == 0) {
			return true;
		}
		return false;
	},
	/**
 	* @description Determines if a task is one from the workflows
	 * @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current the task record to check
 	* @return {boolean} true if it's predefined; false if it's a custom task
 	*/
	isPredefined: function(current){
		if (current.short_description == "Create and attach the Test Plan" ||
			current.short_description == "Create and attach the Test Results" ||
		current.short_description == "Create and attach the Deployment Plan" ||
		current.short_description == "Create and attach the Release Notes" ||
		current.short_description == "Complete and attach the SOX control design document" ||
		current.short_description == "Complete and attach the SOX determination letter" ||
		current.short_description == "Complete and attach the Risk Analysis" ||
		current.short_description == "Submit all SOX documentation to ACS for approval" ||
		current.short_description == "Remove DNS Entry - [Server(s)]" ||
		current.short_description == "Remove Backup Policies - [Server(s)]" ||
		current.short_description == "Update CMDB - [Move/Decommission]" ||
		current.short_description == "Add Server to DNS and Configure Standard Host Monitoring" ||
		current.short_description == "Run Baseline Security Scan" ||
		current.short_description == "Installation of Virtual Server and Software" ||
		current.short_description == "Install Server - Rack/Cable" ||
		current.short_description == "Install Server Software" ||
		current.short_description == "Configure Netbackup" ||
		current.short_description == "Reconfigure Network Ports" ||
		current.short_description == "Update CMDB - [Move/Decommission]" ||
		current.short_description == "Finalize Server Configuration" ||
		current.short_description == "Configure Build VLAN" ||
		current.short_description == "Complete and attach the post-mortem document") {
			return true;
		}
		return false;
	},
	/**
 	* @description Reschedules a backed out change request
	 * @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current The change request to copy
 	* @return {GlideRecord} The child change request to redirect the form to
 	*/
	reschedule: function(current) {
		current.u_lifecycleflag = 'rescheduled';
		current.update();
		var childChange = new GlideRecord('change_request');
		childChange.initialize();
		childChange.type = current.type;
		childChange.assignment_group = current.assignment_group;
		childChange.assigned_to = current.assigned_to;
		childChange.impact = current.impact;
		childChange.urgency = current.urgency;
		childChange.risk = current.risk;
		childChange.u_outage_not_req = current.u_outage_not_req;
		childChange.category = current.category;
		childChange.u_subcategory = current.u_subcategory;
		childChange.u_business_service = current.u_business_service;
		childChange.cmdb_ci = current.cmdb_ci;
		childChange.group_list = current.group_list;
		childChange.watch_list = current.watch_list;
		childChange.short_description = current.short_description;
		childChange.description = current.description;
		childChange.justification = current.justification;
		childChange.u_life_cycle_status = "Draft";
		childChange.parent = current.sys_id;
		var childSys = childChange.insert();
		this.copyChangeTasks(current, childChange);
		this.copyAffectedCIs(current, childChange);
		this.copyImpactedServices(current, childChange);
		return childChange;
	},
	/**
 	* @description Copies custom change tasks from a backedout change to its child
	 * @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current the current change request record
 	* @param childChange {GlideRecord} the child record
 	*/
	copyChangeTasks: function(current, childChange) {
		var change_tasks = new GlideRecord('change_task');
		change_tasks.addQuery('change_request', current.sys_id);
		change_tasks.query();
		while(change_tasks.next()){
			if (!this.isPredefined(change_tasks)){
				//gs.log(change_tasks.short_description + " is not predefined")
				var newTask = new GlideRecord('change_task');
				newTask.initialize();
				newTask.short_description = change_tasks.short_description;
				newTask.description = change_tasks.description;
				newTask.assignment_group = change_tasks.assignment_group;
				newTask.assigned_to = change_tasks.assigned_to;
				newTask.work_notes_list = change_tasks.work_notes_list;
				newTask.cmdb_ci = change_tasks.cmdb_ci;
				newTask.change_request = childChange.sys_id;
				newTask.insert();
			}
		}
	},
	/**
 	* @description Copies affected ci records from a parent change to the child change
	 * @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current the current change request record
 	* @param {GlideRecord} the child record
 	*/
	copyAffectedCIs: function(current, childChange) {
		var task_ci = new GlideRecord('task_ci');
		task_ci.addQuery('task', current.sys_id);
		task_ci.addQuery('ci_item', '!=', current.cmdb_ci);
		task_ci.query();
		while (task_ci.next()){
			var newTaskCI = new GlideRecord('task_ci');
			newTaskCI.initialize();
			newTaskCI.task = childChange.sys_id;
			newTaskCI.ci_item = task_ci.ci_item;
			newTaskCI.insert();
		}
	},
	/**
 	* @description Copies impacted services records from a parent change to the child change
	 * @memberOf ChangeManagementUtil
 	* @param {GlideRecord} current the current change request record
 	* @param {GlideRecord} the child record
 	*/
	copyImpactedServices: function(current, childChange) {
		var impacted_service = new GlideRecord('task_cmdb_ci_service');
		impacted_service.addQuery('task', current.sys_id);
		impacted_service.addQuery('cmdb_ci_service', '!=', current.u_business_service);
		impacted_service.query();
		while (impacted_service.next()){
			var newImpactedService = new GlideRecord('task_cmdb_ci_service');
			newImpactedService.initialize();
			newImpactedService.task = childChange.sys_id;
			newImpactedService.cmdb_ci_service = impacted_service.cmdb_ci_service;
			newImpactedService.insert();
		}
	},
	/**
 	* @description Checks to see if all change tasks are closed.  If so, sets a variable to be true
	 * @memberOf ChangeManagementUtil
 	* @param {string} changeRequestSysID - a sys_id of a change request
 	*/
	checkForAllChangeTasksClosed: function(changeRequestSysID){
		var changeTask = new GlideRecord('change_task');
		changeTask.addQuery('change_request', changeRequestSysID);
		changeTask.addActiveQuery();
		changeTask.query();
		if (changeTask.next()){
			this.updateChangeTasksClosedField(changeRequestSysID, false);
		} else {
			this.updateChangeTasksClosedField(changeRequestSysID, true);
		}
	},
	/**
 	* @description Performs the action of updating the change request to tell if all tasks are closed
	 * @memberOf ChangeManagementUtil
 	* @param {string} changeRequestSysID - a sys_id of a change request
 	* @param {boolean} action - the true/false value to update the change request with
 	*/
	updateChangeTasksClosedField: function(changeRequestSysID, action){
		var changeRequest = new GlideRecord('change_request');
		if (changeRequest.get(changeRequestSysID)){
			if (changeRequest.u_all_tasks_closed != action) {
				changeRequest.u_all_tasks_closed = action;
				changeRequest.update();
			}
		}
	},
	type: 'ChangeManagementUtil'
});