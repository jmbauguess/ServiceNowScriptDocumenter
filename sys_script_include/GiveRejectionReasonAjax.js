var GiveRejectionReasonAjax = Class.create();
GiveRejectionReasonAjax.prototype = Object.extendsObject(AbstractAjaxProcessor,{
    
	processReason: function() {
		var ans = this.getParameter('sysparm_ans');
		if (ans == '') {
			return "Please give a reason you are rejecting this approval.";
		}
		var task = this.getParameter('sysparm_task');
		var user = this.getParameter('sysparm_user');
		var approval = new GlideRecord('sysapproval_approver');
		approval.addQuery('sysapproval', task);
		approval.addQuery('approver', user);
		approval.query();
		if (approval.next()){
			approval.comments = ans;
			approval.state = 'rejected';
			approval.update();
			return "record was rejected successfully";
		} else {
			return ans + " was not added properly";
		}
		
	},

    type: 'GiveRejectionReasonAjax'
});