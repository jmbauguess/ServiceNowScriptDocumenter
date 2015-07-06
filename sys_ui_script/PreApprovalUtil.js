/**
 * PreApprovalUtil
 * @namespace
 * @description Used to filter the categories and sub categories for Change Pre-Approvals 
 * @type {Class}
 */
var PreApprovalUtil = Class.create();
/**
 * @description handles the subcategory list on a category change
 * @param {string} category The name of a category
 * @param {PreApprovalUtil~FilterSubCategories} a callback
 */
PreApprovalUtil.prototype.categoryChange = function(category) {
	var subcategories = new GlideRecord('sys_choice');
	subcategories.addQuery('name', 'change_request');
	subcategories.addQuery('language', 'en');
	subcategories.addQuery('inactive', false);
	subcategories.addQuery('element', 'u_subcategory');
	subcategories.addQuery('dependent_value', category);
	subcategories.query(FilterSubCategories);
	
	/**
	 * @callback PreApprovalUtil~FilterSubCategories
	 * @param {Response} response The response from the server
	 * @description filters the subcategories properly (ie: shows the ones it should, hides the rest)
	 */
	function FilterSubCategories(response) {
		g_form.clearOptions('chg_var_u_subcategory');
		while (response.next()) {
			var value = (String(response.label));
			g_form.addOption('chg_var_u_subcategory', value, value);
		}		
	}
};