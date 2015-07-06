/**
 * ChangeLCSController
 * @namespace
 * @description Controls how the Life Cycle Status of Change Request appears
 * @type {Class}
 */
var ChangeLCSController = Class.create();
ChangeLCSController.prototype.FIELD = "u_life_cycle_status";
ChangeLCSController.prototype.DRAFT = "Draft";
ChangeLCSController.prototype.PIP = "Planning in Progress";
ChangeLCSController.prototype.SFA = "Scheduled for Approval";
ChangeLCSController.prototype.SCHEDULED = "Scheduled";
ChangeLCSController.prototype.SUCCESSFUL = "Successful";
ChangeLCSController.prototype.SWI = "Successful with Issues";
ChangeLCSController.prototype.UNSUCCESSFUL = "Unsuccessful";
ChangeLCSController.prototype.BO = "Backed Out";
/**
 * @description Clears all options on the life cycle status field
 */
ChangeLCSController.prototype.clearAll = function() {
	g_form.clearOptions(this.FIELD);
};
/**
 * @description Sets the life cycle status field for Draft
 */
ChangeLCSController.prototype.inDraft = function() {
	g_form.clearOptions(this.FIELD);
	g_form.addOption(this.FIELD, this.DRAFT, this.DRAFT, 0);
	g_form.addOption(this.FIELD, this.PIP, this.PIP, 1);
	g_form.setValue(this.FIELD, this.DRAFT);
};
/**
 * @description Sets the life cycle status field for Draft if it's an Emergency
 */
ChangeLCSController.prototype.inDraftEmergency = function() {
	this.clearAll();
	g_form.addOption(this.FIELD, this.DRAFT, this.DRAFT, 0);
	g_form.addOption(this.FIELD, this.SCHEDULED, this.SCHEDULED, 1);
	g_form.setValue(this.FIELD, this.DRAFT);
};
/**
 * @description Sets the life cycle status field for Planning in Progress
 */
ChangeLCSController.prototype.inPIP = function() {
	this.clearAll();
	g_form.addOption(this.FIELD, this.DRAFT, this.DRAFT, 0);
	g_form.addOption(this.FIELD, this.PIP, this.PIP, 1);
	g_form.addOption(this.FIELD, this.SFA, this.SFA, 2);
	g_form.setValue(this.FIELD, this.PIP);
};
/**
 * @description Sets the life cycle status field for Scheduled for Approval
 */
ChangeLCSController.prototype.inSFA = function() {
	this.clearAll();
	g_form.addOption(this.FIELD, this.DRAFT, this.DRAFT, 0);
	g_form.addOption(this.FIELD, this.PIP, this.PIP, 1);
	g_form.addOption(this.FIELD, this.SFA, this.SFA, 2);
	g_form.setValue(this.FIELD, this.SFA);
};
/**
 * @description Sets the life cycle status field for Scheduled
 */
ChangeLCSController.prototype.inScheduled = function() {
	this.clearAll();
	g_form.addOption(this.FIELD, this.DRAFT, this.DRAFT, 0);
	g_form.addOption(this.FIELD, this.PIP, this.PIP, 1);
	g_form.addOption(this.FIELD, this.SCHEDULED, this.SCHEDULED, 2);
	g_form.addOption(this.FIELD, this.SUCCESSFUL, this.SUCCESSFUL, 3);
	g_form.addOption(this.FIELD, this.SWI, this.SWI, 4);
	g_form.addOption(this.FIELD, this.UNSUCCESSFUL, this.UNSUCCESSFUL, 5);
	g_form.addOption(this.FIELD, this.BO, this.BO, 6);
	g_form.setValue(this.FIELD, this.SCHEDULED);
};
/**
 * @description Sets the life cycle status field for Scheduled Emergency
 */
ChangeLCSController.prototype.inScheduledEmergency = function() {
	this.clearAll();
	g_form.addOption(this.FIELD, this.DRAFT, this.DRAFT, 0);
	g_form.addOption(this.FIELD, this.SCHEDULED, this.SCHEDULED, 1);
	g_form.addOption(this.FIELD, this.SUCCESSFUL, this.SUCCESSFUL, 2);
	g_form.addOption(this.FIELD, this.SWI, this.SWI, 3);
	g_form.addOption(this.FIELD, this.UNSUCCESSFUL, this.UNSUCCESSFUL, 4);
	g_form.addOption(this.FIELD, this.BO, this.BO, 5);
	g_form.setValue(this.FIELD, this.SCHEDULED);
};
/**
 * @description Sets the life cycle status field for Deployed
 */
ChangeLCSController.prototype.inDeployed = function(lcs) {
	this.clearAll();
	g_form.addOption(this.FIELD, lcs, lcs, 0);
	g_form.setValue(this.FIELD, lcs);
};
/**
 * @description Sets the life cycle status field for after Deployed
 */
ChangeLCSController.prototype.isDeployed = function(lcs) {
	return lcs == this.SUCCESSFUL || lcs == this.SWI || lcs == this.UNSUCCESSFUL || lcs == this.BO ? true : false;
};