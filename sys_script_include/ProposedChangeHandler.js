/**
 * @namespace ProposedChangeHandler 
 * @description Provides functionality for discovering information about proposed changes, can handle multiple proposed changes per change request
 * @type {Class}
 */
var ProposedChangeHandler = Class.create();
ProposedChangeHandler.prototype = {
	/**
 	* @description Sets the arrays to empty so they can be used throughout the class
 	*/
	initialize: function() {
		this.parentArray = [], this.fieldNameArray = [], this.changesArray = [], this.ciList = [];
	},	
	/**
 	* @description Main method, presents the data in a printable format for emails and such
 	* @param  {GlideRecord} current The current record
 	* @return {string}         A printable list of data
	 * @example
	 * //Within an email or HTML field
	 * template.print(new ProposedChangeHandler().presentData(current));
 	*/
	presentData: function(current) {
		this.getRelevantCIDataFromAffectedCI(current);
		var data = "<b>PROPOSED CHANGES:</b><br/><br/>"
		for (var item in this.changesArray){
			data += 'As part of this change request, a user has proposed a change to ' + this.ciList[item] + ":<ul>";
			for (var piece in this.changesArray[item]) {
				data += "<li>" + this.changesArray[item][piece].label + " is changing from \"" +
				this.dealWithBlankChange(this.changesArray[item][piece]._old) + "\" to \"" +
				this.dealWithBlankChange(this.changesArray[item][piece]._new) + "\".</li>"
			}
			data += "</ul><br/><br/>"
		}
		return data;
	},
	/**
 	* @description Gets all fields in the dictionary related to a set of tables
 	* @param  {string} tablename The base table name to query with
 	*/
	getDictionaryFields: function(tablename) {
		this.fieldNameArray = [];
		var dictionary = new GlideRecord('sys_dictionary');
		this.getParentTable(tablename);
		dictionary.addEncodedQuery('nameIN' + tablename + ',' + this.parentArray.toString() + '^internal_type!=collection^internal_type!=GUID');
		dictionary.query();
		while (dictionary.next()){
			var fieldLabel = this.getFieldLabel(dictionary.element, dictionary.name);
			var obj = {
				'element' : dictionary.element + '',
				'fieldName' : fieldLabel,
				'reference' : dictionary.reference + '',
				'internal_type' : dictionary.internal_type + '',
				'choice': dictionary.choice + '',
				'tableName' : dictionary.name + ''
			};
			this.fieldNameArray.push(obj);
		}
	},
	/**
 	* @description Queries the field label table to find the label of the field for displaying later
 	* @param  {string} element The name of the field
 	* @param  {string} name    The name of the table
 	* @return {string} Either the label of the field, or just the element argument if no label was found
 	*/
	getFieldLabel: function(element, name) {
		var label = new GlideRecord('sys_documentation');
		label.addQuery('name', name);
		label.addQuery('element', element);
		label.query();
		if (label.next()){
			return label.label;
		} else {
			return element;
		}
	},
	/**
 	* @description Gets the name of the super class of the current table, and pushes it to the parentArray
 	* @param  {string} tablename A name of a table
 	* @return {function}  Recursive, if there is a super class it tries to find the top level
 	*/
	getParentTable: function(tablename){
		var dbObject = new GlideRecord('sys_db_object');
		dbObject.addQuery('name', tablename);
		dbObject.query();
		if (dbObject.next()){
			if (dbObject.super_class != ''){
				var name = this.getFormalName(dbObject.super_class)
				this.parentArray.push('' + name)
				return this.getParentTable(name);
			} else {
				return dbObject.name;
			}
		}
	},
	/**
 	* @description Finds the formal name (not label) of a table
 	* @param  {string} tableSys a sys id of a table
 	* @return {string} the display/formal name of the table
	 * @example
	 * getFormalName('d7d614a0790030001d9281cf14342734'); // 'alm_asset'
	 * getFormalName(''); // ''
 	*/
	getFormalName: function(tableSys) {
		var table = new GlideRecord('sys_db_object');
		if (table.get(tableSys)){
			return table.name;
		}
		return '';
	},
	/**
 	* @description Searches through Affected CI's for proposed changes
 	* @param  {GlideRecord} current the current Task record
 	*/
	getRelevantCIDataFromAffectedCI: function(current) {
		var taskData = [];
		var taskCI = new GlideRecord('task_ci');
		taskCI.addQuery('task', current.sys_id);
		taskCI.addNotNullQuery('xml');
		taskCI.query();
		while(taskCI.next()){
			this.changesArray.push(this.handleXML(taskCI));
			this.ciList.push(taskCI.ci_item.name + '');
		}
	},
	/**
 	* @description Handles the processing of the payload in the proposed change
 	* @param  {GlideRecord} record the TaskCI record
 	* @return {array} An Array of objects
 	*/
	handleXML: function(record) {
		this.getDictionaryFields(record.ci_item.sys_class_name);
		var xmlString = record.xml;
		var xmlDoc = new XMLDocument(xmlString, true);
		var items = [];
		for (var field in this.fieldNameArray) {
			try {
				var oldValue = xmlDoc.getNode("//" +
				this.fieldNameArray[field].element).getAttribute("oldValue");
				var newValue = xmlDoc.getNode("//" +
				this.fieldNameArray[field].element).getAttribute("newValue");
				if (this.fieldNameArray[field].reference != '') {					
					oldValue = this.dealWithReferences(oldValue, this.fieldNameArray[field].reference);
					newValue = this.dealWithReferences(newValue, this.fieldNameArray[field].reference);
				} else if (this.fieldNameArray[field].choice == 1 
						   || this.fieldNameArray[field].choice == 3) {
					oldValue = this.dealWithDropDown(oldValue, this.fieldNameArray[field]);
					newValue = this.dealWithDropDown(newValue, this.fieldNameArray[field]);
				}
				var dataObject = {
					'field': this.fieldNameArray[field].element,
					'label': this.fieldNameArray[field].fieldName,
					'_old' : oldValue,
					'_new' : newValue
				};
				items.push(dataObject);
			} catch (e) { }
		}
		return items;
	},
	/**
 	* @description Since some values are references, we don't want to present sys_ids to the user, but actual readable values
 	* @param  {string} value     A record sys_id
 	* @param  {string} reference A table that is referenced
 	* @return {string}           The "name" property of the table
	 * @example
	 * dealWithReferences('6b39cf5b3d514d40536529c60b915ff6', 'sys_user'); // 'Justin Bauguess'
 	*/
	dealWithReferences: function(value, reference) {
		var table = new GlideRecord(reference), returnVals = [];
		value = value.split(',');
		for (var i = 0; i < value.length; i++) {
			if (table.get(value[i])) {
				var util = new SNVariableUtil();
				var displayVal = util.getReferenceDisplayVariableName(reference)
				returnVals.push(table.getValue(displayVal) + '');
			}
		}
		return returnVals.toString();
	},
	/**
	 * @description Gets the display value of a choice for dropdowns that have different label/value pairs
	 * @param {string} value The value of the choice
	 * @param {object} fieldObject an object containing information about a field
	 * @return {string} the label that matches the value in the choice list
	 * @example
	 * dealWithDropDown('1', fieldObject); // Assuming the fieldObject is for CMDB_CI.status, "Installed"
	 */
	dealWithDropDown: function(value, fieldObject) {
		var choice = new GlideRecord('sys_choice');
		choice.addQuery('value', value);
		choice.addQuery('element', fieldObject.element);
		choice.addQuery('name', fieldObject.tableName);
		choice.query();
		if (choice.next()) {
			return choice.label;
		}
		return '';
	},
	/**
 	* @description Replaces an empty string with the word "Nothing"
 	* @param  {string} text a string to test
 	* @return {string}      the string if it's not empty or "Nothing" if it is empty
	 * @example
	 * dealWithBlankChange('   '); // 'Nothing'
	 * dealWithBlankChange('Something'); // 'Something'
 	*/
	dealWithBlankChange: function(text) {
		return text.toString().trim() == '' ? "Nothing" : text;
	},
	/**
 	* @description Applies the proposed changes automatically without the UI Action
 	* @param {GlideRecord} current A change request record
	 * @example
	 * //Within a business rule with a condition of change_request.approval changesTo 'approved'
	 * new ProposedChangeHandler().autoApplyChange(current);
 	*/
	autoApplyChange: function(current) {
		var base = new SNC.CMDBUtil();
		base.baselineProposedChangesApplyChanges(current);
	},
	'type': 'ProposedChangeHandler'
};