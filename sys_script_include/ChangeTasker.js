/**
 * @description A class for handling change tasks
 * @namespace ChangeTasker
 * @type {Class}
 */
var ChangeTasker = Class.create();
ChangeTasker.prototype = {
	/**
 	* @description initializes values for the class
 	* @param  {GlideRecord} change Change Request
 	*/
	initialize: function(change) {
		this.change = change;
		this.changeType = change.type;
		this.ci = change.cmdb_ci;
		this.baseTasks = this._getBaseTasks(this.changeType, this.ci);
	},
	/**
 	* @description Main Method for when a change request moves into "Scheduled" LCS
 	*/
	runOnScheduled: function(){
		if (this.changeType != "Std-Application" && this.changeType != "Emergency") {
			this._createNewTasks();
		}
	},
	/**
 	* @description Main Method for New Changes
 	*/
	runOnNewChange: function() {
		if (this.changeType == "Std-Application" || this.changeType == "Emergency") {
			this._createNewTasks();
			this.runOnUpdate();
		}
	},
	/**
 	* @description Runs if the type of a change request is changed
 	*/
	runOnTypeChange: function() {
		this._deleteOldTasks();
		this._createNewTasks();
	},
	/**
 	* @description Compares current change tasks with a list of sox change tasks to see if any need to be generated
 	*/
	runOnUpdate: function() {
		var soxTasks = this._getSoxTasks();
		var tasks = this.getCurrentTasks(this.change);
		while (tasks.next()) {
			for (var task in soxTasks) {
				if (tasks.short_description == soxTasks[task].short_description){
					soxTasks[task].created = true;
				}
			}
		}
		for (var task in soxTasks) {
			//If the task is not created and we're still sox governed
			//If the task is created and we're not sox anymore, delete the tasks
			if (soxTasks[task].created != true && this._shouldSOXTasksBeMade()) {
				var changeTask = new GlideRecord('change_task');
				changeTask.initialize();
				changeTask.short_description = soxTasks[task].short_description;
				changeTask.assignment_group = soxTasks[task].assignment_group;
				changeTask.assigned_to = soxTasks[task].assigned_to;
				changeTask.change_request = this.change.sys_id;
				changeTask.insert();
			} else if (!this._shouldSOXTasksBeMade()) {
				var changeTasks = new GlideRecord('change_task');
				changeTasks.addQuery('change_request', this.change.sys_id);
				changeTasks.addQuery('short_description', soxTasks[task].short_description.toString());
				changeTasks.query();
				if (changeTasks.next()) {
					changeTasks.deleteRecord();
				}
			}
		}
	},
	/**
 	* @description Queries the custom tasks table for tasks based on change type and ci
 	* @return {array}           an array of tasks data
 	*/
	_getBaseTasks: function() {
		var taskArray = [];
		var tasks = new GlideRecord('u_change_tasks');
		tasks.addQuery('u_sox', false);
		tasks.addQuery('u_framework', false);
		tasks.addQuery('u_type', this.changeType);
		if (this.ci != '') {
			tasks.addQuery('u_ci', this.ci);
		}
		tasks.query();
		while (tasks.next()) {
			var taskObject = {
				'short_description': tasks.u_short_description + '',
				'assignment_group': tasks.u_assignment_group + '',
				'description': tasks.u_description + '',
				'assigned_to': tasks.u_assigned_to + ''
			};
			taskArray.push(taskObject);
		}
		return taskArray;
	},
	/**
 	* @description runs to deal with SOX related change requests
 	* @return {array}           an array of tasks data
 	*/
	_getSoxTasks: function() {
		var taskArray = [];
		var tasks = new GlideRecord('u_change_tasks');
		tasks.addQuery('u_sox', true);
		tasks.query();
		while (tasks.next()) {
			var taskObject = {
				'short_description': tasks.u_short_description + '',
				'assignment_group': tasks.u_assignment_group + '',
				'description': tasks.u_description + '',
				'assigned_to': tasks.u_assigned_to + ''
			};
			taskArray.push(taskObject);
		}
		return taskArray;
	},
	/**
 	* @description Gets a list of change tasks given a change request
 	* @return {GlideRecord} the change tasks related to a change
 	*/
	getCurrentTasks: function() {
		var tasks = new GlideRecord('change_task');
		tasks.addQuery('change_request', this.change.sys_id);
		tasks.query();
		return tasks;
	},
	/**
 	* @description Deletes all change tasks related to the current change request, but only if they are inactive
 	*/
	_deleteOldTasks: function() {
		var changeTasks = new GlideRecord('change_task');
		changeTasks.addQuery('change_request', this.change.sys_id);
		changeTasks.addActiveQuery();
		changeTasks.query();
		while (changeTasks.next()){
			changeTasks.deleteRecord();
		}
	},
	/**
 	* @description Creates new tasks for a change request
 	*/
	_createNewTasks: function() {
		var tasks = this.getCurrentTasks(this.change);
		if (tasks.getRowCount() == 0) {
			for (var task in this.baseTasks) {
				this.baseTasks[task].created = false;
			}
		} else {
			while (tasks.next()) {
				for (var task in this.baseTasks) {
					if (tasks.short_description == this.baseTasks[task].short_description){
						this.baseTasks[task].created = true;
					}
				}
			}
		}
		for (var task in this.baseTasks) {
			if (!this.baseTasks[task].created) {
				var changeTask = new GlideRecord('change_task');
				changeTask.initialize();
				changeTask.short_description = this.baseTasks[task].short_description + '';
				changeTask.description = this.baseTasks[task].description + '';
				changeTask.assignment_group = this.baseTasks[task].assignment_group + '';
				changeTask.assigned_to = this.baseTasks[task].assigned_to + '';
				changeTask.change_request = this.change.sys_id;
				changeTask.insert();
			}
		}
	},
	/**
 	* @description Conditional for when SOX change tasks should be created
 	* @return {boolean} true if the CI is SOX governed and the change request uses SOX project framework
 	*/
	_shouldSOXTasksBeMade: function() {
		return this.change.cmdb_ci.u_sox_governed_yn == "Yes" && this.change.u_sox_project_framework_ == "Yes" ? true : false;
	},
	/**
 	* @description Resets the emergency approval task to open
 	*/
	resetEmergencyApprovalTask: function() {
		var changeTask = new GlideRecord('change_task');
		changeTask.addQuery('change_request', this.change.sys_id);
		changeTask.addQuery('short_description', 'Get Verbal Approval from Change Management');
		changeTask.query();
		if (changeTask.next()){
			changeTask.state = 1;
			changeTask.update();
		}
	},
	/**
 	* @description Conditional for a Business Rule: true if the emergency change request moves from Scheduled to Draft
 	* @return {boolean} true if the change request is emergency and moves back to Draft from Scheduled
 	*/
	isEmergencyGoingBack: function() {
		return current.type == "Emergency" &&
		current.u_life_cycle_status.changesTo("Draft") &&
		current.u_life_cycle_status.changesFrom("Scheduled") ? true : false;
	},
	/**
 	* isInfrastructureScheduled Conditional for a business rule: true if it's an infrastructure record moving to scheduled
 	* @return {boolean} true if the change request is infrastructure and scheduled
 	*/
	isInfrastructureScheduled: function() {
		return current.u_life_cycle_status.changesTo("Scheduled") &&
		current.type != "Std-Application" &&
		current.type != "Emergency" ? true : false;
	},
	/**
 	* @description Conditional for a business rule: true if it's a new non-infrastructure record
 	* @return {boolean} true if it's a new record that's not an infrastructure type
 	*/
	isNonInfrastructureCreated: function() {
		return current.isNewRecord() &&
		(current.type == "Std-Application" || current.type == "Emergency") ? true : false;
	},
	type: 'ChangeTasker'
}