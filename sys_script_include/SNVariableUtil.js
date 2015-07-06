/**
 * SNVariableUtil
 * @namespace
 * @description Contains functionality that handles service catalog variables or other dictionary items
 * @type {Class}
 */
var SNVariableUtil = Class.create();
SNVariableUtil.prototype = {		
	/**
	 * @description Handles list collectors
	 * @param {string} list - a list of values/sys_ids
	 * @param {string} table - the name of a table
	 * @return {string} a string of actual values
	*/
	dealWithListTable: function(list, table) {
		var valueVar = '';
		var displayVariable = this.getReferenceDisplayVariableName(table);
		for (var item in list) {
			var items = new GlideRecord(table);
			if (items.get(list[item])) {
				valueVar += items.getValue(displayVariable) + ", ";
			}
		}
		var lastComma = valueVar.lastIndexOf(',');
		return valueVar.substring(0, lastComma);	
	},
	/**
	 * @description Finds the dictionary entry for a table that is the display value
	 * @param {string} table - a table name
	 * @return {string} the name of the column (element) which is the display value
	 */
	getReferenceDisplayVariableName: function(table) {
		var dictionary = new GlideRecord('sys_dictionary');
		dictionary.addQuery('display', true);
		dictionary.addQuery('name', table);
		dictionary.query();
		if (dictionary.next()) {
			return dictionary.element;
		}
	},
	/**
	 * @description Reference fields need to be retrieved before giving a proper value
	 * @param {string} reference - the name of a table which is being referenced
	 * @param {string} value - the sys_id value of what is being referenced
	 * @return {string} the value we care about in the table (number for tasks, name for others)
	 */
	dealWithReference: function(reference, value) {
		if (reference == 'change_request') {
			var change = new GlideRecord(reference);
			if (change.get(value)) {
				return change.number;
			}								
		} else if (reference == 'u_catalog_approvers') {
			var record = new GlideRecord(reference);
			if (record.get(value)) {
				return record.u_catalog_item.name;
			}
		} else if (reference == "sys_choice") {
			var record = new GlideRecord(reference);
			if (record.get('value', value)) {
				return record.label;
			}
		} else if (reference != '') {
			var record = new GlideRecord(reference);
			if (record.get(value)) {
				return record.name;
			}
		}
		return '';
	},
	/**
	 * @description Determines if the field type is a text type (Single, Wide or Multiline)
	 * @param {number} fieldType a number which represents a field type in the system
	 * @returns {boolean} true if it's a text field; otherwise, false
	 */
	isTextField: function(fieldType) {
		return (fieldType == 2 || fieldType == 6 || fieldType == 16) ? true : false;
	},
	/**
 	* @description Finds the value that appears on the form for a Select Box
 	* @param {string} name - the name of the question/select box variable
 	* @param {string} value - the value of the question choice
 	* @return {string} the text value of the question choice
 	*/
	getSelectValueBasedOnValue: function(name, value){
		var questionChoice = new GlideRecord('question_choice');
		questionChoice.addQuery('question.name', name);
		questionChoice.addQuery('value', value);
		questionChoice.query();
		if (questionChoice.next()){
			return questionChoice.text;
		}
	},/**
 	* @description Checks to see if the variable is a financial email, so we can format it properly
	 * @param {variable} A catalog variable
	 * @return {boolean} true if the variable is a financial variable; false otherwise
 	*/
	isFinancial: function(variable){
		if (variable == 'original_invoice' ||
			variable == 'revised_invoice' ||
		variable == 'financial_impact' ||
		variable == 'hgtv' || variable == 'food' ||
		variable == 'diy' || variable == 'gac' ||
		variable == 'door' || variable == 'hgrm' ||
		variable == 'cooking' || variable == 'fooddotcom' ||
		variable == 'travel' || variable == 'vod' ||
		variable == 'other_breakout' || variable == 'total_breakout') {
			return true;
		}
		return false;
	},
    type: 'SNVariableUtil'
}