/**
 * VariableHider
 * @namespace
 * @description Handles hiding variables or making them read-only on a ritm, because the UI policies often fail at this
 * @type {Class}
 */
var VariableHider = Class.create();
/**
 * @description disables an individual html element
 * @param {HTMLElement} element an html element
 */
VariableHider.prototype.disableAnElement = function(element) {
	try {
		Form.Element.disable(element);
	} catch (e) {
		element.disabled = true;
	}
};
/**
 * @description makes all catalog variables read only on the form
 */
VariableHider.prototype.makeVariablesReadOnly = function() {
	var variables = $$("[id^=ni]");
	for (var i = 0; i < variables.length; i++){
		try {
			Form.Element.disable(variables[i]);
		} catch (e) {
			console.log(variables[i]);
		}
	}
	var variables2 = $$("[id^=sys_display\.ni]");
	for (var i = 0; i < variables2.length; i++){
		Form.Element.disable(variables2[i]);
	}
	var variables3 = $$("[id^=IO:]");
	for (var i = 0; i < variables3.length; i++){
		Form.Element.disable(variables3[i]);
	}
	var options = document.getElementsByClassName("cat_item_option");
	for (var i = 0; i < options.length; i++) {
		options[i].disable();
	}
	var imgs = document.getElementsByTagName("img");
	for (var i = 73; i < imgs.length; i++){
		if (imgs[i].src.indexOf("images/reference_list.gifx") > 0 || imgs[i].src.indexOf("images/small_calendar.gifx") > 0){
			imgs[i].hide();
		}
	}
	var selectAreas = $$("[id$=select_0]");
	for (var i = 0; i < selectAreas.length; i++) {
		selectAreas[i].hide();
	}
	var selectAreas2 = $$("[id$=select_0_title_row]");
	for (var i = 0; i < selectAreas2.length; i++) {
		selectAreas2[i].hide();
	}
	var selectAreas3 = $$("[id$=select_0_search_row]");
	for (var i = 0; i < selectAreas3.length; i++) {
		selectAreas3[i].hide();
	}
	var selectAreas4 = $$("[id$=select_0_add_remove_container]");
	for (var i = 0; i < selectAreas4.length; i++) {
		selectAreas4[i].hide();
	}
	var selectAreas5 = $$("[id$=select_1]");
	for (var i = 0; i < selectAreas5.length; i++) {
		selectAreas5[i].disable();
	}
};
/**
 * @description Ensures that blank, read-only fields on a catalog task are not set as mandatory
 * @callback handleMissingFields
 */
VariableHider.prototype.handleCatalogTask = function() {
	var missingFields = g_form.getMissingFields();
	for (var field in missingFields) {
		if (missingFields.hasOwnProperty(field)) {
			missingFields[field] = missingFields[field].substring(5);
			try {
				g_form.setMandatory(missingFields[field], false);
			} catch (e) {}
		}
	}
	var gr = new GlideRecord('sc_item_option');
	gr.addQuery('sys_id', 'IN', missingFields.toString());
	gr.query(handleMissingFields);
	
	/**
 	* @description Gets the name of the variable so we can properly disable it
 	* @param {GlideRecord} record A response from the server
 	* @callback handleFieldNames
 	*/
	function handleMissingFields(record) {
		var questions = [];
		while (record.next()) {
			questions.push(record.item_option_new + '');
		}
		var gr = new GlideRecord('item_option_new');
		gr.addQuery('sys_id', 'IN', questions.toString());
		gr.query(handleFieldNames);
	}
	
	/**
 	* @description Handles setting the fields to read only and display false
 	* @param {GlideRecord} record A response from the server
 	*/
	function handleFieldNames(record) {
		while (record.next()) {
			g_form.setMandatory(record.name, false);
			g_form.setDisplay(record.name, false);
		}
	}
};