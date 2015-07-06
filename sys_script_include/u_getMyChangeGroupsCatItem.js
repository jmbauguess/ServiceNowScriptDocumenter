function u_getMyChangeGroupsCatItem() {
	var au = new ArrayUtil(), groups = [];
	var seeAllGroups = ['7ab101c9248474001bbdb26abf6b6611'];
	var baseQual = 'typeLIKE4eaba0d2b48954001f6b6136d35d2d31^managerISNOTEMPTY';
	var finalQual ='';
	if (current.variables.chg_var_assigned_to.nil()){
		return baseQual;
	} else {
		var grm = new GlideRecord('sys_user_grmember');
		grm.addQuery('user', current.variables.chg_var_assigned_to.sys_id);
		grm.query();
		while (grm.next()){
			groups.push(grm.group.sys_id.toString());
		}
		return 'sys_idIN' + groups.join(',');
	}
}