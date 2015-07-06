function u_getMyChangeGroupMembersCatItem() {
	var au = new ArrayUtil(), arr = [];
	if(!current.variables.chg_var_assignment_group.nil()) {
		var grp = new GlideRecord('sys_user_grmember');
		grp.addQuery('group',current.variables.chg_var_assignment_group);
		grp.addNotNullQuery('group.type');
		grp.addNotNullQuery('group.manager');
		grp.addEncodedQuery('group.typeLIKE4eaba0d2b48954001f6b6136d35d2d31');
		grp.addQuery('group.active', true);
		grp.query();
		while(grp.next()) {
			arr.push(grp.user.sys_id.toString());
		}
	} else {
		var grpmbrs = new GlideRecord('sys_user_grmember');
		grpmbrs.addNotNullQuery('group.type');
		grpmbrs.addNotNullQuery('group.manager');
		grpmbrs.addQuery('group.active', true);
		grpmbrs.addEncodedQuery('group.typeLIKE4eaba0d2b48954001f6b6136d35d2d31');
		grpmbrs.query();
		while (grpmbrs.next()){
			arr.push(grpmbrs.user.sys_id.toString());
		}
	}
	return 'sys_idIN' + arr.join(',');
}