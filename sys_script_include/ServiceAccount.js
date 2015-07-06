/**
 * ServiceAccount
 * @namespace
 * @description Allows for the creation of users that are useful for service accounts, so they can access web services from ServiceNow
 * @type {Class}
 */
var ServiceAccount = Class.create();
ServiceAccount.prototype = {
	/**
	 * @description creates the account - main method
	 * @param {string} group The sys_id of a group record
	 * @param {string} product The sys_id of a application_software record
	 * @return {string} The account name of the created account
	 */
	createAccount: function(group, product){
		this.first_name = "Service";
		this.last_name = "Account";
		this.password = "passw0rd";
		this.group = group;
		this.product = product;
		this.group_name = this._getGroupInfo(group);
		this.group_name = this._sanitizeName(this.group_name);
		this.product_name = this._getProductInfo(product);
		this.product_name = this._sanitizeName(this.product_name);
		this.number = this._checkDuplicates(this.product_name);
		return this._createAccount();
	},
	/**
	 * @description does the creation of the account once the values are set
	 * @return {string} the user name of the newly created account
	 */
	_createAccount: function() {
		var gr = new GlideRecord('sys_user');
		gr.initialize();
		gr.user_name = this.product_name + "_ws";
		if (this.number != 0){
			gr.user_name += this.number;
		}
		gr.password = this.password;
		gr.first_name = this.first_name;
		gr.last_name = this.last_name;
		gr.name = this.first_name + " " + this.last_name;
		try {
			gr.insert();
		} catch (e){
			gs.log(e + " is the exception");
		}
		gs.log(gr.sys_id + " is the new user!");
		this._assignGroupMembership(gr.sys_id);
		this._assignSOAPQueryRole(gr.sys_id);
		return gr.user_name;
	},
	/**
	 * @description replaces non word and whitespace, makes the string lowercase
	 * @param {string} name The name to sanitize
	 * @return {string} the name without spaces, non-word characters, and in lowercase
	 */
	_sanitizeName: function(name){
		//Replace all nonword characters
		var nonword = new RegExp("\\W", "g");
		if (nonword.test(name)){
			name = name.replace(nonword, '');
		}
		//Replace all whitespaces
		var nonspace = new RegExp("\\s", "g");
		if (nonspace.test(name)){
			name = name.replace(nonspace, '');
		}
		//Make the string lowercase
		return name.toLowerCase();
	},
	/**
	 * @description Assigns the newly created user to the group who requested it
	 * @param {string} the sys_id of a user
	 */
	_assignGroupMembership: function(user) {
		var gr = new GlideRecord('sys_user_grmember');
		gr.initialize();
		gr.user = user;
		gr.group = this.group;
		try {
			gr.insert();
		} catch (e) {
			gs.log("Had trouble adding to group..." + e);
		}
	},
	/**
	 * @description Assigns the soap query role to the service account so it has read access
	 * @param {string} user The sys_id of the user to add soap_query to
	 */
	_assignSOAPQueryRole: function(user) {
		var roles = new GlideRecord('sys_user_role');
		roles.addQuery('name', 'soap_query');
		roles.query();
		var role;
		if (roles.next()){
			role = roles.sys_id;
		}
		var gr = new GlideRecord('sys_user_has_role');
		gr.initialize();
		gr.user = user;
		gr.role = role;
		gr.insert();
	},
	/**
	 * @description Gets the name of the group
	 * @param {string} group The sys_id of a group
	 * @return {string} The name of the group
	 */
	_getGroupInfo: function(group){
		var gr = new GlideRecord('sys_user_group');
		gr.addQuery('sys_id', group);
		gr.query();
		if (gr.next()){
			return gr.name;
		} else {
			return 'service';
		}
	},
	/**
	 * @description Gets the name of the application
	 * @param {string} group The sys_id of an application
	 * @return {string} The name of the application
	 */
	_getProductInfo: function(product){
		var gr = new GlideRecord('cmdb_ci_application_software');
		gr.addQuery('sys_id', product);
		gr.query();
		if (gr.next()){
			return gr.name;
		} else {
			return 'service';
		}
	},
	/**
	 * @description Ensures there is not already a service account for the group/application
	 * @param {string} name The name of a user
	 * @return {number} how many accounts are associated with the group/application
	 */
	_checkDuplicates: function(name){
		var gr = new GlideRecord('sys_user');
		var accounts = 0;
		gr.addQuery('user_name', 'CONTAINS', name);
		gr.query();
		while (gr.next()){
			if (gr.user.user_name.indexOf('_ws') != -1){
				accounts++;
			}
		}
		return accounts;
	},
	type: 'ServiceAccount'
};