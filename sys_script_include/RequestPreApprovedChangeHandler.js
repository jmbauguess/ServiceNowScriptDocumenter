var RequestPreApprovedChangeHandler = Class.create();
RequestPreApprovedChangeHandler.prototype = {
	/**
 	* initialize Initializes the class
 	* @param  {GlideRecord} current The current ritm
 	*/
	initialize: function(current) {
		this.ritm = current;
		this.listOfVariables = [];
		this.oneMonth = Number(gs.dateDiff(gs.now(), gs.monthsAgo(-1), true));
		this.twoWeeks = Number(this.oneMonth/2);
	},
	/**
 	* executeOnApproval Main method
 	*/
	executeOnApproval: function() {
		if (this.ritm.cat_item.name.indexOf('Renew') > -1) {
			this._updatePreApprovalRecord();
		} else {
			this._createPreApprovalRecord();
		}
	},
	/**
 	* _createPreApprovalRecord Create a link between the ritm and the template
 	*/
	_createPreApprovalRecord: function() {
		var preApproval = new GlideRecord('u_pre_approval');
		preApproval.initialize();
		preApproval.u_ritm = this.ritm.sys_id;
		preApproval.u_active = true;
		for (var item in this.ritm.variables) {
			if (this._includeVariable(item) && this.ritm.variables[item]) {
				preApproval.setValue(this._normalizeName(item), this.ritm.variables[item]);
			}
		}
		preApproval.u_renewal_deadline = gs.monthsAgo(gs.getProperty('change.preapproval.limit', 6) * -1);
		this.createM2M(preApproval.insert(), this.ritm.sys_id);
	},
	/**
 	* _updatePreApprovalRecord creates a link between the ritm and the template
 	*/
	_updatePreApprovalRecord: function() {
		var preApproval = new GlideRecord('u_pre_approval');
		if (preApproval.get(this.ritm.variables.pre_approval)) {
			for (var item in this.ritm.variables) {
				if (this._includeVariable(item) && this.ritm.variables[item]) {
					preApproval.setValue(this._normalizeName(item), this.ritm.variables[item]);
				}
			}
			preApproval.u_ritm = this.ritm.sys_id;
			preApproval.u_active = true;
			preApproval.u_renewal_deadline = gs.monthsAgo(gs.getProperty('change.preapproval.limit', 6) * -1);
			this.createM2M(preApproval.update(), this.ritm.sys_id);
		}		
	},
	/**
 	* _includeVariable Variables acutally on the change request are flagged a certain way
 	* @param  {string} variable the variable from the ritm
 	* @return {boolean}          true if it's flagged as a change variable
 	*/
	_includeVariable: function(variable) {
		return variable.indexOf('chg_var_') > -1 ? true : false;
	},
	/**
 	* Turns the variable name into what it will be on the pre approval record
 	* @param {string} name The name to convert
 	* @return {string} the name that matches the pre approval table's name
 	*/
	_normalizeName: function(name) {
		if (name.indexOf('chg_var_') > -1) {
			name = name.replace('chg_var_', '');
		}
		if (name.indexOf('u_') == 0) {
			return name;
		} else {
			return 'u_' + name;
		}
	},
	/**
	 * Handles sending reminders or deactivating preapprovals
	 */
	handlePostCreation: function() {
		var preApprovals = new GlideRecord('u_pre_approval');
		preApprovals.addQuery('u_active', true);
		preApprovals.query();
		while (preApprovals.next()) {
			var difference = gs.dateDiff(gs.now(), preApprovals.u_renewal_deadline, true);			
			if (this.shouldDeactivate(difference)) {
				gs.eventQueue('preapproval.expired', preApprovals);
				preApprovals.u_active = false;
				preApprovals.update();
			} else if (this.shouldRemindOneMonth(difference, preApprovals)) {
				gs.eventQueue('preapproval.expiration.reminder', preApprovals, '1 month');
				preApprovals.u_reminder = true;
				preApprovals.update();
			} else if (this.shouldRemindTwoWeeks(difference, preApprovals)) {
				gs.eventQueue('preapproval.expiration.reminder', preApprovals, '2 weeks');				
				preApprovals.u_reminder2 = true;
				preApprovals.update();
			}
		}
	},
	/**
	 * Calculates whether or not the reminder should be sent
	 * @param {int} difference the numerical difference of two dates
	 * @param {GlideRecord} preApprovals the current preapproval record
	 * @return {boolean} true if the reminder should be sent
	 */
	shouldRemindOneMonth: function(difference, preApprovals) {
		return ((Number(difference) < Number(this.oneMonth)) && !preApprovals.u_reminder);
	},
	/**
	 * Calculates whether or not the reminder should be sent
	 * @param {int} difference the numerical difference of two dates
	 * @param {GlideRecord} preApprovals the current preapproval record
	 * @return {boolean} true if the reminder should be sent
	 */
	shouldRemindTwoWeeks: function(difference, preApprovals) {
		return ((Number(difference) < Number(this.twoWeeks)) && !preApprovals.u_reminder2);
	},
	/**
	 * Returns if the preapproval should be deactivated
	 * @param {int} difference the numerical difference of two dates
	 * @return {boolean} true if the preapproval should be deactivated
	 */
	shouldDeactivate: function(difference) {
		return difference < 0 ? true : false;
	},
	referenceQual: function() {
		if (current.cat_item.name.indexOf('Renew') > -1) {
			return '';
		} else {
			return 'u_active=true';
		}
	},
	/**
	 * Creates a historical link between pre approvals and ritms
	 * @param {string} preApproval - the sysid of a preapproval record
	 * @param {string} ritm - the sysid of a ritm
	 */
	createM2M: function(preApproval, ritm) {
		var m2m = new GlideRecord('u_m2m_preapproval_ritm_');
		m2m.initialize();
		m2m.u_preapproval = preApproval;
		m2m.u_ritm = ritm;
		m2m.insert();
	},
	type: 'RequestPreApprovedChangeHandler'
};