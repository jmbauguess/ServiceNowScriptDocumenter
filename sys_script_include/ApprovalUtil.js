/**
 * ApprovalUtil
 * @namespace
 * @description Generates custom email text for approval or requested item emails
 * @type {Class}
 * @see SNValidator
 * @see SNFormatter
 * @extends SNVariableUtil
 * @see OnboardingUtil
 * @see SercurityAccessUtil
 * @see ServiceCatalogUtils
 */
var ApprovalUtil = Class.create();
ApprovalUtil.prototype = Object.extendsObject(SNVariableUtil, {
	/**
 	* @description Creates an ApprovalUtil object
	 * @memberOf ApprovalUtil
 	*/
	initialize: function(approvalFor) {
		this.validator = new SNValidator();
		this.formatter = new SNFormatter();
		this.onboarding = new OnboardingUtil();
		this.securityAccess = new SecurityAccessUtil();
		this.serviceCatalog = new ServiceCatalogUtils();
		this.approvalFor = approvalFor;
		this.categoryItem = approvalFor.cat_item.name;
		this.result = '';
		this.resultObj = [];
		this.variablesNeeded = [];
		this.validator.logger(approvalFor + "/" + approvalFor.short_description + " is going through ApprovalUtil " + this.categoryItem + " is the cat item");
	},
	/**
 	* @description Processes the custom fields needed for an approval email
	 * @memberOf ApprovalUtil
 	* @return {string} a result list, containing questions and their values
 	* @example
 	* //Inside an Email Notification's mail script tag
 	* var approvalUtil = new ApprovalUtil(current.sysapproval);
 	* template.print(approvalUtil.getCustomFields());
 	*/
	getCustomFields : function() {
		this.determineVariables();
		var sc = new GlideRecord('sc_item_option_mtom');
		sc.addQuery('request_item', this.approvalFor.sys_id);
		sc.query();
		this.validator.logger("Query made");
		while(sc.next()) {
			for (var i = 0; i < this.variablesNeeded.length; i++){				
				if (sc.sc_item_option.item_option_new.name == this.variablesNeeded[i]) {
					this.handleNeededVariables(sc, i);
				}
			}
		}
		return this.handleReturn();		
	},
	/**
 	* @description Sets the variables list for the class
	 * @memberOf ApprovalUtil
 	*/
	determineVariables: function() {
		if (this.onboarding.isVendorAccessRequest(this.approvalFor.cat_item.name)){
			var vendorRequestType = this.onboarding.getVendorRequestType(this.approvalFor);
			this.variablesNeeded = this.getVariables(vendorRequestType);
		} else if (this.securityAccess.isSecurityAccessRequest(this.approvalFor.cat_item.category.title)){
			this.variablesNeeded = this.getVariables(this.securityAccess.getSecurityAccessType(this.approvalFor));
		} else if (this.serviceCatalog.isAdSales(this.approvalFor.cat_item.category.title)){
			this.variablesNeeded = this.getVariables(this.serviceCatalog.getAdSalesType(this.approvalFor));
		} else {
			this.variablesNeeded = this.getVariables('');
		}
	},
	/**
	 * @description process 
	 * @memberOf ApprovalUtil
	 * @param {GlideRecord} sc The Catalog Variable Glide Record
	 */
	handleNeededVariables: function(sc, i) {
		var valueVar = '', checkBoxFlag = false;
		if (this.isTextField(sc.sc_item_option.item_option_new.type)) {
			valueVar = sc.sc_item_option.value;
		} else if (sc.sc_item_option.item_option_new.type == 8) {
			valueVar = this.dealWithReference(sc.sc_item_option.item_option_new.reference, sc.sc_item_option.value);
		} else if (sc.sc_item_option.item_option_new.lookup_table == 'u_catalog_application_roles'){
			var roles = new GlideRecord('u_catalog_application_roles');
			if (roles.get(sc.sc_item_option.value)) {
				valueVar = roles.u_role_name;
			}
		} else if (sc.sc_item_option.item_option_new.type == 5) {
			valueVar = this.getSelectValueBasedOnValue(sc.sc_item_option.item_option_new.name, sc.sc_item_option.value);
		} else if (sc.sc_item_option.item_option_new.type == 7) {
			if (sc.sc_item_option.value == 'true'){
				checkBoxFlag = 'checkWasTrue';
			} else {
				checkBoxFlag = 'checkWasBad';
			}
		} else if (sc.sc_item_option.item_option_new.type == 18) {
			gs.log(sc.sc_item_option.item_option_new.lookup_table + ": " + sc.sc_item_option.value);
			valueVar = this.dealWithReference(sc.sc_item_option.item_option_new.lookup_table, sc.sc_item_option.value);
		} else if (sc.sc_item_option.item_option_new.type == 21) {
			var rolesList = sc.sc_item_option.value.toString().split(',');
			valueVar = this.dealWithListTable(rolesList, sc.sc_item_option.item_option_new.list_table);
		} else {
			valueVar = sc.sc_item_option.value;
		}
		if (this.isFinancial(this.variablesNeeded[i])){
			valueVar = this.formatter.formatMoneyValue(valueVar);
		}
		if (checkBoxFlag == 'checkWasTrue'){
			this.resultObj.push({'name': this.variablesNeeded[i], 'text': 'Add Network', 'value': sc.sc_item_option.item_option_new.question_text});
		} else if (checkBoxFlag == false) {
			this.resultObj.push({'name': this.variablesNeeded[i], 'text': sc.sc_item_option.item_option_new.question_text, 'value': valueVar});
		}
		this.result += sc.sc_item_option.item_option_new.question_text + " : " + valueVar + "\n";
	},
	/**
	 * @description finalizes the process and returns the final results
	 * @memberOf ApprovalUtil
	 * @return {string} a string contain information about the variables in the request
	 */
	handleReturn: function() {
		this.result = this.reorderResult();
		if (this.result.length > 0){
			if (this.onboarding.isOnboarding(this.approvalFor.cat_item.category.title) ||
				this.securityAccess.isSecurityAccessRequest(this.approvalFor.cat_item.category.title)){
				this.result = "\nRequested By: " + this.approvalFor.request.requested_for.name + '\n\n'.concat(this.result);
			} else if (this.serviceCatalog.isAdSales(this.approvalFor.cat_item.category.title)){
				this.result = "\nSubmitting User: " + this.approvalFor.request.requested_for.name +
				'\nApproving Manager: ' + this.approvalFor.request.requested_for.manager.name + '\n\n'.concat(this.result);
			}
			return this.result;
		} else {
			return '';
		}
	},
	/**
 	* @description Reorders the results from the query into the correct field order so it can be printed neatly in an email
	 * @memberOf ApprovalUtil
 	* @return {string} a string that contains proper output
 	*/
	reorderResult: function(){
		var returnString = '';
		for (var i = 0; i < this.variablesNeeded.length; i++){
			for (var j = 0; j < this.resultObj.length; j++){
				if (this.resultObj[j].name == this.variablesNeeded[i] && this.resultObj[j].value != ''){
					returnString += "<b>" + this.resultObj[j].text + "</b>: " + this.resultObj[j].value + "\n";
				}
			}
		}
		return returnString;
	},
	/**
 	* @description gets the variable list associated with the catalog item
	 * @memberOf ApprovalUtil
 	* @param {string} argument - includes any extra text to add to the system property
 	* @return {array} an array containing variables (questions) to look for
 	*/
	getVariables: function(argument) {
		var regex = /\W/g, variableList = '';
		var propertyName = this.categoryItem.replace(regex, '').toLowerCase();
		if (argument != ''){
			variableList = gs.getProperty('approvalfields.' + propertyName + argument);
		} else {
			variableList = gs.getProperty('approvalfields.' + propertyName);
		}
		try {
			return variableList.split(',');
		} catch (e) {
			return '';
		}
	},
	/**
 	* @description Determines if a catalog item is reworkable
	 * @memberOf ApprovalUtil
 	* @return {boolean} true if the catalog item is reworkable; false otherwise
 	*/
	isReworkable: function() {
		var reworkUtil = new ReworkUtil();
		return reworkUtil.isReworkable(this.approvalFor);
	},
	type: "ApprovalUtil"
});