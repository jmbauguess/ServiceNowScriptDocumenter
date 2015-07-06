/**
 * MedeaInternational
 * @namespace
 * @description Contains functions for the Medea International Catalog Item and its Variable Sets/Variables
 * @type {Class}
 * @extends SecurityAccessRequest
 */
var MedeaInternational = Class.create();
MedeaInternational.prototype = new SecurityAccessRequest();
MedeaInternational.prototype.GRANT_ELECTRONIC_LABEL = 'container_aa95f801b0aee5001148a7daebd297c7';
MedeaInternational.prototype.USER_SERVICES_LABEL = 'container_49423259b0d0ce001bbdc8bc22e1983c';
MedeaInternational.prototype.CONTRACT_SECURITY_LABEL = 'container_82723259b0d0ce001bbdc8bc22e1989b';
MedeaInternational.prototype.COUNTRY_LABEL = 'container_6b92b619b0d0ce001bbdc8bc22e19881';
MedeaInternational.prototype.FOLDER_LABEL = 'container_60c2b259b0d0ce001bbdc8bc22e1987c';
MedeaInternational.prototype.APPLICATION_LABEL = 'container_eb973364b02ae5001148a7daebd29797';
MedeaInternational.prototype.ALL_SERVICE_GROUPS = { 'asia' : '6f6abe99b0d0ce001bbdc8bc22e1980b', 'emea' : 'e76abe99b0d0ce001bbdc8bc22e1980c', 'caribbean' : '636abe99b0d0ce001bbdc8bc22e1980d', 'latin' : '2f6abe99b0d0ce001bbdc8bc22e1980d'};
MedeaInternational.prototype.RELATED_SERVICE_GROUPS = {
	'asia' : ['af6abe99b0d0ce001bbdc8bc22e1980b', 'ef6abe99b0d0ce001bbdc8bc22e1980b', '236abe99b0d0ce001bbdc8bc22e1980c', '636abe99b0d0ce001bbdc8bc22e1980c', 'a36abe99b0d0ce001bbdc8bc22e1980c', 'e36abe99b0d0ce001bbdc8bc22e1980c', '276abe99b0d0ce001bbdc8bc22e1980c', '676abe99b0d0ce001bbdc8bc22e1980c', 'a76abe99b0d0ce001bbdc8bc22e1980c'],
	'emea' : ['2b6abe99b0d0ce001bbdc8bc22e1980c', '6b6abe99b0d0ce001bbdc8bc22e1980c', 'ab6abe99b0d0ce001bbdc8bc22e1980c', 'eb6abe99b0d0ce001bbdc8bc22e1980c', '2f6abe99b0d0ce001bbdc8bc22e1980c', '6f6abe99b0d0ce001bbdc8bc22e1980c', 'af6abe99b0d0ce001bbdc8bc22e1980c', 'ef6abe99b0d0ce001bbdc8bc22e1980c', '236abe99b0d0ce001bbdc8bc22e1980d'],
	'caribbean' : ['a36abe99b0d0ce001bbdc8bc22e1980d', 'e36abe99b0d0ce001bbdc8bc22e1980d', '276abe99b0d0ce001bbdc8bc22e1980d', '676abe99b0d0ce001bbdc8bc22e1980d', 'a76abe99b0d0ce001bbdc8bc22e1980d', 'e76abe99b0d0ce001bbdc8bc22e1980d', '2b6abe99b0d0ce001bbdc8bc22e1980d', '6b6abe99b0d0ce001bbdc8bc22e1980d', 'ab6abe99b0d0ce001bbdc8bc22e1980d', 'eb6abe99b0d0ce001bbdc8bc22e1980d'],
	'latin' : ['6f6abe99b0d0ce001bbdc8bc22e1980d', 'af6abe99b0d0ce001bbdc8bc22e1980d']
};
MedeaInternational.prototype.FIELDS = {
	'new_access' : ['role', 'add_user_services', 'add_contract_security_group', 'add_country', 'add_folder', 'folder_access_type'],
	'edit_access' : ['edit_role', 'add_user_services', 'add_contract_security_group', 'add_country', 'add_folder', 'remove_user_services', 'rmv_contract_security_group', 'remove_country', 'folder_access_type', 'remove_folder'],
	'delete_access' : ['effective_date']
};
MedeaInternational.prototype.FOLDER_NONE = '276a72d9b0d0ce001bbdc8bc22e19801';
/**
 * @description Sets a list of fields to be mandatory (or not)
 * @param {string} accessType The type of access
 * @example
 * new MedeaInternational().setMandatories('edit_access', true); //sets all "edit access" fields to mandatory
 * @example
 * new MedeaInternational().setMandatories('edit_access', false); //sets all "edit access" fields to not mandatory
 */
MedeaInternational.prototype.setMandatories = function(accessType, onOff) {
	var fields = this.FIELDS[accessType];
	for (var i = 0 ; i < fields.length; i++) {
		g_form.setMandatory(fields[i], onOff);
	}
};
/**
 * @description Toggles all labels on or off
 * @param {boolean} on Whether to turn the labels on or off
 */
MedeaInternational.prototype.toggleAllLabels = function(on) {
	if (on) {
		this.shower(this.APPLICATION_LABEL);
		this.shower(this.USER_SERVICES_LABEL);
		this.shower(this.GRANT_ELECTRONIC_LABEL);
		this.shower(this.CONTRACT_SECURITY_LABEL);
		this.shower(this.COUNTRY_LABEL);
		this.shower(this.FOLDER_LABEL);
	} else {
		this.hider(this.APPLICATION_LABEL);
		this.hider(this.USER_SERVICES_LABEL);
		this.hider(this.GRANT_ELECTRONIC_LABEL);
		this.hider(this.CONTRACT_SECURITY_LABEL);
		this.hider(this.COUNTRY_LABEL);
		this.hider(this.FOLDER_LABEL);
	}
};
/**
 * @description Toggles the application label on or off
 * @param {boolean} on Whether to turn the label on or off
 */
MedeaInternational.prototype.toggleApplicationLabel = function(on) {
	if (on) {
		this.shower(this.APPLICATION_LABEL);
	} else {
		this.hider(this.APPLICATION_LABEL);
	}
};
/**
 * @description Toggles the user services label on or off
 * @param {boolean} on Whether to turn the label on or off
 */
MedeaInternational.prototype.toggleUserServicesLabel = function(on) {
	if (on) {
		this.shower(this.USER_SERVICES_LABEL);
	} else {
		this.hider(this.USER_SERVICES_LABEL);
	}
};
MedeaInternational.prototype.toggleElectronicAccessLabel = function(on) {
	if (on) {
		this.shower(this.GRANT_ELECTRONIC_LABEL);
	} else {
		this.hider(this.GRANT_ELECTRONIC_LABEL);
	}
};
/**
 * @description Toggles the contract security label on or off
 * @param {boolean} on Whether to turn the label on or off
 */
MedeaInternational.prototype.toggleContractSecurityLabel = function(on) {
	if (on) {
		this.shower(this.CONTRACT_SECURITY_LABEL);
	} else {
		this.hider(this.CONTRACT_SECURITY_LABEL);
	}
};
/**
 * @description Toggles the country label on or off
 * @param {boolean} on Whether to turn the label on or off
 */
MedeaInternational.prototype.toggleCountryLabel = function(on) {
	if (on) {
		this.shower(this.COUNTRY_LABEL);
	} else {
		this.hider(this.COUNTRY_LABEL);
	}
};
/**
 * @description Toggles the folder label on or off
 * @param {boolean} on Whether to turn the label on or off
 */
MedeaInternational.prototype.toggleFolderLabel = function(on) {
	if (on) {
		this.shower(this.FOLDER_LABEL);
	} else {
		this.hider(this.FOLDER_LABEL);
	}
};
/**
 * @description Sets the mandatory state of the folder access control
 */
MedeaInternational.prototype.folderAccessControl = function() {
	if (g_form.getTableName() == "sc_req_item" && g_form.getValue('approval') != 'rework') {
		var missing = g_form.getMissingFields();
		if (missing.length != 0) {
			for (var miss in missing) {
				if (missing.hasOwnProperty(miss)) {
					var element = document.getElementById(missing[miss]);
					if (element.disabled) {
						g_form.setMandatory(missing[miss], false);
						return;
					}
				}
			}
		}
	} else if (g_form.getTableName() == "sc_req_item" && g_form.getValue('approval') == 'rework') {
		var test = (g_form.getValue('add_folder').indexOf(this.FOLDER_NONE) > -1 ||
					g_form.getValue('remove_folder').indexOf(this.FOLDER_NONE) > -1) || 
					(String(g_form.getValue('add_folder')) == '' && 
			 		String(g_form.getValue('remove_folder')) == '');
		g_form.setMandatory('folder_access_type', !test);
	} else {
		var test = g_form.getValue('add_folder').indexOf(this.FOLDER_NONE) > -1 ||
		g_form.getValue('remove_folder').indexOf(this.FOLDER_NONE) > -1;
		g_form.setMandatory('folder_access_type', !test);
	}
};
/**
 * @description Checks that Add/Remove folders does not contain NONE and other values
 * @return {boolean} false if the folder containers contain invalid data
 */
MedeaInternational.prototype.folderSubmitCheck = function() {
	var adds = g_form.getValue('add_folder').split(','),
	removes = g_form.getValue('remove_folder').split(',');
	if (adds.length > 1 && adds.toString().indexOf(this.FOLDER_NONE) > -1) {
		alert('You cannot select "None" for folder access along with other types');
		return false;
	}
	if (removes.length > 1 && removes.toString().indexOf(this.FOLDER_NONE) > -1) {
		alert('You cannot select "None" for folder access along with other types');
		return false;
	}
	return true;
}