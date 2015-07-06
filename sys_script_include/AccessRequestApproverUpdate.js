/**
 * AccessRequestApproverUpdate
 * @namespace
 * @description Handles functionality for the AccessRequestApproverUpdate catalog item
 * @type {Class}
 * @see SNValidator
 * @extends AbstractAjaxProcessor
 */
var AccessRequestApproverUpdate = Class.create();
AccessRequestApproverUpdate.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	/**
 	* getApprovers
	 * @description AJAX function to return approvers to the client form
	 * @memberOf AccessRequestApproverUpdate
 	* @param {string} - A sys_id from the form
 	* @return {string} - a String/Array of approver sys_ids
 	*/
	getApprovers: function(cat_item) {
		var catalogItem = (this.getParameter('sysparm_cat_item') || cat_item);
		var approvers = new GlideRecord('u_catalog_approvers');
		if (approvers.get(catalogItem)) {
			var result = [];
			result.push(approvers.u_approver1 + '');
			result.push(approvers.u_approver2 + '');
			result.push(approvers.u_approver3 + '');
			return result.toString();
		}		
		return [];
	},
	/**
	 * getAllowedGroups
	 * @description returns an array groups who are allowed to view the catalog item
	 * @memberOf AccessRequestApproverUpdate
	 * @return {Array} A list of group names
	 */
	getAllowedGroups: function() {
		var allowedGroups = [];
		var groups = new GlideRecord('sys_user_group');
		groups.addQuery('u_access_to_approver_update', true);
		groups.query();
		while (groups.next()) {
			allowedGroups.push(groups.name + '');
		}
		return allowedGroups;
	},
	/**
 	* accessAllowed
	 * @description Determines if a user can access the catalog item
	 * @memberOf AccessRequestApproverUpdate
 	* @return - true if the user can access it
 	*/
	accessAllowed: function(user) {
		var groups = new GlideRecord('sys_user_grmember');
		groups.addQuery('user', user);
		groups.addEncodedQuery('group.nameIN'+ this.getAllowedGroups().toString());
		groups.query();
		if (groups.next()){			
			return true;
		}
		return false;
	},
	/**
 	* updateApprovers
	 * @description Given a requested item, updates the related catalog approver entry
	 * @memberOf AccessRequestApproverUpdate
 	* @param current {GlideRecord} - a requested item glide record
 	* @return true if the update was successful; false otherwise
 	*/
	updateApprovers: function(current) {
		var catalogApprovers = new GlideRecord('u_catalog_approvers');
		if (catalogApprovers.get(current.variables.catalog_item)) {
			catalogApprovers.u_approver1 = current.variables.new_approver1;
			catalogApprovers.u_approver2 = current.variables.new_approver2;
			catalogApprovers.u_approver3 = current.variables.new_approver3;
			var value = catalogApprovers.update();
			if (new SNValidator().checkValidSysIDArgument(value)) {
				return true;
			}
		}
		return false;
	},
	/**
 	* isCatalogItemSOX 
	 * @description Determines if the catalog item relates to a sox application
	 * @memberOf AccessRequestApproverUpdate
 	* @param current {GlideRecord} - the current requested item
 	* @return {boolean} - true if the catalog item relates to a sox application
 	*/
	isCatalogItemSOX: function(current) {
		var cmdb = new GlideRecord('cmdb_ci_application_software');
		var name = this.cleanName(current.variables.catalog_item);
		cmdb.addQuery('name', name);
		cmdb.query();
		if (cmdb.next()) {
			if (cmdb.u_sox_governed_yn == 'Yes') {
				return true;
			}
		}
		return false;
	},
	/**
 	* cleanName
	 * @description converts the name to match a CMDB entry - Currently Many are wrong or have multiple possibilities
	 * @memberOf AccessRequestApproverUpdate
 	* @param {string} name - The name of the catalog item
 	* @return {string} the cleaned up name
 	*/
	cleanName: function(catalogItem) {
		var approvers = new GlideRecord('u_catalog_approvers'), name = '';
		if (approvers.get(catalogItem)) {
			name = approvers.u_catalog_item.name;
		}
		if (name == 'Medea Domestic') {
			return 'Medea';
		} else if (name == 'PeopleSoft') {
			return 'PeopleSoft Financials';
		} else if (name == 'Broadway') {
			return 'Broadway - Production';
		}
		return name;
	},
	type: 'AccessRequestApproverUpdate'
});