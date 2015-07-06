/**
 * ChangeRequest
 * @namespace
 * @description Handles the field states for Change Request.  Used in the UI Policies to prevent overlap when the policies are at the same order level.
 */
var ChangeRequest = Class.create();
ChangeRequest.prototype.STANDARD = "Standard";
ChangeRequest.prototype.EMERGENCY = "Emergency";
ChangeRequest.prototype.VIRTUAL = "Std-New_Virtual_Server";
ChangeRequest.prototype.PHYSICAL = "Std-New_Phys_Server";
ChangeRequest.prototype.DECOMM = "Std-Server_Decomm";
ChangeRequest.prototype.MOVE = "Std-Server Move";
ChangeRequest.prototype.APPLICATION = "Std-Application";
ChangeRequest.prototype.SUCCESSFUL = "Successful";
ChangeRequest.prototype.UNSUCCESSFUL = "Unsuccessful";
ChangeRequest.prototype.ISSUES = "Successful with Issues";
ChangeRequest.prototype.BACKED_OUT = "Backed Out";
/**
 * @description Changes the read only status of a list of fields
 * @param {object} fields A list of fields
 * @param {boolean} trigger The state to set the fields read only status
*/
ChangeRequest.prototype.setFieldsReadOnly = function(fields, trigger) {
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
ChangeRequest.prototype.setFieldsMandatory = function(fields, trigger) {
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
ChangeRequest.prototype.setFieldsDisplay = function(fields, trigger) {
	for (var field in fields) {
		if (fields.hasOwnProperty(field)) {
			g_form.setDisplay(fields[field], trigger);
		}
	}
};
ChangeRequest.prototype.FIELDS_MAP = {
	"brand_new_record" : {
		"non_mandatory": ["urgency", "impact", "category", "u_subcategory", "assignment_group", "assigned_to", "u_business_service", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "start_date", "end_date", "requested_by_date", "short_description", "u_life_cycle_status", "requested_by", "group_list", "watch_list", "work_start", "work_end"],
		"mandatory" : ["type"],
		"non_visible": ["work_start", "work_end"],
		"visible" : [],
		"read_only" : ["approval", "u_outage_not_req", "u_development_team", "u_on_hold", "short_description", "urgency", "impact", "category", "u_subcategory", "assignment_group", "assigned_to", "u_business_service", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "start_date", "end_date", "requested_by_date", "short_description", "u_life_cycle_status", "requested_by", "group_list", "watch_list"],
		"non_read_only" : ["type"]
	},
	"draft_non_emergency" : { 
		"non_mandatory": ["urgency", "impact", "category", "u_subcategory", "assignment_group", "assigned_to", "u_business_service", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "start_date", "end_date", "work_start", "work_end"],
		"mandatory" : ["short_description", "type", "u_life_cycle_status", "requested_by"],
		"non_visible": ["work_start", "work_end", "u_lifecycleflag"],
		"visible" : [],
		"read_only" : ["close_notes"],
		"non_read_only" : ["u_outage_not_req", "u_on_hold", "u_development_team", "short_description", "type", "u_life_cycle_status", "requested_by", "urgency", "impact", "category", "u_subcategory", "assignment_group", "assigned_to", "u_business_service", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "start_date", "end_date", "requested_by_date", "short_description", "type", "u_life_cycle_status", "requested_by", "group_list", "watch_list"]
	}, 
	"draft_emergency" : {
		"non_mandatory": ["implementation_plan", "backout_plan", "test_plan", "requested_by_date", "start_date", "end_date", "work_start", "work_end"],
		"mandatory" : ["assigned_to", "short_description", "type", "u_life_cycle_status", "requested_by", "category", "u_subcategory", "assignment_group", "u_business_service", "cmdb_ci", "description", "justification", "impact", "urgency"],
		"non_visible": ["work_start", "work_end"],
		"visible" : [],
		"read_only" : ["close_notes"],
		"non_read_only" : ["u_outage_not_req", "u_on_hold", "u_development_team", "urgency", "impact", "category", "u_subcategory", "assignment_group", "assigned_to", "u_business_service", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "start_date", "end_date", "requested_by_date", "short_description", "type", "u_life_cycle_status", "requested_by", "group_list", "watch_list"]
	},
	"planning_in_progress" : {
		"non_mandatory": ["assigned_to", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "requested_by_date", "start_date", "end_date", "work_start", "work_end"],
		"mandatory" : ["short_description", "type", "u_life_cycle_status", "requested_by", "category", "u_subcategory", "assignment_group", "u_business_service"],
		"non_visible": ["work_start", "work_end"],
		"visible" : [],
		"read_only" : ["close_notes"],
		"non_read_only" : ["urgency", "impact", "category", "u_subcategory", "assignment_group", "assigned_to", "u_business_service", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "start_date", "end_date", "requested_by_date", "short_description", "type", "u_life_cycle_status", "requested_by", "group_list", "watch_list"]
	},
	"scheduled_for_approval" : {
		"non_mandatory": ["work_start", "work_end"],
		"mandatory" : ["short_description", "type", "u_life_cycle_status", "requested_by", "category", "u_subcategory", "assignment_group", "u_business_service", "cmdb_ci", "description", "justification", "impact", "urgency", "assigned_to", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "requested_by_date", "start_date", "end_date"],
		"non_visible": ["work_start", "work_end"],
		"visible" : [],
		"read_only" : ["close_notes"],
		"non_read_only" : ["group_list", "watch_list"]
	},
	"scheduled_infrastructure" : {
		"non_mandatory": ["work_start", "work_end", "close_notes"],
		"mandatory" : [],
		"non_visible": ["work_start", "work_end", "u_on_hold"],
		"visible" : [],
		"read_only" : ["close_notes", "requested_by_date", "start_date", "end_date", "test_plan", "backout_plan", "implementation_plan", "justification"],
		"non_read_only" : ["group_list", "watch_list"]
	},
	"scheduled_non_infrastructure" : {
		"non_mandatory": ["work_start", "work_end"],
		"mandatory" : ["requested_by_date", "start_date", "end_date"],
		"non_visible": ["work_start", "work_end", "u_on_hold"],
		"visible" : [],
		"read_only" : ["close_notes", "requested_by_date", "start_date", "end_date", "test_plan", "backout_plan", "implementation_plan", "justification"],
		"non_read_only" : []
	},
	"deployed" : {
		"non_mandatory": [],
		"mandatory" : ["work_start", "work_end"],
		"non_visible": ["u_on_hold"],
		"visible" : ["work_start", "work_end"],
		"read_only" : ["close_notes", "watch_list", "group_list", "test_plan", "backout_plan", "implementation_plan", "justification"],
		"non_read_only" : []
	},
	"cancelled" : {
		"non_mandatory": ["work_start", "work_end", "short_description", "type", "u_life_cycle_status", "requested_by", "category", "u_subcategory", "assignment_group", "u_business_service", "cmdb_ci", "description", "justification", "impact", "urgency", "assigned_to", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "requested_by_date", "start_date", "end_date"],
		"mandatory" : [],
		"non_visible": ["work_start", "work_end", "u_on_hold"],
		"visible" : [],
		"read_only" : ["work_start", "work_end", "short_description", "type", "u_life_cycle_status", "requested_by", "category", "u_subcategory", "assignment_group", "u_business_service", "cmdb_ci", "description", "justification", "impact", "urgency", "assigned_to", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "requested_by_date", "start_date", "end_date", "close_notes"],
		"non_read_only" : []
	},
	"closed" : {
		"non_mandatory": ["u_sox_project_framework_"],
		"mandatory" : [],
		"non_visible": ["u_on_hold"],
		"visible" : [],
		"read_only" : ["work_start", "work_end", "short_description", "type", "u_life_cycle_status", "requested_by", "category", "u_subcategory", "assignment_group", "u_business_service", "cmdb_ci", "description", "justification", "impact", "urgency", "assigned_to", "cmdb_ci", "description", "justification", "implementation_plan", "backout_plan", "test_plan", "requested_by_date", "start_date", "end_date", "close_notes"],
		"non_read_only" : []
	}
};
/**
 * @description Sets fields to read only if the type is none
 */
ChangeRequest.prototype.typeIsNone = function() {
	var readOnly = this.FIELDS_MAP.brand_new_record.read_only,
		nonReadOnly = this.FIELDS_MAP.brand_new_record.non_read_only,
		mandatory = this.FIELDS_MAP.brand_new_record.mandatory,
		nonMandatory = this.FIELDS_MAP.brand_new_record.non_mandatory,
		visible = this.FIELDS_MAP.brand_new_record.visible,
		nonVisible = this.FIELDS_MAP.brand_new_record.non_visible;
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
};
/**
 * @description Determines if a change request is infrastructure based on type
 * @param {string} type A change request type
 * @return {boolean} true if it's infrastructure
 */
ChangeRequest.prototype.isInfrastructure = function(type) {
	return (type == this.STANDARD || type == this.VIRTUAL || type == this.PHYSICAL || type == this.DECOMM || type == this.MOVE) ? true : false;
};
/**
 * @description Determines if a change request is a server build type
 * @param {string} type A change request type
 * @return {boolean} true if it's a server build
 */
ChangeRequest.prototype.isServerBuild = function(type) {
	return (type == this.VIRTUAL || type == this.PHYSICAL) ? true : false;
};
/**
 * @description Determines if a change request is deployed
 * @param {string} type A change request life cycle status
 * @return {boolean} true if it's deployed
 */
ChangeRequest.prototype.isDeployed = function(type) {
	return (type == this.SUCCESSFUL || type == this.UNSUCCESSFUL || type == this.ISSUES || type == this.BACKED_OUT) ? true : false;
};
/**
 * @description Determines if a change request is deployed successfully (or with issues)
 * @param {string} type A change request life cycle status
 * @return {boolean} true if it's deployed successfully (or with issues)
 */
ChangeRequest.prototype.isDeployedSuccessfulish = function(type) {
	return (type == this.SUCCESSFUL || type == this.ISSUES) ? true : false;
};
/**
 * @description Sets fields for SOX Framework
 */
ChangeRequest.prototype.handleSOXFramework = function() {
	if (this.isServerBuild(g_form.getValue('type'))){
		return;
	}
	if (this.isInfrastructure(g_form.getValue('type')) && g_form.getValue('cmdb_ci.u_sox_governed_yn') == "Yes" && g_form.getValue('u_life_cycle_status') != "Draft") {
		g_form.setMandatory('u_sox_project_framework_', true);
	} else if ((g_form.getValue('type') == "Std-Application") && g_form.getValue('cmdb_ci.u_sox_governed_yn') == "Yes" && (g_form.getValue('u_life_cycle_status') != "Draft" && g_form.getValue('u_life_cycle_status') != "Planning in Progress")){
		g_form.setMandatory('u_sox_project_framework_', true);
	} else {
		g_form.setMandatory('u_sox_project_framework_', false);
	}
	if (g_form.getValue('cmdb_ci') == ''){
		g_form.setDisplay('u_sox_project_framework_', false);
	}
	var configItem = g_form.getReference('cmdb_ci', checkSox);
	function checkSox(configItem) {
		if (configItem.u_sox_governed_yn == "Yes"){
			g_form.setDisplay('u_sox_project_framework_', true);
		} else {
			g_form.setDisplay('u_sox_project_framework_', false);
		}
	}
};
/**
 * @description handles if the change request is cancelled
 */
ChangeRequest.prototype.isCancelled = function() {
	return (g_form.getValue('state') == 7) ? true : false;
};
/**
 * @description handles if the change request is closed
 */
ChangeRequest.prototype.isClosed = function() {
	var state = g_form.getValue('state');
	return (state == 3 || state == 4 || state == 6) ? true : false;
};
/**
 * @description handles the visibility of the on hold checkbox
 */
ChangeRequest.prototype.onHoldHandler = function() {
	if (this.isCancelled() || this.isClosed()){
		g_form.setDisplay('u_on_hold', false);
	} else {
		g_form.setDisplay('u_on_hold', true);
	}
};
/**
 * @description Handles if the change request is draft
 */
ChangeRequest.prototype.draftNonEmergency = function() {
	this.handleSOXFramework();	
	var readOnly = this.FIELDS_MAP.draft_non_emergency.read_only,
		nonReadOnly = this.FIELDS_MAP.draft_non_emergency.non_read_only,
		mandatory = this.FIELDS_MAP.draft_non_emergency.mandatory,
		nonMandatory = this.FIELDS_MAP.draft_non_emergency.non_mandatory,
		visible = this.FIELDS_MAP.draft_non_emergency.visible,
		nonVisible = this.FIELDS_MAP.draft_non_emergency.non_visible;
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
	this.onHoldHandler();
};
/**
 * @description Handles if the change request is draft (emergency)
 */
ChangeRequest.prototype.draftEmergency = function() {
	this.handleSOXFramework();
	var readOnly = this.FIELDS_MAP.draft_emergency.read_only,
		nonReadOnly = this.FIELDS_MAP.draft_emergency.non_read_only,
		mandatory = this.FIELDS_MAP.draft_emergency.mandatory,
		nonMandatory = this.FIELDS_MAP.draft_emergency.non_mandatory,
		visible = this.FIELDS_MAP.draft_emergency.visible,
		nonVisible = this.FIELDS_MAP.draft_emergency.non_visible;
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
	this.onHoldHandler();
};
/**
 * @description Handles if the change request is planning in progress
 */
ChangeRequest.prototype.planningInProgress = function() {
	var readOnly = this.FIELDS_MAP.planning_in_progress.read_only,
		nonReadOnly = this.FIELDS_MAP.planning_in_progress.non_read_only,
		mandatory = this.FIELDS_MAP.planning_in_progress.mandatory,
		nonMandatory = this.FIELDS_MAP.planning_in_progress.non_mandatory,
		visible = this.FIELDS_MAP.planning_in_progress.visible,
		nonVisible = this.FIELDS_MAP.planning_in_progress.non_visible;
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
	this.handleSOXFramework();
	if (this.isInfrastructure(g_form.getValue('type'))){
		g_form.setMandatory('impact', true);
		g_form.setMandatory('urgency', true);
	} else {
		g_form.setMandatory('impact', false);
		g_form.setMandatory('urgency', false);
	}	
	this.onHoldHandler();
};
/**
 * @description Handles if the change request is scheduled for approval
 */
ChangeRequest.prototype.scheduledForApproval = function() {
	var readOnly = this.FIELDS_MAP.scheduled_for_approval.read_only,
		nonReadOnly = this.FIELDS_MAP.scheduled_for_approval.non_read_only,
		mandatory = this.FIELDS_MAP.scheduled_for_approval.mandatory,
		nonMandatory = this.FIELDS_MAP.scheduled_for_approval.non_mandatory,
		visible = this.FIELDS_MAP.scheduled_for_approval.visible,
		nonVisible = this.FIELDS_MAP.scheduled_for_approval.non_visible;	
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
	this.handleSOXFramework();	
	g_form.setMandatory('cmdb_ci', !this.isServerBuild(g_form.getValue('type')));	
	this.onHoldHandler();
};
/**
 * @description Handles if the change request is scheduled and infrastructure
 */
ChangeRequest.prototype.scheduledInfrastructure = function() {
	var readOnly = this.FIELDS_MAP.scheduled_infrastructure.read_only,
		nonReadOnly = this.FIELDS_MAP.scheduled_infrastructure.non_read_only,
		mandatory = this.FIELDS_MAP.scheduled_infrastructure.mandatory,
		nonMandatory = this.FIELDS_MAP.scheduled_infrastructure.non_mandatory,
		visible = this.FIELDS_MAP.scheduled_infrastructure.visible,
		nonVisible = this.FIELDS_MAP.scheduled_infrastructure.non_visible;	
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);	
	this.handleSOXFramework();	
	if (!this.isServerBuild(g_form.getValue('type'))){
		g_form.setReadOnly('cmdb_ci', false);
		g_form.setMandatory('cmdb_ci', true);
	} else {
		g_form.setMandatory('cmdb_ci', false);
		g_form.setReadOnly('cmdb_ci', true);
	}	
	this.onHoldHandler();	
};
/**
 * @description Handles if the change request is scheduled and non-infrastructure
 */
ChangeRequest.prototype.scheduledNonInfrastructure = function() {
	var readOnly = this.FIELDS_MAP.scheduled_non_infrastructure.read_only,
		nonReadOnly = this.FIELDS_MAP.scheduled_non_infrastructure.non_read_only,
		mandatory = this.FIELDS_MAP.scheduled_non_infrastructure.mandatory,
		nonMandatory = this.FIELDS_MAP.scheduled_non_infrastructure.non_mandatory,
		visible = this.FIELDS_MAP.scheduled_non_infrastructure.visible,
		nonVisible = this.FIELDS_MAP.scheduled_non_infrastructure.non_visible;	
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
	this.handleSOXFramework();		
	if (g_form.getValue('type') == "Std-Application"){
		g_form.setMandatory('implementation_plan', true);
		g_form.setMandatory('backout_plan', true);
		g_form.setMandatory('test_plan', true);
	}
	this.onHoldHandler();
};
/**
 * @description Handles if the change request is deployed
 */
ChangeRequest.prototype.deployed = function() {
	var readOnly = this.FIELDS_MAP.deployed.read_only,
		nonReadOnly = this.FIELDS_MAP.deployed.non_read_only,
		mandatory = this.FIELDS_MAP.deployed.mandatory,
		nonMandatory = this.FIELDS_MAP.deployed.non_mandatory,
		visible = this.FIELDS_MAP.deployed.visible,
		nonVisible = this.FIELDS_MAP.deployed.non_visible;
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
	if (this.isServerBuild(g_form.getValue('type')) && this.isDeployedSuccessfulish(g_form.getValue('u_life_cycle_status')) && g_form.getValue('cmdb_ci') == ''){
		g_form.setDisabled('cmdb_ci', false);
		g_form.setMandatory('cmdb_ci', true);
	} else {
		g_form.setMandatory('cmdb_ci', false);
		g_form.setReadOnly('cmdb_ci', true);
		g_form.setMandatory('u_sox_project_framework_', false);
		g_form.setReadOnly('u_sox_project_framework_', true);
	}
	if (this.isCancelled() || this.isClosed()){
		g_form.setReadOnly('close_notes', true);
	} else {
		g_form.setReadOnly('close_notes', false);
	}
};
/**
 * @description Handles if the change request is cancelled
 */
ChangeRequest.prototype.cancelled = function() {
	var readOnly = this.FIELDS_MAP.cancelled.read_only,
		nonReadOnly = this.FIELDS_MAP.cancelled.non_read_only,
		mandatory = this.FIELDS_MAP.cancelled.mandatory,
		nonMandatory = this.FIELDS_MAP.cancelled.non_mandatory,
		visible = this.FIELDS_MAP.cancelled.visible,
		nonVisible = this.FIELDS_MAP.cancelled.non_visible;
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
};
/**
 * @description Handles if the change request is closed
 */
ChangeRequest.prototype.closed = function() {
	var readOnly = this.FIELDS_MAP.closed.read_only,
		nonReadOnly = this.FIELDS_MAP.closed.non_read_only,
		mandatory = this.FIELDS_MAP.closed.mandatory,
		nonMandatory = this.FIELDS_MAP.closed.non_mandatory,
		visible = this.FIELDS_MAP.closed.visible,
		nonVisible = this.FIELDS_MAP.closed.non_visible;
	this.setFieldsDisplay(visible, true);
	this.setFieldsDisplay(nonVisible, false);
	this.setFieldsMandatory(nonMandatory, false);
	this.setFieldsMandatory(mandatory, true);
	this.setFieldsReadOnly(nonReadOnly, false);
	this.setFieldsReadOnly(readOnly, true);
};