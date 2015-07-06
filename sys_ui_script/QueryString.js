/**
 * QueryString
 * @namespace
 * @description creates an object that contains parameters passed in from the URL
 * @type {Class}
 */
var QueryString = Class.create();
/**
 * @description creates an object containing url parameters
 * @return {object} an object containing url parameters
 * @example
 * var qs = new QueryString();
 * qs.getObject().sysparm_id; // gets a parameter called "sysparm_id"
 */
QueryString.prototype.getObject = function () {
	var search = window.location.search.substring(1);
	return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');	
};