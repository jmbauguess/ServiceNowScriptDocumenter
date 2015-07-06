/**
 * UserAndGroupUtils
 * @namespace
 * @description Utility functions for users and groups
 * @type {Class}
 */
var UserAndGroupUtils = Class.create();
UserAndGroupUtils.prototype = {
	/**
 	* @description Main Method for cleaning up users and groups (Platform 3.1)
 	*/
	exectueInactiveCleanup: function(){
		this.deleteInactiveRoleAssignments();
		/**Before running next function, deactivate the following business rules on the
 		* sys_user_grmember table: Group Member Delete - Skills, Group Member Delete
 		* If you do not do this, you will have to run the script once for each record in the table
 		* we're trying to delete!
 		*/
		this.toggleBusinessRules(false);
		this.deleteInactiveGroupMembers();
		this.toggleBusinessRules(true);		
	},
	/**
 	* @description Changes the status on business rules for the sys_user_grmember table
 	* @param {boolean} status true or false value to apply to the active field on the record
 	*/
	toggleBusinessRules: function(status){
		var gr = new GlideRecord('sys_script');
		gr.addQuery('collection', 'sys_user_grmember');
		gr.addQuery('name', 'CONTAINS', 'Delete');
		gr.query();
		while (gr.next()){
			gr.active = status;
			gr.update();
		}
	},
	/**
 	* @description Deletes any group membership record where the user is no longer active
 	*/
	deleteInactiveGroupMembers: function(){
		var gr = new GlideRecord('sys_user_grmember');
		gr.addQuery('user.active', 'false');
		gr.query();
		while (gr.next()){
			gr.deleteRecord();
		}
	},
	/**
 	* @description Deletes any role assignment record where the user is no longer active
 	*/
	deleteInactiveRoleAssignments: function(){
		var gr = new GlideRecord('sys_user_has_role');
		gr.addQuery('user.active', 'false');
		gr.query();
		while (gr.next()){
			gr.deleteRecord();
		}
	},
	/**
	 * @description Given a user's sys_d and a group name, determines if a user is in a group
	 * @param {string} user - a sys_id of a user
	 * @param {string} group - a name of a group
	 * @return {boolean} true if the user is a member of the group; false otherwise
	 */
	isUserInGroup: function(user, group){
		var membership = new GlideRecord('sys_user_grmember');
		membership.addQuery('user', user);
		membership.addQuery('group.name', group);
		membership.query();
		if (membership.next()){
			return true;
		}
		return false;
	},	
	type: 'UserAndGroupUtils'
}