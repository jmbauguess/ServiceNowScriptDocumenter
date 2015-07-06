var RecordNotFoundException = Class.create();
RecordNotFoundException.prototype = Error.prototype;
RecordNotFoundException.prototype = {
	initialize: function(table, functionName) {
		this.name = this.type;
		this.message = "Could not find a record matching the query criteria for table " + table + " in function " + functionName;
		gs.log(this.message);
	},
	type: 'RecordNotFoundException'
};