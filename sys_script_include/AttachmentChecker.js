/**
 * @namespace AttachmentChecker
 * @description Checks the current record for attachments
 * @type {Class}
 */
var AttachmentChecker = Class.create();
AttachmentChecker.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	/**
	 * @description Checks a task record for attachments
	 * @memberOf AttachmentChecker
	 * @param {string} sysparm_record - the sys_id of a task record
	 * @return {boolean} true if the record has attachments; false if it does not
     */
	checkAttachments: function(){
		var task = new GlideRecord('task');
		if (task.get(this.getParameter('sysparm_record'))) {
			if (task.hasAttachments() || task.type == 'Emergency'){
				return true;
			}
		}
		return false;
	},
	type: 'AttachmentChecker'
});
