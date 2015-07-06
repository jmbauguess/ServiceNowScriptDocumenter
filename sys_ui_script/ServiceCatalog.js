/**
 * ServiceCatalog
 * @namespace
 * @description Class for handling Service Catalog functionality
 * @type {Class}
 */
var ServiceCatalog = Class.create();
ServiceCatalog.prototype.ONBOARDING = "New Employee, Contractor, and Intern Onboarding";
ServiceCatalog.prototype.CONTRACTOR = "Revise Contractor End Date";
ServiceCatalog.prototype.VENDOR = "Vendor Access Request";
ServiceCatalog.prototype.SIX_MONTHS = 1000 * 60 * 60 * 24 * 30 * 6;
/**
 * @description validates a date field format
 * @param {string} a date string
 * @return {boolean} true if it's a valid date
 */
ServiceCatalog.prototype.validateDateField = function(field) {	
	if (getDateFromFormat(g_form.getValue(field), g_user_date_format) == 0) {
		g_form.showFieldMsg(field, 'Invalid date format', 'error');
		return false;
	} else {
		return true;
	}
};
/**
 * @description ensures a start date is at least ten days away
 * @param {string} start_date a date string
 */
ServiceCatalog.prototype.validateOnboardingStartDate = function(start_date) {
	var startDate = getDateFromFormat(g_form.getValue('start_date'), g_user_date_format);
	var tenDays = 1000 * 60 * 60 * 24 * 10;	
	var today = new Date();
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);
	var todayPlusTen = today.setDate(today.getDate() + 10);
	if ((todayPlusTen - 14500000) > startDate) {
		alert("You have selected a Start Date that is less than ten days from today. Some services may not be in place by your new hire's start date");
	}
};
/**
 * @description Ensures an end date is not greater than six months away
 * @return {boolean} true if the date is valid
 */
ServiceCatalog.prototype.validateOnboardingEndDate = function(){
	var end_date = getDateFromFormat(g_form.getValue('end_date'), g_user_date_format);
	var start_date = getDateFromFormat(g_form.getValue('start_date'), g_user_date_format);
	if ((end_date - start_date) > this.SIX_MONTHS){
		alert('End date must be less than 6 months after start');
		g_form.setValue('end_date', '');
		return false;
	} else if (start_date > end_date){
		alert('End date must be after the start date');
		g_form.showFieldMsg('end_date', 'Please select a date that is after the start date', 'error');
		return false;
	} else {
		return true;
	}
};
/**
 * @description Ensures an end date is not greater than six months away
 * @return {boolean} true if the date is valid
 */
ServiceCatalog.prototype.validateContractorEndDate = function(){
	var currentDate = getDateFromFormat(g_form.getValue('contractor_end_date'), 'yyyy-MM-dd HH:mm:ss');	
	var revisedEnd = getDateFromFormat(g_form.getValue('contractor_new_end'), g_user_date_format);
	if (revisedEnd - this.SIX_MONTHS > currentDate){
		g_form.clearValue('contractor_new_end');
		alert('New End date must be less than 6 months after Old End date');
		return false;
	} else {
		return true;
	}
};
/**
 * @description Ensures an end date is not greater than six months away
 * @return {boolean} true if the date is valid
 */
ServiceCatalog.prototype.validateNewVendorDate = function(){
	var currentEnd = getDateFromFormat(g_form.getValue('vendor_start'), g_user_date_format);
	var revisedEnd = getDateFromFormat(g_form.getValue('new_end_date'), g_user_date_format);	
	if ((revisedEnd - this.SIX_MONTHS) > currentEnd){
		alert('New End date must be less than 6 months after Start date');
		g_form.clearValue('new_end_date');
		return false;
	} else if (currentEnd > revisedEnd) {
		alert('End date must be after the start date');
		g_form.showFieldMsg('new_end_date', 'Please select a date after the start date', 'error');
		return false;
	} else {
		return true;
	}
};
/**
 * @description Ensures an end date is not greater than six months away
 * @return {boolean} true if the date is valid
 */
ServiceCatalog.prototype.validateExistingVendorDate = function(){
	var currentEnd = getDateFromFormat(g_form.getValue('IO:791111f20cd391001bbdd3fd477a64d0'), 'yyyy-MM-dd HH:mm:ss');
	var revisedEnd = getDateFromFormat(g_form.getValue('revised_end_date'), g_user_date_format);	
	if ((revisedEnd - this.SIX_MONTHS) > currentEnd){
		alert('New End date must be less than 6 months after Old End date');
		g_form.clearValue('revised_end_date');
		return false;
	} else {
		return true;
	}
};
/**
 * @description Hides service and application fields for a CMDB request
 */
ServiceCatalog.prototype.hideServiceAndApplicationFields = function(){
	this.serviceFields(false);
	this.applicationFields(false);
};
/**
 * @description handles the visibility of service fields on the cmdb request
 * @param {boolean} onOff whether or not to show the variables
 * @param {boolean} ritm whether or not the code is executing on the sc_req_item form
 */
ServiceCatalog.prototype.serviceFields = function(onOff, ritm){
	g_form.setMandatory('service_name', onOff);
	g_form.setDisplay('service_container', onOff);
	g_form.setDisplay('service_left', onOff);
	g_form.setDisplay('service_right', onOff);
	g_form.setDisplay('service_comments', onOff);
	g_form.setDisplay('associated_applications', onOff);
	g_form.setDisplay('service_short_description', onOff);
	if (g_form.getValue('action') == "add"){
		g_form.setMandatory('service_name', onOff);
	} else if (g_form.getValue('action') == "update"){
		g_form.setMandatory('existing_service_name', onOff);
	}
	g_form.setMandatory('service_location', onOff);
	g_form.setMandatory('business_criticality', onOff);
	g_form.setMandatory('service_operational_status', onOff);
	g_form.setMandatory('service_used_for', onOff);
	g_form.setMandatory('service_sox', onOff);
	g_form.setMandatory('service_responsible_department', onOff);
	g_form.setMandatory('technology_deployment', onOff);
	g_form.setMandatory('service_owned_by', onOff);
	g_form.setMandatory('service_managed_by', onOff);
	g_form.setMandatory('service_technical_contact', onOff);
	g_form.setMandatory('techncial_contact', onOff);
	g_form.setMandatory('support_group', onOff);
	g_form.setMandatory('service_type', onOff);
	g_form.setMandatory('service_category', onOff);
	if (!ritm){
		g_form.setMandatory('service_subcategory', onOff);
	} else {
		g_form.setMandatory('service_subcategory', false);
	}
	g_form.setMandatory('service_short_description', onOff);
	g_form.setDisplay('service_short_description', onOff);
};
/**
 * @description handles the visibility of application fields on the cmdb request
 * @param {boolean} onOff whether or not to show the variables
 * @param {boolean} ritm whether or not the code is executing on the sc_req_item form
 */
ServiceCatalog.prototype.applicationFields = function(onOff, ritm){
	g_form.setMandatory('app_name', onOff);
	g_form.setDisplay('app_container', onOff);
	g_form.setDisplay('left_side', onOff);
	g_form.setDisplay('right_side', onOff);
	g_form.setReadOnly('install_count', true);
	g_form.setReadOnly('license_count', true);
	if (g_form.getValue('action') == "add"){
		g_form.setMandatory('app_name', onOff);
	} else if (g_form.getValue('action') == "update"){
		g_form.setMandatory('existing_app_name', onOff);
	}
	g_form.setMandatory('manufacturer', onOff);
	g_form.setMandatory('app_operational_status', onOff);
	g_form.setMandatory('app_responsible_department', onOff);
	g_form.setMandatory('app_location', onOff);
	g_form.setMandatory('status', onOff);
	g_form.setMandatory('app_used_for', onOff);
	g_form.setMandatory('app_category', onOff);
	if (!ritm){
		g_form.setMandatory('app_subcategory', onOff);
	} else {
		g_form.setMandatory('app_subcategory', false);
	}
	g_form.setMandatory('app_owned_by', onOff);
	g_form.setMandatory('app_managed_by', onOff);
	g_form.setMandatory('business_approvers', onOff);
	g_form.setMandatory('app_technical_contact', onOff);
	g_form.setMandatory('app_business_approvers', onOff);
	g_form.setMandatory('app_sox', onOff);
	g_form.setDisplay('app_short_description', onOff);
	g_form.setMandatory('app_short_description', onOff);
	g_form.setDisplay('app_short_description', onOff);
	g_form.setDisplay('app_comments', onOff);
};
/**
 * @description sets the name fields to not mandatory for the cmdb request
 */
ServiceCatalog.prototype.cmdbFormNameFields = function(){
	g_form.setMandatory('app_name', false);
	g_form.setMandatory('service_name', false);
};
/**
 * @description calculates the digitial invoice section of an ad sales request
 */
ServiceCatalog.prototype.calculateDigitalInvoice = function(){
	var hgtv = g_form.getValue('hgtv');
	var food = g_form.getValue('food');
	var diy = g_form.getValue('diy');
	var gac = g_form.getValue('gac');
	var door = g_form.getValue('door');
	var hgrm = g_form.getValue('hgrm');
	var cooking_channel = g_form.getValue('cooking');
	var fooddotcom = g_form.getValue('fooddotcom');
	var travel = g_form.getValue('travel');
	var vod = g_form.getValue('vod');
	var other = g_form.getValue('other_breakout');	
	var total = parseFloat(hgtv) + parseFloat(food) + parseFloat(diy) + parseFloat(gac) + parseFloat(door) + parseFloat(hgrm) + parseFloat(cooking_channel) + parseFloat(fooddotcom) + parseFloat(travel) + parseFloat(vod) + parseFloat(other);
	g_form.setValue('total_breakout', total);
};
/**
 * @description Determines if any of the values on the digital invoice have changed
 * @return {boolean} true if the user has actually changed a value on the form
 */
ServiceCatalog.prototype.nothingChangedDigital = function(){
	var variables = ['hgtv', 'food', 'diy', 'gac', 'door', 'hgrm', 'cooking', 'fooddotcom', 'travel', 'vod', 'other_breakout'];
	var changeCount = 0;
	for (var x = 0; x < variables.length; x++){
		if (parseFloat(g_form.getValue(variables[x])) != 0){
			changeCount++;
		}
	}
	if (changeCount > 1){
		return true;
	} else {
		return false;
	}
};