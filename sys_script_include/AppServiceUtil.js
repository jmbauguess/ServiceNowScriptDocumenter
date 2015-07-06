/**
 * AppServiceUtil
 * @namespace
 * @description Handles app/service relationships for the incident form
 * @see ArrayUtil
 * @type {Class}
 */
var AppServiceUtil = Class.create();
AppServiceUtil.prototype = {
	/**
	 * @description Ensures there's an instance of ArrayUtil available
	 */
	initialize: function(){
		this.arrayHelper = new ArrayUtil();
	},
	/**
 	* @description Finds the managers of the applications
 	* @param {GlideRecord} previous - The Previous Version of the record
 	* @param {GlideRecord} current - The Current version of the record about to be saved
	 * @return {string} The new watch list as a string
 	*/
	getWatchListForApps: function(previous, current) {
		var oldApps = previous.u_business_applications.split(','),
			newApps = current.u_business_applications.split(','),
			difference = this.arrayHelper.diff(oldApps, newApps),
			additions = this.arrayHelper.diff(newApps, oldApps),
			oldManagers = this.getManagers(difference),
			newManagers = this.getManagers(additions),
			currentList = current.watch_list.split(',');
		//Remove those managers from the existing watchlist
		var newListOfManagers = this.arrayHelper.diff(currentList, oldManagers);
		//Add the new managers to the list
		newListOfManagers = this.arrayHelper.concat(newListOfManagers, newManagers);
		//Finally, get the manually added watch list users from the current record, and ensure they stay put
		currentList = this.arrayHelper.diff(currentList, oldManagers, newManagers);
		return this.arrayHelper.unique(this.arrayHelper.concat(currentList, newListOfManagers)).toString();
	},
	/**
	 * @description Gets managers related to applications
	 * @param {array} application - An array of applications
	 * @return {array} an array of managers
	 */
	getManagers: function(application) {
		var appRecords = new GlideRecord('cmdb_ci_application_software'),
			managers = [];
			appRecords.addEncodedQuery('sys_idIN' + application.toString());
			appRecords.query();
			while (appRecords.next()){
				managers.push(appRecords.managed_by + '');
			}
		return managers;
	},
	/**
	 * @description Queries the Relationship table to find what services an application is related to
	 * @param {array} apps - A list of applications to use as a query parameter
	 * @return {array} a list of services associated with the applications passed in
	 */
	getBusinessServices: function(apps) {		
		if (apps == "") {
			return [];
		}
		var businessServices = [];
		for(var i=0; i < apps.length; i++) {
			var getRelationship = new GlideRecord('cmdb_rel_ci');
			getRelationship.addQuery('child', apps[i]);
			getRelationship.addQuery('parent.sys_class_name', 'cmdb_ci_service');
			getRelationship.query();
			while(getRelationship.next()) {
				businessServices.push(getRelationship.parent.sys_id + '');
			}
		}		
		return this.arrayHelper.unique(businessServices);
	},
	/**
	 * @description Queries the Relationship table to find what services an application is related to
	 * @param {array} services - A list of services to use as a query parameter
	 * @return {array} a list of applications associated with the services passed in
	 */
	getBusinessApplications: function(services) {
		if (services == "") {
			return [];
		}
		var businessApps = [];
		for (var i = 0; i < services.length; i++) {
			var getRelationship = new GlideRecord('cmdb_rel_ci');
			getRelationship.addQuery('parent', services[i]);
			getRelationship.addQuery('child.sys_class_name', 'cmdb_ci_application_software');
			getRelationship.query();
			while (getRelationship.next()) {
				businessApps.push(getRelationship.child.sys_id + '');
			}
		}		
		return this.arrayHelper.unique(businessApps);
	},
	/**
	 * @description Takes the value of the CI and gets the related applications and services
	 * @param {GlideRecord} current - the current record
	 * @param {GlideRecord} previous - the previous record
	 */
	syncCMDBCI: function(current, previous){
		var server = new GlideRecord('cmdb_ci_server');
		if (server.get(current.cmdb_ci)) {			
			current.u_business_applications = this.arrayHelper.unique(this.arrayHelper.concat(server.u_business_apps.split(','), current.u_business_applications.split(','))).toString();
			current.u_business_services = this.arrayHelper.unique(this.arrayHelper.concat(server.u_business_services.split(','), current.u_business_services.split(','))).toString();
			gs.log("Found a server " + current.u_business_applications + " and it has " + server.u_business_apps.split(','));
		} else {
			if (server.get(previous.cmdb_ci)){
				current.u_business_applications = this.arrayHelper.unique(this.arrayHelper.diff(current.u_business_applications.split(','), server.u_business_apps.split(','))).toString();
				current.u_business_services = this.arrayHelper.unique(this.arrayHelper.diff(current.u_business_services.split(','), server.u_business_services.split(','))).toString();
			}
		}
	},
	type: 'AppServiceUtil'
};