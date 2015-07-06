var InvalidSysIDException = Class.create();
InvalidSysIDException.prototype = Error.prototype;
InvalidSysIDException.prototype = {
	initialize: function(sys_id, functionName) {
		this.name = this.type;
		this.message = "The given sys_id argument " + sys_id + " was not the correct format in function " + functionName;
		gs.log(this.message);
	},
	type: 'InvalidSysIDException'
};