/**
 * @namespace
 * @description There are times when variables on a ritm need to be cleared due to users changing options without clearing them.  Using g_form.setValue('name', '') will not work on the client side because the form needs the sys_id (with ni.VE prepended) to identify the element on the form
 * @type {Class}
 * @extends AbstractAjaxProcessor
 */
var VariableClearer = Class.create();
VariableClearer.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	/**
 	* @memberOf VariableClearer
 	* @description Given a map of variables that are related and a ritm, finds the sys_id of the variables on the form so they can be cleared properly
 	* @param {object} variableMap An object containing a variable name and it'd dependent values
 	* @param {string} recordSysId The sys_id of a requested item
 	*/
	findNonApplicableVariables: function(variableMap, recordSysId) {
		variableMap = this.getParameter('sysparm_variableMap') || variableMap || [],
		recordSysId = this.getParameter('sysparm_recordSysId') || recordSysId || '';
		var clearList = [];
		var variables = new GlideRecord('sc_item_option_mtom');
		variables.addQuery('request_item', recordSysId);
		variables.addQuery('sc_item_option.item_option_new.name', 'IN', variableMap.toString());
		//variables.addQuery('sc_item_option.value', 'false');
		variables.query();
		while (variables.next()) {
			clearList.push(variables.sc_item_option + '');
		}
		return clearList.toString();
	},
	/**
 	* @memberOf VariableClearer
 	* @description Given a list of variable names and requested item, finds the sys_id of those variables so they can be cleared properly
 	* @param {array} clearList An array of variable names
 	* @param {string} recordSysId The sys_id of a requested item
 	* @return {string} A string of variable sys_ids to clear
 	*/
	clearNonApplicableVariables: function(clearList, recordSysId) {
		clearList = clearList || this.getParameter('sysparm_clearList') || [];
		recordSysId = recordSysId || this.getParameter('sysparm_recordSysId') || '';
		var returnValues = [];
		var clear = new GlideRecord('sc_item_option_mtom');
		clear.addQuery('request_item', recordSysId);
		clear.addQuery('sc_item_option.item_option_new.name', 'IN', clearList.toString());
		clear.query();
		while (clear.next()) {
			if (clear.sc_item_option.item_option_new.type == 21) {
				returnValues.push(clear.sc_item_option.item_option_new.name + '');
			} else {
				returnValues.push('ni.VE' + clear.sc_item_option.sys_id);
			}
		}
		return returnValues.toString();
	},
	/**
	 * @memberOf VariableClearer
	 * @description Ensures that variables that should be empty are before saving the record
	 * @param {GlideRecord} record The current requested item
 	*/
	handlePeopleSoft: function(record) {
		if (record.variables.request_types == "edit_access") {
			if (record.variables.edit_general_ledger_access == 'false') {
				record.variables.add_gl_bu_untis = '';
				record.variables.remove_gl_bu_untis = '';
			}
			if (record.variables.edit_am_bu_access == 'false') {
				record.variables.add_am_bu_access_list = '';
				record.variables.remove_am_bu_access_list = '';
			}
			if (record.variables.edit_pc_bu_access == 'false') {
				record.variables.add_pc_bu_access_list = '';
				record.variables.remove_pc_bu_access_list = '';
			}
			if (record.variables.edit_role_access == 'false') {
				record.variables.add_access_roles_list = '';
				record.variables.remove_access_roles_list = '';
			}
		}
	},
	type: 'VariableClearer'
});