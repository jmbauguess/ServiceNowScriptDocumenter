/**
 * @namespace CatalogClassCreator 
 * @description Creates classes for Selenium automated browser testing
 * @type {Class}
 */
var CatalogClassCreator = Class.create();
CatalogClassCreator.prototype = {
	/**
	 * @description Initalizes values for the running of the script
	 * @param  {string} camelCaseVariables True for camelCase; false for non_camel_case
	 * @param  {string} language           Which programming language
	 */
	initialize: function(camelCaseVariables, language){
		this.camelCase = camelCaseVariables;
		this.language = language;
	},
	/**
	 * @description The entry point to the script
	 */
	processServiceCatalog: function(){
		var gr = new GlideRecord('sc_cat_item');
		gr.addEncodedQuery('type!=bundle^type!=package^sys_class_name!=sc_cat_item_content^active=true');
		gr.query();
		while (gr.next()){
			var classTable = new GlideRecord('class_generator');
			classTable.addQuery('u_tablename', gr.name);
			classTable.addQuery('u_language', this.language);
			classTable.query();
			if (classTable.next()){
				classTable.u_class_body = (this.getServiceCatalogVariables(gr.name));
				classTable.update();
			} else {
				var newClassTable = new GlideRecord('class_generator');
				newClassTable.initialize();
				newClassTable.u_language = this.language;
				newClassTable.u_tablename = gr.name;
				newClassTable.u_class_body = (this.getServiceCatalogVariables(gr.name));
				newClassTable.insert();
			}
		}
	},
	/**
	 * @description Searches the variable table for variables associated with a Catalog Item
	 * @param  {string} catalogItem The name of a catalog item
	 * @return {string}             A class to add to the database
	 */
	getServiceCatalogVariables: function (catalogItem){
		var sets = this.getVariableSets(catalogItem);
		var gr = new GlideRecord('item_option_new');
		gr.addEncodedQuery('typeNOT IN19,20');
		gr.addEncodedQuery('cat_item.name=' + catalogItem + '^ORvariable_setIN' + sets.toString());
		gr.query();
		var data;
		if (this.language == "java"){
			data = this.getJavaVariables(gr);
		} else if (this.language == "javascript"){
			data = this.getJavascriptVariables(gr);
		} else if (this.language == "csharp"){
			data = this.getCSharpVariables(gr);
		} else if (this.language == "python"){
			data = this.getPythonVariables(gr);
		} else if (this.language == "ruby"){
			data = this.getRubyVariables(gr);
		}
		return this.generateClass(data.toString().replace(/,/g, ''), catalogItem);
	},
	/**
	 * @description Generates a class based on the catalog item
	 * @param  {string} data     a list of variables
	 * @param  {string} itemName a catalog item
	 * @return {string}          a class to add to the database
	 */
	generateClass: function (data, itemName){
		var classToMake = '';
		itemName = this.capitalizeFirstLetter(itemName);
		if (this.camelCase){
			itemName = this.replaceUnderscoresWithCamelCase(itemName);
		}
		itemName = this.replaceSpaces(itemName);
		if (this.language == 'java'){
			if (this.camelCase){
				classToMake += 'public class ' + itemName + " extends ScReqItem {\n" + data + "\n}\n\n";
			} else {
				classToMake += 'public class ' + itemName + " extends Sc_req_item {\n" + data + "\n}\n\n";
			}
		} else if (this.language == "javascript"){
			classToMake += 'var ' + itemName + " = {\n" + data + "\n}\n";
			if (this.camelCase){
				classToMake += itemName + ".prototype = new ScReqItem()";
			} else {
				classToMake += itemName + ".prototype = new Sc_req_item()";
			}
		} else if (this.language == "csharp"){
			if (this.camelCase) {
				classToMake += "public class " + itemName + ": ScReqItem \n{\n" + data + "\n}\n";
			} else {
				classToMake += "public class " + itemName + " : Sc_req_item \n{\n" + data + "\n}\n";
			}
		} else if (this.language == "python"){
			if (this.camelCase){
				classToMake += "class " + itemName + "(ScReqItem):\n" + data;
			} else {
				classToMake += "class " + itemName + "(Sc_req_item):\n" + data;
			}
		} else if (this.language == "ruby"){
			if (this.camelCase){
				classToMake += 'class ' + itemName + " < ScReqItem\n" + data;
			} else {
				classToMake += 'class ' + itemName + " < Sc_req_item\n" + data;
			}
			
		}
		return classToMake;
	},
	/**
	 * @description Capitalizes the first letter in a word
	 * @param  {string} word A word to alter
	 * @return {string}      The word with the first character capitalized
	 */
	capitalizeFirstLetter: function (word){
		return word.charAt(0).toUpperCase() + word.slice(1);
	},
	/**
	 * @description - Replaces "_" to make a word camelCase
	 * @param  {string} item A catalog item name
	 * @return {string}      The passed in name in camelCase format
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
	 * @description Replaces whitespace and non-word characters in a Catalog Iten name so it's a valid class name
	 * @param  {string} item A catalog item name
	 * @return {string}      The name without spaces or non-word characters
	 */
	replaceSpaces: function (item){
		var regex = /\s/g;
		item = item.replace(regex, '');
		regex = /\W/g;
		item = item.replace(regex,'');
		return item;
	},
	/**
	 * @description Gets a list of variables in the variable set based on a catalog item
	 * @param  {string} catalogItem The name of a catalog item
	 * @return {array}             An array of sys_ids of the variables in a variable set associated with the catalog item
	 */
	getVariableSets: function (catalogItem){
		var sets = [];
		var gr = new GlideRecord('io_set_item');
		gr.addQuery('sc_cat_item.name', catalogItem);
		gr.query();
		while(gr.next()){
			sets.push(gr.variable_set + '');
		}
		return sets;
	},
	/**
	 * @description Generates variables for the Java programming language
	 * @param  {GlideRecord} gr Glide Record containing variable information
	 * @return {array}    An array containing the new variables
	 */
	getJavaVariables: function (gr){
		gs.log("inside getjavavars");
		var returnData = [];
		while (gr.next()){
			var name = gr.name;
			if (this.camelCase){
				name = this.replaceUnderscoresWithCamelCase(name);
			}
			if (gr.type.getDisplayValue() == "Reference"){
				returnData.push("@FindBy(id=\"sys_display.IO:" + gr.sys_id + "\")\npublic WebElement " + name + ";\n");
			} else if (gr.type.getDisplayValue() == "Select Box" || gr.type.getDisplayValue() == "Yes/No" || gr.type.getDisplayValue() == "Lookup Select Box"){
				returnData.push("@FindBy(id=\"IO:" + gr.sys_id + "\")\npublic WebElement " + name + ";\n");
			} else if (gr.type.getDisplayValue() == "CheckBox"){
				returnData.push("@FindBy(id=\"ni.IO:" + gr.sys_id + "\")\npublic WebElement " + name + ";\n");
			} else if (gr.type.getDisplayValue() == "Multiple Choice" || gr.type.getDisplayValue() == "Lookup Multiple Choice"){
				returnData.push("@FindAll({@FindBy(name=\"IO:" + gr.sys_id + "\")})\npublic List<WebElement> " + name + ";\n");
			} else {
				returnData.push("@FindBy(id=\"IO:" + gr.sys_id + "\")\npublic WebElement " + name + ";\n");
			}
			returnData.push("@FindBy(id=\"status.IO:" + gr.sys_id + "\")\npublic WebElement " + name + "Span;\n");
		}
		return returnData;
	},
	/**
	 * @description Generates variables for the Javascript programming language
	 * @param  {GlideRecord} gr Glide Record containing variable information
	 * @return {array}    An array containing the new variables
	 */
	getJavascriptVariables: function (gr){
		var returnData = [];
		while (gr.next()){
			var name = gr.name;
			if (this.camelCase){
				name = this.replaceUnderscoresWithCamelCase(name);
			}
			if (gr.type.getDisplayValue() == "Reference"){
				returnData.push("var " + name + " = driver.findElement(By.id('sys_display.IO:" + gr.sys_id + "');\n");
			} else if (gr.type.getDisplayValue() == "Select Box" || gr.type.getDisplayValue() == "Yes/No" || gr.type.getDisplayValue() == "Lookup Select Box"){
				returnData.push("var " + name + " = driver.findElement(By.id('IO:" + gr.sys_id + "');\n");
			} else if (gr.type.getDisplayValue() == "CheckBox"){
				returnData.push("var " + name + " = driver.findElement(By.id('ni.IO:" + gr.sys_id + "');\n");
			} else if (gr.type.getDisplayValue() == "Multiple Choice" || gr.type.getDisplayValue() == "Lookup Multiple Choice"){
				returnData.push("var " + name + " = driver.findElements(By.name('IO:" + gr.sys_id + "');\n");
			} else {
				returnData.push("var " + name + " = driver.findElement(By.id('IO:" + gr.sys_id + "');\n");
			}
			returnData.push("var " + name + "Span = driver.findElement(By.id('status.IO:" + gr.sys_id + "');\n");
		}
		return returnData;
	},
	/**
	 * @description Generates variables for the C# programming language
	 * @param  {GlideRecord} gr Glide Record containing variable information
	 * @return {array}    An array containing the new variables
	 */
	getCSharpVariables: function (gr){
		var returnData = [];
		while(gr.next()){
			var name = gr.name;
			if (this.camelCase){
				name = this.replaceUnderscoresWithCamelCase(name);
			}
			if (gr.type.getDisplayValue() == "Reference"){
				returnData.push("[FindsBy(How = How.Id, Using = \"sys_display.IO:" + gr.sys_id + "\"]\npublic IWebElement " + name);
			} else if (gr.type.getDisplayValue() == "Select Box" || gr.type.getDisplayValue() == "Yes/No" || gr.type.getDisplayValue() == "Lookup Select Box"){
				returnData.push("[FindsBy(How = How.Id, Using = \"IO:" + gr.sys_id + "\"]\npublic IWebElement " + name);
			} else if (gr.type.getDisplayValue() == "CheckBox"){
				returnData.push("[FindsBy(How = How.Id, Using = \"ni.IO:" + gr.sys_id + "\"]\npublic IWebElement " + name);
			} else if (gr.type.getDisplayValue() == "Multiple Choice" || gr.type.getDisplayValue() == "Lookup Multiple Choice"){
				returnData.push("[FindsBy(How = How.Id, Using = \"sys_display.IO:" + gr.sys_id + "\"]\npublic IWebElement " + name);
			} else {
				returnData.push("[FindsBy(How = How.Id, Using = \"IO:" + gr.sys_id + "\"]\npublic IWebElement " + name);
			}
			returnData.push("[FindsBy(How = How.Id, Using = \"status.IO:" + gr.sys_id + "\"]\npublic IWebElement " + name + "Span");
		}
		return returnData;
	},
	/**
	 * @description Generates variables for the Python programming language
	 * @param  {GlideRecord} gr Glide Record containing variable information
	 * @return {array}    An array containing the new variables
	 */
	getPythonVariables: function (gr){
		var returnData = [];
		while(gr.next()){
			var name = gr.name;
			if (this.camelCase){
				name = this.replaceUnderscoresWithCamelCase(name);
			}
			if (gr.type.getDisplayValue() == "Reference"){
				returnData.push(name + " = driver.find_element_by_id('sys_display.IO:" + gr.sys_id + "')");
			} else if (gr.type.getDisplayValue() == "Select Box" || gr.type.getDisplayValue() == "Yes/No" || gr.type.getDisplayValue() == "Lookup Select Box"){
				returnData.push(name + " = driver.find_element_by_id('IO:" + gr.sys_id + "')");
			} else if (gr.type.getDisplayValue() == "CheckBox"){
				returnData.push(name + " = driver.find_element_by_id('ni.IO:" + gr.sys_id + "')");
			} else if (gr.type.getDisplayValue() == "Multiple Choice" || gr.type.getDisplayValue() == "Lookup Multiple Choice"){
				returnData.push(name + " = driver.find_element_by_id('sys_display.IO:" + gr.sys_id + "')");
			} else {
				returnData.push(name + " = driver.find_element_by_id('IO:" + gr.sys_id + "')");
			}
			returnData.push(name + "Span = driver.find_element_by_id('status.IO:" + gr.sys_id + "')");
		}
		return returnData;
	},
	/**
	 * @description Generates variables for the Ruby programming language
	 * @param  {GlideRecord} gr Glide Record containing variable information
	 * @return {array}    An array containing the new variables
	 */
	getRubyVariables: function (gr){
		var returnData = [];
		while(gr.next()){
			var name = gr.name;
			if (this.camelCase){
				name = this.replaceUnderscoresWithCamelCase(name);
			}
			if (gr.type.getDisplayValue() == "Reference"){
				returnData.push(name + " = driver.find_element(:id, 'sys_display.IO:" + gr.sys_id + "')");
			} else if (gr.type.getDisplayValue() == "Select Box" || gr.type.getDisplayValue() == "Yes/No" || gr.type.getDisplayValue() == "Lookup Select Box"){
				returnData.push(name + " = driver.find_element(:id, 'IO:" + gr.sys_id + "')");
			} else if (gr.type.getDisplayValue() == "CheckBox"){
				returnData.push(name + " = driver.find_element(:id, 'ni.IO:" + gr.sys_id + "')");
			} else if (gr.type.getDisplayValue() == "Multiple Choice" || gr.type.getDisplayValue() == "Lookup Multiple Choice"){
				returnData.push(name + " = driver.find_element(:id, '.IO:" + gr.sys_id + "')");
			} else {
				returnData.push(name + " = driver.find_element(:id, 'IO:" + gr.sys_id + "')");
			}
			returnData.push(name + "Span = driver.find_element(:id, 'status.IO:" + gr.sys_id + "')");
		}
		return returnData;
	},
	
	type: 'CatalogClassCreator'
};