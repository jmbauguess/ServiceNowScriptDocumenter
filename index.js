(function () {
    var fs = require('fs'),
        request = require('request'),
        options = require('minimist')(process.argv.slice(2));
    if (process.argv.length < 4) {
        console.log("Please enter {instance} {username} {password}");
        process.exit(1);
    }
    var include = "sys_updated_by=162107",
        requestsToMake = [
            {
                "type": "sys_script_include", 
                "filter" : include, 
                "extension" : ".js"
            },
            {
                "type": "sys_ui_script", 
                "filter" : include, 
                "extension" : ".js"
            },
            {
                "type": "u_scheduled_unit_test", 
                "filter" : include, 
                "extension" : ".js"
            },
            {
                "type": "sys_update_set", 
                "filter" : "name=" + options.update_set, 
                "extension" : ".html"
            }
        ];
    for (var req in requestsToMake) {
        if (requestsToMake.hasOwnProperty(req)) {
            var current = requestsToMake[req];
            makeRequest(current.type, current.filter, current.extension);
        }
    }
    saveRemoteUpdateSet(options.update_set);

    /**
     * @description Main method - Makes HTTP Get Request to ServiceNow
     * @param  {string} scriptType A type of script in ServiceNow
     * @param  {string} include    A query to add to the HTTP Request
     * @param  {string} extension the file extension to give to the file
     */
    function makeRequest(scriptType, include, extension) {
        request.get('http://' + options.instance + '.service-now.com/' + 
            scriptType + '.do?JSON&sysparm_query=' + include, 
            function(error, response, body) {
                try {
                    var data = JSON.parse(body);
                    var records = data.records;
                    for (var i = 0; i < records.length; i++) {
                        checkDirectory(records[i], scriptType, extension);
                    }            
                } catch (e) {
                    console.log('oops  -  ' + e)
                }
        }).auth(options.username, options.password, false);
    }

    /**
     * @description Getting an actual copy of remote update set requires the sys_id of the remote,
     * which we must retrieve by name, then feed into another function
     * @param  {string} name The name of the update set to retrieve
     */
    function saveRemoteUpdateSet(name) {
        request.get("https://" + options.instance + '.service-now.com/' +
            'sys_remote_update_set.do?JSON&sysparm_action=getRecords' + 
            '&sysparm_query=name=' + name,
            function(error, response, body) {
                try {
                    var data = JSON.parse(body);
                    var records = data.records;
                    for (var i = 0; i < records.length; i++) {
                        createRemoteUpdateSet(records[i].sys_id, name);
                    }
                } catch (e) {
                    console.log('Couldnt find remote update set for ' + name);
                }
            }).auth(options.username, options.password, false);
    }

    /**
     * @description Once the sys_id of the remote update is known, it can be read from export_update_set.do
     * @param  {string} sysId The sys_id of the update set
     * @param  {string} name  The name of the update set
     */
    function createRemoteUpdateSet(sysId, name) {
        request.get("http://" + options.instance + ".service-now.com/" +
            "export_update_set.do?sysparm_delete_when_done=false&sysparm_sys_id=" + sysId,
            function(error, response, body) {
                try {
                    var data = (body);                    
                    var directory = __dirname + "/sys_remote_update_set";
                    try {
                        var stats = fs.lstatSync(directory);
                        if (stats.isDirectory()){
                            fs.writeFile(directory + "/" + cleanName(name) + 
                                ".xml", data,
                                function(err) {
                                    if (err)
                                        return console.log(err);
                                });
                        }
                    } catch (e) {
                        fs.mkdirSync(directory);
                        fs.writeFile(directory + "/" + cleanName(name) + 
                            ".xml", data,
                                function(err) {
                                    if (err)
                                        return console.log(err);
                                });
                    }
                } catch (e) {
                    console.log("Problem retrieving update set");
                }
            }).auth(options.username, options.password, false);
    }

    /**
     * @description Checks to see if a directory exists; makes it if it does not
     * @param  {object} record     an object containing information from a GlideRecord about a script
     * @param  {string} scriptType the type of script in ServiceNow
     * @param  {string} extension the file extension to give to the file
     */
    function checkDirectory(record, scriptType, extension) {
        var directory = __dirname + "/" + scriptType;
        try {
            var stats = fs.lstatSync(directory);
            if (stats.isDirectory()){
                writeAFile(record, scriptType, extension);
            } 
        } catch (e) {
            fs.mkdirSync(__dirname + "/" + scriptType);
            writeAFile(record, scriptType, extension);
        }
    }

    /**
     * @description Creates a javascript file using what was in the ServiceNow instance
     * @param  {object} record     an object containing information from a GlideRecord about a script
     * @param  {string} scriptType the type of script in ServiceNow
     * @param  {string} extension the file extension to give to the file
     */
    function writeAFile(record, scriptType, extension) {
        var html,
            heading = "<!doctype html><html lang='en'><head><title>" + 
            "Update Information About : " + record.name + " for Release " + 
            record.u_release_name + "</title><meta name='viewport' content='" + 
            "width=device-width, initial-scale=1'><link rel='stylesheet' type" +
            "='text/css' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/" + 
            "css/bootstrap.min.css'/></head><body><div class='container'>",
            footing = "</div><script src='https://maxcdn.bootstrapcdn.com/" + 
            "bootstrap/3.3.5/js/bootstrap.min.js'></script></body></html>";
        if (record.u_migration_plan) {
            html = heading + record.u_migration_plan + footing;
        }
        fs.writeFile(__dirname + "/" + scriptType + "/" + 
            cleanName(record.name) + extension, 
            (record.script || record.payload || html), function(err) {
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