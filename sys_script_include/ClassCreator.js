/**
 * @namespace ClassCreator 
 * @descriptionCreates classes for Selenium automated browser testing
 * @type {Class}
 */
var ClassCreator = Class.create();
ClassCreator.prototype = {
	/**
	 * @description Initializes values for the running of the script
	 * @param  {string} camelCaseVariables True for camelCase; false for non_camel_case
	 * @param  {string} language           Which programming language
	 * @param  {string} tableType          A table type (Task, CMDB) - Basically, any table that is extended
	 */
	initialize: function(camelCaseVariables, language, tableType) {
		this.camelCase = camelCaseVariables;
		this.language = language;		
		this.tableType = tableType;
	},
	/**
	 * @description Entry point for the class; creates records in the Class Generator table (or udpates them)
	 */
	getTaskTables: function(){
		var gr = new GlideRecord('sys_db_object');
		gr.addEncodedQuery('super_class.name=' + this.tableType + '^ORname=' + this.tableType);
		gr.query();
		while(gr.next()){
			var classTable = new GlideRecord('class_generator');
			classTable.addQuery('u_tablename', gr.name);
			classTable.addQuery('u_language', this.language);
			classTable.query();
			if (classTable.next()){
				classTable.u_class_body = (this.getTableVariables(gr.name, false));
				classTable.update();
			} else {
				var newClassTable = new GlideRecord('class_generator');
				newClassTable.initialize();
				newClassTable.u_language = this.language;
				newClassTable.u_tablename = gr.name;
				newClassTable.u_class_body = (this.getTableVariables(gr.name, false));
				newClassTable.insert();
			}
		}
	},
	/**
	 * @description Entry point for the class; creates records in the Class Generator table (or udpates them)
	 */
	getCMDBTables: function(){
		var gr = new GlideRecord('sys_db_object');
		gr.addEncodedQuery('super_class.name=' + this.tableType + '^ORnameIN' + this.tableType + ",cmdb_ci");
		gr.query();
		while(gr.next()){
			var classTable = new GlideRecord('class_generator');
			classTable.addQuery('u_tablename', gr.name);
			classTable.addQuery('u_language', this.language);
			classTable.query();
			if (classTable.next()){
				classTable.u_class_body = (this.getTableVariables(gr.name, true));
				classTable.update();
			} else {
				var newClassTable = new GlideRecord('class_generator');
				newClassTable.initialize();
				newClassTable.u_language = this.language;
				newClassTable.u_tablename = gr.name;
				newClassTable.u_class_body = (this.getTableVariables(gr.name, true));
				newClassTable.insert();
			}
		}
	},
	/**
	 * @description Starts a dictionary table query based on the table and its parent
	 * @param  {string}  tableName The table to query for
	 * @param  {boolean} cmdbFlag  True if this is for cmdb (we want to ensure we get the base table, even if we're down a level or two of inheritance)
	 * @return {string}            Data to insert into the table
	 */
	getTableVariables: function (tableName, cmdbFlag){
		var gr = new GlideRecord('sys_dictionary');
		if (cmdbFlag){
			gr.addEncodedQuery('nameIN' + tableName + ', ' + this.tableType + ',cmdb_ci^element!=sys_id');
		} else {
			gr.addEncodedQuery('nameIN' + tableName + ', ' + this.tableType + '^element!=sys_id');
		}
		gr.query();
		var data;
		if (this.language == "java"){
			data = this.getJavaVariables(gr, tableName);
		} else if (this.language == "javascript"){
			data = this.getJavascriptVariables(gr, tableName);
		} else if (this.language == "csharp"){
			data = this.getCSharpVariables(gr, tableName);
		} else if (this.language == "python"){
			data = this.getPythonVariables(gr, tableName);
		} else if (this.language == "ruby"){
			data = this.getRubyVariables(gr, tableName);
		}
		return this.generateClass(data, tableName);
	},
	/**
	 * @description Generates a class in the appropriate language
	 * @param  {string} data      A list of variables in a particular programming language
	 * @param  {string} tablename The table name of the class
	 * @return {string}           Data to insert into the table
	 */
	generateClass: function (data, tablename){
		var classToMake = '';
		tablename = this.capitalizeFirstLetter(tablename);
		if (this.camelCase){
			tablename = this.replaceUnderscoresWithCamelCase(tablename);
		}
		if (this.language == 'java'){
			classToMake += 'import org.openqa.selenium.*;\nimport org.junit.*;\n';
			classToMake += 'import org.openqa.selenium.support.*;\nimport com.company.BaseTest;\n\n\n'
			classToMake += 'public class ' + tablename + " extends BaseTest {\n" + data + "\n}\n\n";
		} else if (language == "javascript"){
			classToMake += 'var ' + tablename + " = {\n" + data + "\n}\n";
		} else if (this.language == "csharp"){
			classToMake += "public class " + tablename + "\n{\n" + data + "\n}\n";
		} else if (this.language == "python"){
			classToMake += "class " + tablename + ":\n" + data;
		} else if (this.language == "ruby"){
			classToMake += 'class ' + tablename + "\n" + data;			
		}
		return classToMake;
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
	 * @param  {GlideRecord} gr        Record containing dictionary entries
	 * @param  {string} tableName The tablenames
	 * @return {string}           A list of variables
	 */
	getJavaVariables: function (gr, tableName){
		var data = '';
		while (gr.next()){
			var element = gr.element;
			if (this.camelCase){
				element = this.replaceUnderscoresWithCamelCase(element);
			}
			if (gr.internal_type.getDisplayValue() == "Reference"){
				data += ("@FindBy(id=\"sys_display." + tableName + "." + gr.element + "\")\npublic WebElement " + element + ";\n");
			} else if (gr.internal_type == "boolean"){
				data += ("@FindBy(id=\"ni." + tableName + "." + gr.element + "\")\npublic WebElement " + element + ";\n");
			} else {
				data += ("@FindBy(id=\"" + tableName + "." + gr.element + "\")\npublic WebElement " + element + ";\n");
			}
			data += ("@FindBy(id=\"status." + tableName + "." + gr.element + "\")\npublic WebElement " + element + "Span;\n\n");
		}
		data += ("@FindBy(id=\"sys_uniqueValue\")\npublic WebElement sysId;\n");
		return data;
	},
	/**
	 * @description Creates variables based on the Javascript programming language
	 * @param  {GlideRecord} gr        Record containing dictionary entries
	 * @param  {string} tableName The tablenames
	 * @return {string}           A list of variables
	 */
	getJavascriptVariables : function (gr, tableName){
		var data = '';
		while (gr.next()){
			var element = gr.element;
			if (this.camelCase){
				element = this.replaceUnderscoresWithCamelCase(element);
			}
			if (gr.internal_type.getDisplayValue() == "Reference"){
				data += ("var " + gr.element + " = driver.findElement(By.id(\"sys_display." + tableName + "." + element + "\"));\n");
			} else if (gr.internal_type == "boolean"){
				data += ("var " + gr.element + " = driver.findElement(By.id(\"ni." + tableName + "." + element + "\"));\n");
			} else {
				data += ("var " + gr.element + " = driver.findElement(By.id(\"" + tableName + "." + element + "\"));\n");
			}
			data += ("var " + gr.element + "Span = driver.findElement(By.id(\"status." + tableName + "." + element + "\"));\n\n");
		}
		data += ("var sysId = driver.findElement(By.id(\" sys_uniqueValue\");\n");
		data += "\n}";
		return data;
	},
	/**
	 * @description Creates variables based on the C# programming language
	 * @param  {GlideRecord} gr        Record containing dictionary entries
	 * @param  {string} tableName The tablenames
	 * @return {string}           A list of variables
	 */
	getCSharpVariables : function (gr, tableName){
		var data = '';
		while(gr.next()){
			var element = gr.element;
			if (this.camelCase){
				element = this.replaceUnderscoresWithCamelCase(element);
			}
			if (gr.internal_type.getDisplayValue() == "Reference"){
				data += ("[FindsBy(How = How.Id, Using = \"sys_display." + tableName + "." + gr.element + "\")]\npublic IWebElement " + element + ";\n");
			} else if (gr.internal_type == "boolean"){
				data += ("[FindsBy(How = How.Id, Using = \"ni." + tableName + "." + gr.element + "\")]\npublic IWebElement " + element + ";\n");
			} else {
				data += ("[FindsBy(How = How.Id, Using = \"" + tableName + "." + gr.element + "\")]\npublic IWebElement " + element + ";\n");
			}
			data += ("[FindsBy(How = How.Id, Using = \"status." + tableName + "." + gr.element + "\")]\npublic IWebElement " + element + "Span;\n\n");
		}
		data += ("[FindsBy(How = How.Id, Using = \"sys_uniqueValue\")]\npublic IWebElement sysId;");
		return data;
	},
	/**
	 * @description Creates variables based on the Python programming language
	 * @param  {GlideRecord} gr        Record containing dictionary entries
	 * @param  {string} tableName The tablenames
	 * @return {string}           A list of variables
	 */
	getPythonVariables : function (gr, tableName){
		var data = '';
		while (gr.next()){
			var element = gr.element;
			if (this.camelCase){
				element = this.replaceUnderscoresWithCamelCase(element);
			}
			if (gr.internal_type.getDisplayValue() == "Reference"){
				data += (element + " = driver.find_element_by_id('sys_display." + tableName + "." + gr.element + "')");
			} else if (gr.internal+type == "boolean"){
				data += (element + " = driver.find_element_by_id('ni." + tableName + "." + gr.element + "')");
			} else {
				data += (element + " = driver.find_element_by_id('" + tableName + "." + gr.element + "')");
			}
			data += (element + "Span = driver.find_element_by_id('status." + tableName + "." + gr.element + "')");
		}
		data += ("sysId = driver.find_element_by_id('sys_uniqueValue')");
		return data;
	},
	/**
	 * @description Creates variables based on the Ruby programming language
	 * @param  {GlideRecord} gr        Record containing dictionary entries
	 * @param  {string} tableName The tablenames
	 * @return {string}           A list of variables
	 */
	getRubyVariables: function (gr, tableName){
		var data = '';
		while(gr.next()){
			var element = gr.element;
			if (this.camelCase){
				element = this.replaceUnderscoresWithCamelCase(element);
			}
			if (gr.internal_type.getDisplayValue() == "Reference"){
				data += (element + " = driver.find_element(:id, 'sys_display." + tableName + "." + gr.element + "')");
			} else if (gr.internal_type == "boolean"){
				data += (element + " = driver.find_element(:id, 'ni." + tableName + "." + gr.element + "')");
			} else {
				data += (element +  "= driver.find_element(:id, '" + tableName + "." + gr.element + "')");
			}
			data += (element +  "Span = driver.find_element(:id, 'status." + tableName + "." + gr.element + "')");
		}
		data += ("sysId = driver.find_element(:id, 'sys_uniqueValue')");
		return data;
	},
	type: 'ClassCreator'
}