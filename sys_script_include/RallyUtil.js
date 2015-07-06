var RallyUtil = Class.create();
RallyUtil.prototype = {
	/**
 	* Constructs the rally utility with the body of the email
 	*/
	initialize: function(body) {
		this.body = body;
	},
	/**
 	* Searches through the body of a Rally email for the Project Name
 	*/
	getProject: function(){
		var projectRegEx = /Project:\s*(\w*)/;
		//gs.log(this.body.match(projectRegEx).toString() + " is the project name - RallyUTIL " + this.body.match(projectRegEx)[1]);
		return this.body.match(projectRegEx)[1].toString(); 
	},
	/**
 	* Checks the body of the Rally email for what changes
 	* Changes are indicated by the text from [CHANGES] to [CHANGE]
 	*/
	getUserStoryChanges: function(){
		var userstoryRegEx = /from \[(.+)\] to \[(.+)\]/;
		if (this.body.match(userstoryRegEx) == null){
			return null;
		}
		return this.body.match(userstoryRegEx);
	},
	/**
 	* Gets the User Story number from the Rally email
 	*/
	getUserStoryNumber: function(){
		var itemRegEx = /User Story US\d*/;
		return this.body.match(itemRegEx).toString().substring(11);
	},
	/**
 	* Occasionally, the full description does not come in the email
 	* In this case, use REST to get the description of the user story
 	*/
	descriptionChanges: function(userstoryNumber){
		//Make a RESTful call to Rally to get the new description
		var queryString = "(FormattedID%20=%20" + userstoryNumber +")";
		var restMessage = new GlideRecord('sys_rest_message_fn');
		restMessage.addQuery('rest_message.name', 'RallyUserStory');
		restMessage.addQuery('function', 'get');
		restMessage.query();
		while (restMessage.next()){
			restMessage.rest_endpoint = "https://rally1.rallydev.com/slm/webservice/v2.0/hierarchicalrequirement?query=" + queryString + "&fetch=(Name,Description,FormattedID)";
			restMessage.update();
			//gs.log(restMessage.rest_endpoint + " is now the endpoint for " + restMessage.rest_message.name);
		}
		//gs.log(userstoryNumber + " is what we passed into the descriptionChanges method " + queryString);
		var r = new RESTMessage('RallyUserStory', 'get');
		var response = r.execute();
		//gs.log(response.getBody());
		var body = response.getBody();
		var parser = new JSONParser();
		parser.initialize();
		var parsed = parser.parse(body);
		var description;
		var obj = parsed.QueryResult.Results;
		for (item in obj){
			var obj2 = obj[item];
			description = obj2.Description;
		}
		var value = this.stripOutHTML(description);
		return value;
	},
	stripOutHTML: function(description){
		var br = /<br\/>|<br>|<br \/>/g;
		description = description.replace(br, "\n");
		var endingDivsThatHadBR = /(\n)<\/div>/g;
		description = description.replace(endingDivsThatHadBR, '\n');
		var endingDivs = /<\/div>/g;
		description = description.replace(endingDivs, '\n');
		var beginningDivsWithNoNewLine = /(\n)(?=<div>)/gi;
		description = description.replace(beginningDivsWithNoNewLine, '');
		var div = /<div>/gi;
		description = description.replace(div, '\n');	
		var span = /<\/*span .*>/g;
		description = description.replace(span, '');			
		var gt = /&gt;/g;
		description = description.replace(gt, '>');
		var lt = /&lt;/g;
		description = description.replace(lt, '<');
		var nbsp = /&nbsp;/g;
		description = description.replace(nbsp, ' ');
		var heading1 = /Problem Definition/;
		description = description.replace(heading1, 'Problem Definition: ');
		var heading2 = /Business Impact/;
		description = description.replace(heading2, '\nBusiness Impact: ');
		var heading3 = /Support Impact/;
		description = description.replace(heading3, '\nSupport Impact: ');
		var heading4 = /Story Goals/;
		description = description.replace(heading4, '\nStory Goals: ');
		var heading5 = /Related Stories/;
		description = description.replace(heading5, '\nRelated Stories: ');
		var heading6 = /Recommendations \/ Summary of Findings/;
		description = description.replace(heading6, '\nRecommendations / Summary of Findings: ');
		//gs.log(description.lastIndexOf("\n"));
		description = description.substring(0, description.lastIndexOf("\n"));
		//gs.log(description + " after sanitation");
		return description;
	},
	scheduleStateChange: function(){
		var regex = /SCHEDULE STATE .+\[(.+)]/;
		if (this.body.match(regex) != null){
			return this.body.match(regex)[1];
		} else {
			regex = /SCHEDULE STATE changed from \[.+] to \[(.+)]/;
			//gs.log(this.body.match(regex) + " is the match");
			return this.body.match(regex)[1];
		}
	},
	nameChange: function(){
		var queryString = "(FormattedID%20=%20" + userstoryNumber +")";
		var restMessage = new GlideRecord('sys_rest_message_fn');
		restMessage.addQuery('rest_message.name', 'RallyUserStory');
		restMessage.addQuery('function', 'get');
		restMessage.query();
		while (restMessage.next()){
			restMessage.rest_endpoint = "https://rally1.rallydev.com/slm/webservice/v2.0/hierarchicalrequirement?query=" + queryString + "&fetch=(Name,Description,FormattedID)";
			restMessage.update();
			//gs.log(restMessage.rest_endpoint + " is now the endpoint for " + restMessage.rest_message.name);
		}
		//gs.log(userstoryNumber + " is what we passed into the nameChanges method " + queryString);
		var r = new RESTMessage('RallyUserStory', 'get');
		var response = r.execute();
		//gs.log(response.getBody());
		var body = response.getBody();
		var parser = new JSONParser();
		parser.initialize();
		var parsed = parser.parse(body);
		var name;
		var obj = parsed.QueryResult.Results;
		for (item in obj){
			var obj2 = obj[item];
			name = obj2._refObjectName;
		}
		return name;
	},
	ownerChange: function(){
		var queryString = "(FormattedID%20=%20" + userstoryNumber +")";
		var restMessage = new GlideRecord('sys_rest_message_fn');
		restMessage.addQuery('rest_message.name', 'RallyUserStory');
		restMessage.addQuery('function', 'get');
		restMessage.query();
		while (restMessage.next()){
			restMessage.rest_endpoint = "https://rally1.rallydev.com/slm/webservice/v2.0/hierarchicalrequirement?query=" + queryString + "&fetch=true";
			restMessage.update();
			//gs.log(restMessage.rest_endpoint + " is now the endpoint for " + restMessage.rest_message.name);
		}
		//gs.log(userstoryNumber + " is what we passed into the nameChanges method " + queryString);
		var r = new RESTMessage('RallyUserStory', 'get');
		var response = r.execute();
		//gs.log(response.getBody());
		var body = response.getBody();
		var parser = new JSONParser();
		parser.initialize();
		var parsed = parser.parse(body);
		var name;
		var obj = parsed.QueryResult.Results;
		for (item in obj){
			var obj2 = obj[item];
			//gs.log(obj2 + " is the object");
			name = obj2.Owner._ref;
			//gs.log(name + " is the rally result");
			//gs.log(obj2.Owner._ref + " is the user reference");
		}
		if (name != ''){
			var restMessage = new GlideRecord('sys_rest_message_fn');
			restMessage.addQuery('rest_message.name', 'RallyUser');
			restMessage.addQuery('function', 'get');
			restMessage.query();
			while (restMessage.next()){
				restMessage.rest_endpoint = name.toString();
				restMessage.update();
				//gs.log(restMessage.rest_endpoint + " is now the endpoint for " + restMessage.rest_message.name);
			}
			var r = new RESTMessage('RallyUser', 'get');
			var response = r.execute();
			//gs.log(response.getBody() + " is the response body");
			var body = response.getBody();
			var parser = new JSONParser();
			parser.initialize();
			var parsed = parser.parse(body);
			//gs.log(parsed + " is the parsed user Rally record");
			var obj = parsed.User;
			//gs.log(obj["UserName"] + " is the username in the object");
			if (obj["UserName"] != null){
				return obj["UserName"];
				}
		} else {
			//gs.log("There was no user");
			return '';
		}
	},
	
	type: 'RallyUtil'
}