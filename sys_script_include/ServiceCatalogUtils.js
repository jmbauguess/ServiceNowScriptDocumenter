/**
 * ServiceCatalogUtils
 * @namespace
 * @description Utilities for general Service Catalog items: requests, requested items, etc.
 * @type {Class}
 * @extends AbstractAjaxProcessor
 */
var ServiceCatalogUtils = Class.create();
ServiceCatalogUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	/**
 	* @description Determines the current end date of a contractor
 	* @memberOf ServiceCatalogUtils
 	* @param {string} sysparm_contractor AJAX parameter that contains a contractor's sys_id
 	* @return {Date} the contractor's current expiration date OR the current date if the contractor's date is empty
 	*/
	getContractorEndDate: function(){
		var contractor = this.getParameter('sysparm_contractor');
		var userRecord = new GlideRecord('sys_user');
		userRecord.addQuery('sys_id', contractor);
		userRecord.query();
		while (userRecord.next()){
			return userRecord.u_expiration_date != '' ? userRecord.u_expiration_date : new GlideDateTime().getDisplayValueInternal();
		}
	},
	/**
 	* @description Returns the expiration date of the current user
 	* @memberOf ServiceCatalogUtils
 	* @param {string} sysparm_contractor AJAX parameter that contains a contractor's sys_id
 	* @return {boolean} true if the contractor has an end date; false otherwise
 	*/
	isContractorEndDate: function(){
		var contractor = this.getParameter('sysparm_contractor');
		var userRecord = new GlideRecord('sys_user');
		userRecord.addQuery('sys_id', contractor);
		userRecord.query();
		while (userRecord.next()){
			return userRecord.u_expiration_date != '' ? true : false;
		}
	},
	/**
 	* @description Determines the company of the current contractor
 	* @memberOf ServiceCatalogUtils
 	* @param {string} sysparm_contractor AJAX parameter that contains a contractor's sys_id
 	* @return {string} the current company of the contractor
 	*/
	getContractorCompany: function(){
		var contractor = this.getParameter('sysparm_contractor');
		var userRecord = new GlideRecord('sys_user');
		userRecord.addQuery('sys_id', contractor);
		userRecord.query();
		while (userRecord.next()){
			return userRecord.company != '' ? userRecord.company : 'undefined';
		}
	},
	
	/**
 	* @description Iterate through all approvals related to a task.
 	* @memberOf ServiceCatalogUtils
 	* @param {string} sysparm_task AJAX parameter which is the current task number
 	* @return {boolean} If any are still 'requested', return false.
 	*/
	areApprovalsComplete: function(){
		var currentRecord = this.getParameter('sysparm_task');
		var approvalList = new GlideRecord('sysapproval_approver');
		approvalList.addQuery('sysapproval.number', currentRecord);
		approvalList.query();
		while (approvalList.next()){
			if (approvalList.state == 'requested'){
				return false;
			}
		}
		return true;
	},
	/**
 	* @description Iterate through all approvals related to a task.
 	* @memberOf ServiceCatalogUtils
 	* @param {string} sysparm_task AJAX parameter which is the current task number
 	* @return {boolean} If any are not in a 'Complete' state, return false;
 	*/
	areTasksComplete: function(){
		var currentRecord = this.getParameter('sysparm_task');
		var taskList = new GlideRecord('sc_task');
		taskList.addQuery('request', currentRecord);
		taskList.query();
		while (taskList.next()){
			if (taskList.state == 1 || taskList.state == 2 || taskList.state == -5) {
				return false;
			}
		}
		return true;
	},
	/**
 	* @description Checks approvals and tasks for completion.
 	* @memberOf ServiceCatalogUtils
 	* @param {string} sysparm_task AJAX parameter of the current task number
 	* @param {string} sysparm_req AJAX parameter of the current request number
 	* @return {boolean} If complete, returns true.
 	*/
	canStateBeChanged: function() {
		var currentRecord = this.getParameter('sysparm_task');
		var approvalList = new GlideRecord('sysapproval_approver');
		approvalList.addQuery('sysapproval.number', currentRecord);
		approvalList.query();
		while (approvalList.next()){
			if (approvalList.state == 'requested'){
				return false;
			}
		}
		var currentRecord = this.getParameter('sysparm_req');
		var taskList = new GlideRecord('sc_task');
		taskList.addQuery('request', currentRecord);
		taskList.query();
		while (taskList.next()){
			if (taskList.state == 1 || taskList.state == 2 || taskList.state == -5) {
				return false;
			}
		}
		return true;
	},
	/**
 	* @description the reference qualifier for the CI field on the Firewall Rule Request form
 	* @memberOf ServiceCatalogUtils
 	* @return {string} a string containing the appropriate reference qualifier
 	* @example
 	* //From a Reference Qual field on a dictionary entry or variable entry
 	* javascript:new ServiceCatalogUtils().firewallRuleRef();
 	*/
	firewallRuleRef: function() {
		return 'sys_class_nameINSTANCEOFcmdb_ci_hardware^ORsys_class_name=cmdb_ci_win_cluster^ORsys_class_nameINSTANCEOFcmdb_ci_database^ORsys_class_nameINSTANCEOFcmdb_ci_db_catalog^ORsys_class_nameINSTANCEOFcmdb_ci_db_instance^ORsys_class_name=cmdb_ci_service^ORsys_class_nameINSTANCEOFu_cmdb_ci_electrical^ORsys_class_name=cmdb_ci_circuit^ORsys_class_nameINSTANCEOFcmdb_ci_ups^ORsys_class_nameINSTANCEOFcmdb_ci_pdu^ORsys_class_nameINSTANCEOFu_cmdb_ci_mechanical^ORsys_class_nameINSTANCEOFcmdb_ci_crac^ORsys_class_nameINSTANCEOFcmdb_ci_netgear^sys_class_name!=cmdb_ci_computer^sys_class_name!=cmdb_ci_printer^sys_class_name!=u_cmdb_ci_mgmt_device';
	},
	/**
 	* @description Used by the Request Addition to the CMDB
 	* @memberOf ServiceCatalogUtils
 	* @param {string} sysparm_category AJAX parameter The name of a category
 	* @param {string} sysparm_app AJAX parameter The name of an application
 	* @return {string} a toStringed array of subcategory values
 	*/
	updateReferenceQual: function(){
		var arr = [];
		var category = this.getParameter('sysparm_category');
		var sysChoice = new GlideRecord('sys_choice');
		sysChoice.addEncodedQuery('element=subcategory^name=cmdb_ci^dependent_valueSTARTSWITH' + category);
		sysChoice.query();
		while (sysChoice.next()){
			arr.push(sysChoice.label + '');
		}
		/**
 		* Since changing the category value clears the subcategory, we must provide existing subcategory if present
 		*/
		var app = this.getParameter('sysparm_app');
		var gr = new GlideRecord('cmdb_ci');
		if (gr.get(app)){
			var result = this.newItem("result");
			result.setAttribute("subcategory", gr.subcategory);
		}
		return arr.toString();
	},
	/**
 	* @description Since the g_form.getReference method is weird on RITMs, use this to get user information
 	* @memberOf ServiceCatalogUtils
 	*/
	getUserInformationOnRITM: function(){
		var userSysID = this.getParameter('sysparm_user');
		var user = new GlideRecord('sys_user');
		if (user.get(userSysID)){
			var userArray = [user.phone, user.department, user.location, user.title, user.user_name];
			return userArray.toString();
		}
	},
	
	/**
 	* @description Determines if the work done for a catalog item request is automated with code or not
 	* @memberOf ServiceCatalogUtils
 	* @param {string} name the name of a requested item's catalog item
 	* @return {boolean} true if the work is automated; false if there are tasks to be generated
 	*/
	isAutomated: function(name){
		var title = name;
		if (title == "Renew A Pre Approval" ||
			title == "Change Request Pre-Approval" ||
		title == "Ad Sales Marketing Invoice Change" ||
		title == "Request Assignment Group Maintenance" ||
		title == "Access Request Approver Update") {
			return true;
		}
		return false;
	},
	
	/**
 	* @description Checks to see if the ritm is an Ad Sales Request
 	* @memberOf ServiceCatalogUtils
 	* @param {string} title The title of a ritm's catalog item title
 	* @return {boolean} true if it's an ad sales request
 	*/
	isAdSales: function(title){
		return title === "Ad Sales";
	},
	
	/**
 	* @description Determines the type of Ad Sales request
 	* @memberOf ServiceCatalogUtils
 	* @param {GlideRecord} approvalFor a requested item record
 	* @return {string} On-Air or Digital
 	*/
	getAdSalesType: function(approvalFor){
		var vendor = new GlideRecord('sc_item_option_mtom');
		vendor.addQuery('request_item', approvalFor.sys_id);
		vendor.orderByDesc('sc_item_option.item_option_new.name');
		vendor.query();
		var result = '';
		while(vendor.next()){
			if (vendor.sc_item_option.item_option_new.name == 'request_type'){
				result += vendor.sc_item_option.value;
			}
		}
		return "_" + result.toLowerCase();
	},
	/**
 	* @description Checks to see if the ritm is a Firewall Rule Request
 	* @memberOf ServiceCatalogUtils
 	* @param {string} name the name of a requested item's catalog item
 	* @return {boolean} true if it's a firewall rule request
 	*/
	isFirewall: function(name) {
		return name == "Firewall Rule Request";
	},
	/**
	 * @description Checks tasks for the current requested item for completion
	 * @memberOf ServiceCatalogUtils
	 * @param {GlideRecord} current A requested item
	 * @return {boolean} true if all tasks are complete; false otherwise
	 * @example
	 * //From a Wait For Condition in a workflow
	 * answer = new ServiceCatalogUtils().waitForTasksComplete(current);
 	*/
	waitForTasksComplete: function(current) {
		var catalogTasks = new GlideRecord("sc_task");
		catalogTasks.addEncodedQuery('stateNOT IN3,4,7^request_item=' + current.sys_id);
		catalogTasks.addQuery('wf_activity', '');
		catalogTasks.query();
		if (catalogTasks.next()) {
			return false;
		} else {
			return true;
		}
	},
	type: 'ServiceCatalogUtils'
});