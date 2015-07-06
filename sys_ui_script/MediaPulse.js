/**
 * MediaPulse
 * @namespace
 * @description Contains functionality for the MediaPulse form
 * @type {Class}
 * @extends SecurityAccessRequest
 */
var MediaPulse = Class.create();
MediaPulse.prototype = new SecurityAccessRequest();
MediaPulse.prototype.DIVISION_LABEL = 'container_8e7c7c75c55c4a001148bc31009443bf';
MediaPulse.prototype.GROUP_LABEL = 'container_d4aeb8b5c55c4a001148bc31009443f1';
MediaPulse.prototype.FIELDS = {
	'new_access' : ['add_divisions', 'add_roles'],
	'edit_access' : ['remove_roles', 'add_roles', 'add_divisions', 'remove_divisions'],
	'delete_access' : ['effective_date']
};
/**
 * @description toggles the division label on or off
 * @param {boolean} on Whether or not to show the label
 */
MediaPulse.prototype.toggleDivisionLabel = function(on) {
	if (on) {
		this.shower(this.DIVISION_LABEL);	
	} else {
		this.hider(this.DIVISION_LABEL);
	}
};
/**
 * @description toggles the group label on or off
 * @param {boolean} on Whether or not to show the label
 */
MediaPulse.prototype.toggleGroupLabel = function(on) {
	if (on) {
		this.shower(this.GROUP_LABEL);
	} else {
		this.hider(this.GROUP_LABEL);
	}
};
/**
 * @description Sets a list of fields to be mandatory (or not)
 * @param {string} accessType The type of access
 * @example
 * new MediaPulse().setMandatories('edit_access', true); //sets all "edit access" fields to mandatory
 * @example
 * new MediaPulse().setMandatories('edit_access', false); //sets all "edit access" fields to not mandatory
 */
MediaPulse.prototype.setMandatories = function(accessType, onOff) {
	var fields = this.FIELDS[accessType];
	for (var i = 0 ; i < fields.length; i++) {
		g_form.setMandatory(fields[i], onOff);
	}
};