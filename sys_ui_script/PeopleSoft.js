/**
 * @namespace
 * @description Contains utility functions for PeopleSoft Access Request
 * @type {Class}
 */
var PeopleSoft = Class.create();
PeopleSoft.prototype = new SecurityAccessRequest();
PeopleSoft.prototype.GENERAL_FILTER = 'u_catalog_item=41260ed701f635001148f272bc337a77';
PeopleSoft.prototype.GENERAL_ADD_LIST = 'add_access_roles_list';
PeopleSoft.prototype.GENERAL_REMOVE_LIST = 'remove_access_roles_list';
PeopleSoft.prototype.GRANT_ACCESS_LIST = 'grant_access_roles_list';
PeopleSoft.prototype.GRANT_ACCESS_FILTER = 'u_catalog_item=41260ed701f635001148f272bc337a77^u_role_nameNOT LIKEAM^u_role_nameNOT LIKE(PC';
PeopleSoft.prototype.AM_LIST = 'am_business_units_access_lis';
PeopleSoft.prototype.AM_FILTER = 'u_catalog_item=41260ed701f635001148f272bc337a77^u_role_nameSTARTSWITHAM';
PeopleSoft.prototype.PC_LIST = 'pc_business_units_access_lis';
PeopleSoft.prototype.PC_FILTER = 'u_catalog_item=41260ed701f635001148f272bc337a77^u_role_nameSTARTSWITHPC';
PeopleSoft.prototype.newAccessVariables = ['primary_business_function','primary_bus_func_other',
'am_bu_access','general_ledger_access','pc_bu_access','am_access_bu_units','pc_access_bu_units',
'general_ledger_business_unit','default_business_unit','grant_access_roles_list'];
PeopleSoft.prototype.editAccessVariables = ['edit_pc_bu_label','edit_am_bu_access',
'remove_am_bu_access_list','remove_access_roles_list','edit_pc_bu_access','remove_gl_bu_untis',
'add_pc_bu_access_list','edit_am_bu_label','remove_pc_bu_access_list','add_access_roles_list',
'add_am_bu_access_list','pc_business_units_access_lis','edit_role_access','edit_general_ledger_access','am_business_units_access_lis','edit_role_label','edit_general_ledger_label','add_gl_bu_untis'];
PeopleSoft.prototype.newListCollectors = ["grant_access_roles_list", "am_business_units_access_lis", "pc_business_units_access_lis"];
PeopleSoft.prototype.editListCollectors = ["add_access_roles_list", "remove_access_roles_list"];
/**
 * @description Determines if the PC list should be shown
 * @return {boolean} true if the PC list should be shown
 */
PeopleSoft.prototype.showPCList = function() {
	return (g_form.getValue('approval') == 'rework' && g_form.getValue('request_types') == 'new_access' && g_form.getValue('pc_bu_access') == 'Yes') ? true : false;
};
/**
 * @description Determines if the AM list should be shown
 * @return {boolean} true if the AM list should be shown
 */
PeopleSoft.prototype.showAMList = function() {
	return (g_form.getValue('approval') == 'rework' && g_form.getValue('request_types') == 'new_access' && g_form.getValue('am_bu_access') == 'Yes') ? true: false;
};
/**
 * @description Determines if the Grant Access list should be shown
 * @return {boolean} true if the Grant Access list should be shown
 */
PeopleSoft.prototype.showGrantList = function() {
	return (g_form.getValue('approval') == 'rework' && g_form.getValue('request_types') == 'new_access') ? true : false;
};
/**
 * @description Changes the filter of the list collector dynamically
 * @param {string} collectorName the name of a list collector
 * @param {string} filterString the filter query to run on the list collector
 */
PeopleSoft.prototype.setCollectorFilter = function(collectorName, filterString) {
	try {
		window[collectorName + 'g_filter'].reset();
		window[collectorName + 'g_filter'].setQuery(filterString);
		window[collectorName + 'acRequest']();
		g_form.setDisplay(collectorName, true);
	} catch (e) {
		setTimeout(this.setCollectorFilter, 100, collectorName, filterString);
	}
};