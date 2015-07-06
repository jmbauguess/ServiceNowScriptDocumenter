function u_getMyProblemGroups() {
	// Array Utility class
	var au = new ArrayUtil();
	
	// sys_id's of the groups that should always accessible, currently Support Desk
	var seenAlways = ['7ab101c9248474001bbdb26abf6b6611'];
	
	// sys_id's of the groups that can see all groups, currently Support Desk
	var seeAllGroups = ['7ab101c9248474001bbdb26abf6b6611'];
	
	// Base Reference Qualifier is Type Contains Support
	var baseQual = 'typeLIKE4eaba0d2b48954001f6b6136d35d2d31';
	var finalQual ='';
	
	// Get all of my groups
	var groups = u_getMyImmediateGroups();
	
	// If admin, can see all Support groups
	if(gs.hasRole('problem')){
		if (current.assigned_to.nil()){
			return baseQual;
		}
		// If Assigned only return Assigned To groups
		else {
			var grm = new GlideRecord('sys_user_grmember');
			grm.addQuery('user', current.assigned_to.sys_id);
			grm.query();
			while (grm.next()){
				seenAlways.push(grm.group.sys_id.toString());
			}
			// return Users that assigned to is a member of
			finalQual = baseQual + '^sys_idIN' + seenAlways.join(',');
		}
	}
		
		// If Assigned to is empty, I can see groups that I belong to
		if (current.assigned_to.nil()) {

			// If member of one of the seeAllGroups, return base ref qual only
			if(au.intersect(seeAllGroups, groups).length > 0) {
				return baseQual;
			}
			
			// Return encoded query
			finalQual = baseQual + '^sys_idIN' + au.union(seenAlways, groups).join(',');
			
		}
		// if Assigned to an Individual get their groups that match mine
		else {
			var gr = new GlideRecord('sys_user_grmember');
			gr.addQuery('user', current.assigned_to.sys_id);
		
			// If NOT member of one of the seeAllGroups, return groups assigned to is a member of
			if(au.intersect(seeAllGroups, groups).length == 0) {
			   gr.addQuery('group', 'IN', groups.join(','));
			}
			gr.query();
			while (gr.next()){
				seenAlways.push(gr.group.sys_id.toString());
			}
			// return Users where assigned to is in those groups we are IN
			finalQual = baseQual + '^sys_idIN' + seenAlways.join(',');
		}
		// Return encoded query
		
		return finalQual;
	}