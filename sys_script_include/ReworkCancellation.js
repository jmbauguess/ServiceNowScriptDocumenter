/**
 * @namespace
 * @description Handles the cancellation of reworked Requested Items
 * @type {Class}
 */
var ReworkCancellation = Class.create();
ReworkCancellation.prototype = {
	/**
	 * @description Checks requested items in a state of rework that haven't been updated in a certain time period
	 * @example
	 * //From within a Scheduled Job
	 * new ReworkCancellation().checkForAutoReject();
	 */
	checkForAutoReject: function() {
		var record = new GlideRecord('sc_req_item');
		record.addEncodedQuery('sys_updated_onRELATIVELT@dayofweek@ago@' + gs.getProperty('security.access.rework.limit') +'^EQ');
		record.addQuery('approval', 'rework');
		record.query();
		while (record.next()) {
			this.autoReject(record);
		}
	},
	/**
	 * @description If a request has been idle for too long, it needs to be rejected and closed
	 * @param  {GlideRecord} ritm A requested item
	 * @return {integer}      The state of the requested item
	 */
	autoReject: function(ritm) {
		ritm.state = 8;
		ritm.approval = 'rejected';
		ritm.comments = 'This request was rejected because it sat in a state of rework for too long.';
		ritm.update();
		this.cancelWorkflowContexts(ritm);
		var hiringManager = ritm.variables.hiring_manager,
			requestedFor = ritm.variables.name;
		if (ritm.variables.hiring_manager != ritm.opened_by) {	
			gs.eventQueue("application.request.canceled", ritm, ritm.opened_by + "," + hiringManager, requestedFor);
		} else {
			gs.eventQueue("application.request.canceled", ritm, hiringManager, requestedFor);
		}
		return ritm.state;
	},
	/**
	 * @description Cancels all workflow contexts related to a ritm
	 * @param  {GlideRecord} ritm A requested item
	 */
	cancelWorkflowContexts: function(ritm) {
		var workflow = new GlideRecord('wf_context');
		workflow.addQuery('id', ritm);
		workflow.query();
		while (workflow.next()) {
			new Workflow().cancelContext(workflow);
		}
	},
	type: 'ReworkCancellation'
}