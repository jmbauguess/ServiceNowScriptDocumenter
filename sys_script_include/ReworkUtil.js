/**
 * ReworkUtil
 * @namespace ReworkUtil
 * @description Handles functionality for rework
 * @type {Class}
 */
var ReworkUtil = Class.create();
ReworkUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	/**
	 * @memberOf ReworkUtil
	 * @description Determines if a catalog item is reworkable
	 * @param {GlideRecord} current The current requested item record OR the sys_id
	 * @return {boolean} true if the catalog item is reworkable; false otherwise
	 * @example
	 * //From an email notification, to include the rework link
	 * var ru = new ReworkUtil();
	 * ru.isReworkable(current);
	 */
    isReworkable: function(current) {
		current = current || this.getParameter('sysparm_requested_item');
		var returnValue = false,
			name = current.variables.name || current.variables.requestor;
		var catItem = (catItem == undefined) ? catItem = this.getCatItem(current) : '';
		name = (name == undefined) ? name = this.getRequestedForName(current) : '';
		var reworkable = new GlideRecord('u_reworkable_cat_item');
		if (reworkable.get('u_catalog_item', catItem)) {			
			return this.checkApprover(current, name);
		}
		return returnValue;
	},
	/**
	 * @memberOf ReworkUtil
	 * @description Checks to see if the approver is the same as the "requested for"
	 * @param {GlideRecord} current The current requested item record
	 * @param {string} name The name of the requested for
	 * @return {boolean} false if the approver is the requested for, true otherwise
	 */
	checkApprover: function(current, name) {
		var approval = new GlideRecord('sysapproval_approver');
		approval.addQuery('sysapproval', current);
		approval.addQuery('approver', name);
		approval.addQuery('state', 'requested');
		approval.query();
		if (approval.next()) {
			return false;
		}
		return true;
	},
	/**
	 * @memberOf ReworkUtil
	 * @description Gets the catalog item related to the ritm, if we only have a sys_id
	 * @param {string} ritm The sys_id of a ritm
	 * @return {string} The sys_id of the catalog item
	 */
	getCatItem: function(ritm) {
		var requestItem = new GlideRecord('sc_req_item');
		if (requestItem.get(ritm)) {
			return requestItem.cat_item;
		}
		return '';
	},
	/**
	 * @memberOf ReworkUtil
	 * @description Gets the requested for variable from the ritm
	 * @param {string} ritm The sys_id of a ritm
	 * @return {string} The sys_id of the requested for variable
	 */
	getRequestedForName: function(ritm) {
		var requestItem = new GlideRecord('sc_item_option_mtom');
		requestItem.addQuery('request_item', ritm);
		requestItem.addQuery('sc_item_option.item_option_new.name', 'name').addOrCondition('sc_item_option.item_option_new.name', 'requestor');
		requestItem.query();
		while (requestItem.next()) {
			return requestItem.sc_item_option.value;			
		}
		return '';
	},
    type: 'ReworkUtil'
});