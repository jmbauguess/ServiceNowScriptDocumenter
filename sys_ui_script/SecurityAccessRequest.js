/**
 * SecurityAccessRequest
 * @namespace
 * @description Contains utilities for Security Access Request catalog items
 * @type {Class}
 */
var SecurityAccessRequest = Class.create();
SecurityAccessRequest.prototype.STATIC_FORM_ARRAY = ['Broadway', 'Medea', 'Medea_International', 'PeopleSoft', 'MediaPulse'];
SecurityAccessRequest.prototype.ACCESS_REQUEST_FORMS = 'adfbc80ce14931001bbd4179d0500cd8';
SecurityAccessRequest.prototype.APPLICATION_LABEL = 'container_eb973364b02ae5001148a7daebd29797';
/**
 * @description hides an element in the DOM
 * @param {HTMLElement} element an html element
 */
SecurityAccessRequest.prototype.hider = function(element) {
	try {
		document.getElementById(element).hide();
	} catch (e) {}
};
/**
 * @description shows an element in the DOM
 * @param {HTMLElement} element an html element
 */
SecurityAccessRequest.prototype.shower = function(element) {
	try {
		document.getElementById(element).show();
	} catch (e) {}
};
/**
 * @description Hides or shows the application label
 * @param {boolean} on Whether or not to show the label
 */
SecurityAccessRequest.prototype.toggleApplicationLabel = function(on) {
	if (on) {
		this.shower(this.APPLICATION_LABEL);
	} else {
		this.hider(this.APPLICATION_LABEL);
	}
};
/**
 * @description gets all Access Request Forms
 * @return {array} a list of security access request forms
 */
SecurityAccessRequest.prototype.getFormsArray = function() {
	var catalogItems = new GlideRecord('sc_cat_item');
	catalogItems.addQuery('category', this.ACCESS_REQUEST_FORMS);
	catalogItems.query(processFormsArray);
	
	/**
 	* @memberOf SecurityAccessRequest
 	* @callback
 	* @description Handles the data which comes back from the server
 	* @param {response} catalogItems A glide record
 	*/
	function processFormsArray(catalogItems) {
		var resultsArray = []
		while (catalogItems.next()) {
			var regex = /\s/g, name = catalogItems.name + '';
			name = name.replace(regex, '_');
			if (name === 'Medea_Domestic') {
				name = 'Medea';
			}
			resultsArray.push(name);
		}
		return resultsArray;
	}
};
/**
 * @description Ensures at least one check box is selected for the order guide
 * @return {boolean} true if one or more application is selected
 */
SecurityAccessRequest.prototype.atLeastOneSelectedOnGuide = function() {
	var items = this.STATIC_FORM_ARRAY, found = 0;
	for (var item = 0; item < items.length; item++) {
		g_form.getValue(items[item]) == 'true' ? (found++) : (false);
	}
	if (found === 0) {
		alert('Please select at least one application');
		return false;
	}
	return true;
};

/**
 * @description Validates that two list collectors do not contain similar values
 * @param {string} listCollectorName the name of a list collector variable
 * @param {string} listCollectorName2 the name of a list collector variable
 * @param {string} listName the name of the list
 * @return {boolean} true if the lists do not contain similar values
 */
SecurityAccessRequest.prototype.validateTwoListCollectorsWithName = function(listCollectorName, listCollectorName2, listName) {
	if (g_form.getValue('request_types') != 'edit_access') {
		return true;
	}
	var list1 = g_form.getValue(listCollectorName).split(','), list2 = g_form.getValue(listCollectorName2).split(',');
	for (var i = 0; i < list1.length; i++) {
		if (list2.indexOf(list1[i]) > -1 && list1[i] != '') {
			alert(listName + ' cannot have the same values represented in Add and Remove');
			return false;
		}
	}
	return true;
};
SecurityAccessRequest.prototype.sortListCollector = function(tableName) {
	var gr = new GlideRecord(tableName);
	gr.orderBy('u_order');
	gr.query(this.SortTheFields);
};
SecurityAccessRequest.prototype.SortTheFields = function(gr) {
	var orderMap = [];
	while (gr.next()) {
		orderMap.push({'order' : gr.u_order, 'value' : gr.sys_id});
	}
	var tableName = gr.getTableName();
	tableName = tableName.substring(2);
	var fieldTypes = ['add', 'remove', 'rmv'];
	for (var field = 0; field < fieldTypes.length; field++) {
		try {
			var fieldName = fieldTypes[field] + '_' + tableName + '_select_0';
			var subOptions = document.getElementById(fieldName).getElementsByTagName('option');
			var sortable = [];
			for (var o = 0; o < subOptions.length; o++){
				sortable.push([o, subOptions[o]]);
			}
			var sortable2 = [];
			for (var order = 0; order < orderMap.length; order++) {
				for (var option = 0; option < sortable.length; option++) {
					if (sortable[option][1].value == orderMap[order].value) {
						sortable2.push(sortable[option][1]);
					}
				}
			}
			var y = $(fieldName).options;
			for (var i = 0; i < y.length; i++) {
				y[i].remove();
			}
			for (var x = 0; x < sortable2.length; x++){
				y.add(sortable2[x]);
			}
		} catch (e) {}
	}
};
/**
 * @description Determines if any fields on the form have changed
 * @return {boolean} true if any form fields have changed; false otherwise
 * @example
 * var editAccess = g_form.getValue('request_types') == 'edit_access', mi = new MedeaInternational();
 * if (newValue == '' && editAccess && !mi.hasAnythingChanged()) {
 *	mi.setMandatories('edit_access', true);
 * }
 */
SecurityAccessRequest.prototype.hasAnythingChanged = function() {
	for (var field in this.FIELDS) {
		var currentFields = this.FIELDS[field];
		for (var j = 0; j < currentFields.length; j++) {
			if (g_form.getValue(currentFields[j]) != '') {
				return true;
			}
		}
	}
	return false;
};