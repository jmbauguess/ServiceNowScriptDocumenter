/**
 * CatalogDateValidator
 * @namespace
 * @description Validates dates on a catalog item, because the standard validator doesn't work there
 */
var CatalogDateValidator = Class.create();
/**
 * @description validates a date/time object
 * @param {string} date a date/time string
 * @return {boolean} true if valid
 */
CatalogDateValidator.prototype.validateDateTime = function(date) {
	var dateValue = g_form.getValue(date);
	var test = getDateFromFormat(dateValue, g_user_date_time_format);	
	if (test != '' || dateValue.trim() == '') {
		return true;		
	}
	else {
		alert('Please select Valid date for the ' + date + ' field.');
		g_form.clearValue(date);		
	}	
};
/**
 * @description validates a date object
 * @param {string} date a date string
 * @return {boolean} true if valid
 */
CatalogDateValidator.prototype.validateDate = function(date) {
	var dateValue = g_form.getValue(date);
	var test = getDateFromFormat(dateValue, g_user_date_format);	
	if (test != '' || dateValue.trim() == '') {
		return true;		
	}
	else {
		alert('Please select Valid date for the ' + date + ' field.');
		g_form.clearValue(date);		
	}	
};