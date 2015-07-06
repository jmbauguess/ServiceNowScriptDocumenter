/**
 * @namespace TaskUtils
 * @description Contains base functionality for tasks
 * @type {Class}
 */
var TaskUtils = Class.create();
/**
 * @description Changes the read only status of a list of fields
 * @param {object} fields A list of fields
 * @param {boolean} trigger The state to set the fields read only status
 */
TaskUtils.prototype.setFieldsReadOnly = function(fields, trigger) {
	for (var field in fields) {
		if (fields.hasOwnProperty(field)) {
			g_form.setReadOnly(fields[field], trigger);
		}
	}
};
/**
 * @description Changes the mandatory status of a list of fields
 * @param {object} fields A list of fields
 * @param {boolean} trigger The state to set the fields mandatory status
 */
TaskUtils.prototype.setFieldsMandatory = function(fields, trigger) {
	for (var field in fields) {
		if (fields.hasOwnProperty(field)) {
			g_form.setMandatory(fields[field], trigger);
		}
	}
};
/**
 * @description Changes the display status of a list of fields
 * @param {object} fields A list of fields
 * @param {boolean} trigger The state to set the fields read only status
 */
TaskUtils.prototype.setFieldsDisplay = function(fields, trigger) {
	for (var field in fields) {
		if (fields.hasOwnProperty(field)) {
			g_form.setDisplay(fields[field], trigger);
		}
	}
};