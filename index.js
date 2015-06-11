(function() {
var fs = require('fs'), request = require('request');

if (process.argv.length < 4) {
	console.log("Please enter {instance} {username} {password}");
	process.exit(1);
}

var include = "sys_updated_by=162107";
makeRequest('sys_script_include', include);
makeRequest('sys_ui_script', include);

/**
 * @description Main method - Makes HTTP Get Request to ServiceNow
 * @param  {string} scriptType A type of script in ServiceNow
 * @param  {string} include    A query to add to the HTTP Request
 */
function makeRequest(scriptType, include) {
	request.get('http://' + process.argv[2] + '.service-now.com/' + scriptType + '.do?JSON' + '&sysparm_query=' + include, function(error, response, body) {
		try {
			var data = JSON.parse(body);
			var records = data.records;
			for (var i = 0; i < records.length; i++) {
				checkDirectory(records[i], scriptType);
			}			
		} catch (e) {
			console.log('oops  -  ' + e)
		}
	}).auth(process.argv[3], process.argv[4], false);
}

/**
 * @description Checks to see if a directory exists; makes it if it does not
 * @param  {object} record     an object containing information from a GlideRecord about a script
 * @param  {string} scriptType the type of script in ServiceNow
 */
function checkDirectory(record, scriptType) {
	var directory = __dirname + "/" + scriptType;
	try {
		var stats = fs.lstatSync(directory);
		if (stats.isDirectory()){
			writeAFile(record, scriptType);
		} 
	} catch (e) {
		fs.mkdirSync(__dirname + "/" + scriptType);
		writeAFile(record, scriptType);
	}
}

/**
 * @description Creates a javascript file using what was in the ServiceNow instance
 * @param  {object} record     an object containing information from a GlideRecord about a script
 * @param  {string} scriptType the type of script in ServiceNow
 */
function writeAFile(record, scriptType) {
	fs.writeFile(__dirname + "/" + scriptType + "/" + cleanName(record.name) + '.js', record.script, function(err) {
		if (err) {
			return console.log(err);
		}
	});
}

/**
 * @description  Makes a valid filename by removing whitespace and special characters
 * @param  {string} name The name of a script in the system
 * @return {string}      The name without whitespace and special characters
 */
function cleanName(name) {
	return name.replace(/\s\W/g, '');
}
})();