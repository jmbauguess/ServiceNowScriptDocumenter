/**
 * @namespace ModelClassCreator 
 * @description Creates Model Classes for RESTful services
 * @type {Class} 
 */
var ModelClassCreator = Class.create();
ModelClassCreator.prototype = {
	/**
 	* @description Initializes values for the running of the script
 	* @param  {string} tableType          A table type (Task, CMDB) - Basically, any table that is extended
 	*/
	initialize: function(tableType) {
		this.tableType = tableType;
	},
	/**
 	* @description Entry point for the class; creates records in the Class Generator Model table (or updates them)
 	*/
	getTaskTables: function() {
		var gr = new GlideRecord('sys_db_object');
		gr.addEncodedQuery('super_class.name=' + this.tableType + '^ORname=' + this.tableType);
		gr.query();
		while(gr.next()){
			var classTable = new GlideRecord('u_model_class_generator');
			classTable.addQuery('u_tablename', gr.name);
			classTable.query();
			if (classTable.next()){
				classTable.u_class_body = (this.getTableVariables(gr.name));
				classTable.update();
			} else {
				var newClassTable = new GlideRecord('u_model_class_generator');
				newClassTable.initialize();
				newClassTable.u_tablename = gr.name;
				newClassTable.u_class_body = (this.getTableVariables(gr.name));
				newClassTable.insert();
			}
			var collectionTable = new GlideRecord('u_model_class_generator');
			collectionTable.addQuery('u_tablename', gr.name + 'Collection');
			collectionTable.query();
			if (collectionTable.next()) {
				collectionTable.u_class_body = this.generateCollectionClass(gr.name);
				collectionTable.update();
			} else {
				var newCollectionTable = new GlideRecord('u_model_class_generator');
				newCollectionTable.initialize();
				newCollectionTable.u_tablename = gr.name + 'Collection';
				newCollectionTable.u_class_body = this.generateCollectionClass(gr.name);
				newCollectionTable.insert();
			}
		}
	},
	/**
 	* @description Starts a dictionary table query based on the table and its parent
 	* @param  {string} tableName The table to query for
 	* @return {string}           Data to insert into the table
 	*/
	getTableVariables: function (tableName){
		var gr = new GlideRecord('sys_dictionary');
		gr.addEncodedQuery('name=' + tableName + '^internal_type!=collection');
		gr.query();
		var data = this.getJavaVariables(gr, tableName);
		return this.generateClass(data, tableName);
	},
	/**
 	* @description Generates a class in the appropriate language
 	* @param  {string} data      A list of variables in a particular programming language
 	* @param  {string} tablename The table name of the class
 	* @return {string}           Data to insert into the table
 	*/
	generateClass: function (data, tablename){
		var classToMake = 'package com.mycompany.servicenow.connector.model;\n\n' +
		'import com.google.gson.annotations.SerializedName;\nimport java.util.Date;\n\n';
		tablename = this.capitalizeFirstLetter(tablename);
		tablename = this.replaceUnderscoresWithCamelCase(tablename);
		if (tablename != 'Task' && this.tableType == 'task') {
			classToMake += 'public class ' + tablename + " extends Task {\n\n" + data + "\n}\n\n";
		} else if (tablename != 'CmdbCi' && this.tableType == 'cmdb_ci') {
			classToMake += 'public class ' + tablename + " extends CmdbCi {\n\n" + data + "\n}\n\n";
		} else {
			classToMake += 'public class ' + tablename + " {\n\n" + data + "\n}\n\n";
		}
		return classToMake;
	},
	/**
 	* @description Generates a Collection class for handling the data
 	* @param  {string} tablename The table name of the class
 	* @return {string}           Data to insert into the table
 	*/
	generateCollectionClass: function(tablename) {
		var classToMake = 'package com.mycompany.servicenow.connector.model;\n\n' +
		'import com.google.gson.annotations.SerializedName;\n' +
		'import java.util.List;\n\n';
		tablename = this.capitalizeFirstLetter(tablename);
		tablename = this.replaceUnderscoresWithCamelCase(tablename);
		classToMake += 'public class ' + tablename + "Collection {\n\n" + this.collectionClassBody(tablename) + "\n}\n\n";
		return classToMake;
	},
	/**
 	* @description Generates the body of the collection class
 	* @param  {string} tablename The table name of the class
 	* @return {string}           Data to insert into the table
 	*/
	collectionClassBody: function(tablename) {
		var data = '@SerializedName("records")\n';
		data += 'private List<' + tablename + '> ' + this.lowerCaseFirstLetter(tablename) + 's;\n\n';
		data += 'public List<' + tablename + '> get' + this.lowerCaseFirstLetter(tablename) + 's() {\n';
		data += 'return ' + this.lowerCaseFirstLetter(tablename) + 's;\n}\n\n';
		return data;
	},
	/**
 	* @description Capitalizes the first letter of a word
 	* @param  {string} word The word to capitalize
 	* @return {string}      A word with the first word capitalized
 	*/
	capitalizeFirstLetter: function (word){
		return word.charAt(0).toUpperCase() + word.slice(1);
	},
	/**
 	* @description Makes the first letter of a word lowercase
 	* @param  {string} word The word to make lowercase on first character
 	* @return {string}      The word with the first letter capitalized
 	*/
	lowerCaseFirstLetter: function (word){
		return word.charAt(0).toLowerCase() + word.slice(1);
	},
	/**
 	* @description Takes a word and makes it camelCase
 	* @param  {string} item The string to make camelCase
 	* @return {string}      A camelCase version of the passed string
 	*/
	replaceUnderscoresWithCamelCase: function (item){
		if (item.indexOf("_") > -1) {
			var strings = item.split("_");
			for (var i = 1; i < strings.length; i++){
				strings[i] = this.capitalizeFirstLetter(strings[i]);
			}
			return strings.join().replace(/,/g, '');
		}
		return item;
	},
	/**
 	* @description Creates variables based on the Java programming language
 	* @param  {GlideRecord} gr   Record containing dictionary entries
 	* @param  {string} tableName The tablename
 	* @return {string}           A list of variables
 	*/
	getJavaVariables: function (gr, tableName){
		var data = '';
		while (gr.next()){
			var element = gr.element;
			element = this.replaceUnderscoresWithCamelCase(element);
			var elementType = this.getParentElementType(gr.internal_type);
			if (gr.element != 'sys_id') {
				data += ('@SerializedName("' + gr.element + '")\n');
			} else if (gr.element == 'sys_id' && tableName == 'task'){
				data += ('@SerializedName("' + gr.element + '")\n');
			}
			if (elementType == "boolean"){
				data += ("private boolean " + element + ";\n\n");
			} else if (gr.element == 'sys_id' && tableName != this.tableType) {
				//Skip duplicating the sys_id, which is at the task/parent level!
			} else if (element == 'sys_id' && tableName == 'task') {
				data += ("private String " + element + ";\n\n");
			} else {
				data += ("private String " + element + ";\n\n");
			}
		}
		data += "\n\n//Getters and Setters\n\n";
		gr.restoreLocation();
		while (gr.next()) {
			var element = gr.element;
			element = this.replaceUnderscoresWithCamelCase(element);
			var elementType = this.getParentElementType(gr.internal_type);
			var elementName = this.capitalizeFirstLetter(element);
			if (elementType == "boolean"){
				data += ("public boolean get" + elementName + "() {\nreturn this." + element + ";\n}\n\n");
			} else if (gr.element == 'sys_id' && tableName != this.tableType) {
				//Skip this getter/setter
			} else if (gr.element == 'sys_id' && tableName == this.tableType){
				data += ("public String get" + elementName + "() {\nreturn this." + element + ";\n}\n\n");
			} else {
				data += ("public String get" + elementName + "() {\nreturn this." + element + ";\n}\n\n");
			}
			var dataType = this.getFormalDataType(elementType);
			if (gr.element != 'sys_id' && tableName != this.tableType) {
				data += ("public void set" + elementName + "(" + dataType + " value) {\nthis." + element + " = value;\n}\n\n");
			} else {
				data += ("public void set" + elementName + "(" + dataType + " value) {\nthis." + element + " = value;\n}\n\n");
			}
		}
		return data;
	},
	/**
	 * @description gets the formal data type of an element
	 * @param {string} elementType the defined element type in ServiceNow
	 * @return {string} boolean if a boolean; String if a string
	 */
	getFormalDataType: function(elementType){
		if (elementType == "boolean"){
			return 'boolean';
		} else {
			return 'String';
		}
	},
	/**
 	* @description Finds out what type of element we are dealing with
 	* @param  {String} elementName the type of element
 	* @return {String}             what the scalar_type of the element (ie: base type) is
 	*/
	getParentElementType: function(elementName) {
		var obj = new GlideRecord('sys_glide_object');
		if (obj.get('name', elementName)) {
			return obj.scalar_type;
		}
		return 'String';
	},
	type: 'ModelClassCreator'
}