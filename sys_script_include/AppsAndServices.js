/**
 * AppsAndServices
 * @namespace
 * @description Populates the services and watch list based on the business application field on the incident form
 * @extends AbstractAjaxProcessor
 */
var AppsAndServices = Class.create();
AppsAndServices.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	/**
 	* @description Uses the relationship table to get services related to an application.  Typically, this is a 1:M relationship (Service:App), so it should return just one service
	 * @memberOf AppsAndServices
	 * @param {string} sysparm_app AJAX parameter - a comma delimited list value
	 * @param {string} sysparm_ci AJAX parameter - the sys_id of a ci
	 * @return {string} The Service(s) associated with the application
 	*/
	getService: function(){
		var applications = this.getParameter('sysparm_app');
		var applicationsList = applications.split(',');
		var cis = this.getParameter('sysparm_ci');
		var businessServices = [];
		var au = new ArrayUtil();
		for (var i = 0; i < applicationsList.length; i++){
			var relationships = new GlideRecord('cmdb_rel_ci');
			relationships.addQuery('parent.sys_class_name', 'cmdb_ci_service');
			relationships.addQuery('child', applicationsList[i]);
			relationships.query();
			while (relationships.next()){
				businessServices.push(relationships.parent.sys_id + '');
			}
		}
		var service = '';
		var ciRelationships = new GlideRecord('cmdb_rel_ci');
		ciRelationships.addQuery('parent.sys_class_name', 'cmdb_ci_service');
		ciRelationships.addQuery('child', cis);
		ciRelationships.query();
		while (ciRelationships.next()){
			service = ciRelationships.parent;
		}
		var returnList = au.unique(businessServices);
		if (service != ''){
			returnList.push(service + '');
		}
		return returnList.toString();
	},
	/**
 	* @description Uses the relationship table to get applications related to a service
	 * @memberOf AppsAndServices
	 * @param {string} sysparm_service AJAX parameter - a comma delimited list of services
	 * @return {string} a list of applications related to given services
 	*/
	getApplication: function(){
		var services = this.getParameter('sysparm_service');
		var servicesList = services.split(",");
		var applications = [];
		var au = new ArrayUtil();
		for (var i = 0; i < servicesList.length; i++){
			var relationships = new GlideRecord('cmdb_rel_ci');
			relationships.addQuery('child.sys_class_name', 'cmdb_ci_application_software');
			relationships.addQuery('parent', servicesList[i]);
			relationships.query();
			while(relationships.next()){
				applications.push(relationships.child.sys_id + '');
			}
		}
		var returnList = au.unique(applications);
		return returnList.toString();
	},
	/**
 	* @description Returns a list of users based on the applications passed in via AJAX.  Note: The client side handles whether or not the user is removed, or users are added
	 * @memberOf AppsAndServices
	 * @param {string} sysparm_app AJAX parameter - a comma delimited list value
	 * @return {string} A string of users, comma delimited
 	*/
	watchLister: function(){
		var applications = this.getParameter('sysparm_app');
		var givenApps = applications.split(',');
		var au = new ArrayUtil();
		var oldUsers = [];
		for (var i = 0; i < givenApps.length; i++){
			var apps = new GlideRecord('cmdb_ci_application_software');
			apps.addQuery('sys_id', givenApps[i]);
			apps.query();
			if (apps.next()){
				oldUsers.push(apps.managed_by + '');
			}
		}
		return oldUsers.toString();
	},
	/**
 	* @description Searches the Relationship table to find any relations between server CIs and business services
	 * @memberOf AppsAndServices
	 * @param {string} sysparm_app AJAX parameter - a comma delimited list value
	 * @param {string} sysparm_ci AJAX parameter - the sys_id of a ci
	 * @param {string} sysparm_service AJAX parameter - a comma delimited list of services
	 * @return {string} a list of app/service relationships
 	*/
	ciPopulator: function(){
		var ci = this.getParameter('sysparm_ci');
		var apps = this.getParameter('sysparm_app').split(',');
		var services = this.getParameter('sysparm_service');
		var service = '';
		var relationships = new GlideRecord('cmdb_rel_ci');
		relationships.addQuery('parent.sys_class_name', 'cmdb_ci_service');
		relationships.addQuery('child', ci);
		relationships.query();
		while (relationships.next()){
			service = relationships.parent;
		}
		var appServices = [];
		for (var i = 0; i < apps.length; i++){
			var appRelationships = new GlideRecord('cmdb_rel_ci');
			appRelationships.addQuery('child', apps[i]);
			appRelationships.addQuery('parent.sys_class_name', 'cmdb_ci_service');
			appRelationships.query();
			while (appRelationships.next()){
				appServices.push(appRelationships.parent.sys_id + '');
			}
		}
		if (service != ''){
			appServices.push(service + '');
		}
		return appServices.toString();
	},
	/**
 	* @description Used when the CI changes to empty.  Returns all of the old apps so they can be removed.	
	 * @memberOf AppsAndServices
	 * @param {string} sysparm_oldci The sys_id of a ci that's being removd from the form
	 * @return {string} a list of applications related to that ci
 	*/
	ciRemover: function() {
		var oldCI = this.getParameter('sysparm_oldci');
		var appList = '';
		var ci = new GlideRecord('cmdb_ci');
		ci.addQuery('sys_id', oldCI);
		ci.query();
		if (ci.next()){
			appList = ci.u_business_applications;
		}
		return appList;
	},
	/**
	 * @description removes services when the ci changes to empty
	 * @memberOf AppsAndServices
	 * @param {string} sysparm_oldci The sys_id of a ci that's being removd from the form
	 * @return {string} a list of services related to that ci
	 */
	ciRemoverService: function() {
		var oldCI = this.getParameter('sysparm_oldci');
		var serviceList = '';
		var ci = new GlideRecord('cmdb_ci');
		ci.addQuery('sys_id', oldCI);
		ci.query();
		if (ci.next()){
			serviceList = ci.u_business_services;
		}
		return serviceList;
	},	
	clearIncidentMessage: function() {
		gs.getSession().clearClientData('incident_message_1');
		gs.getSession().clearClientData('incident_message_2');
	},
	type: 'AppsAndServices'
});