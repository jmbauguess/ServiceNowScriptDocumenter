/**
 * @description Controls that the incident message is shown on the list view, since we took the functionality away from the gs.addErrorMessage() code in the business rule.
  Instead, now the client renders the message based on g_user.getClientData and gs.putClientData
 * @namespace IncidentMessage
 */
(function IncidentMessage() {
	if (String(window.location).indexOf('incident_list') > -1) {
		setTimeout(function() {
			if (typeof g_form == "undefined") {
				g_form = new GlideForm();
			}
			if (typeof g_user == "undefined") {
				g_user = new GlideUser();
			}
			try {
				if (g_user.getClientData('incident_message_1')) {
					g_form.addErrorMessage(g_user.getClientData('incident_message_1'));
				}
				if (g_user.getClientData('incident_message_2')) {
					g_form.addErrorMessage(g_user.getClientData('incident_message_2'));
				}				
			} finally {
				var ga = new GlideAjax('AppsAndServices');
				ga.addParam('sysparm_name', 'clearIncidentMessage');
				ga.getXML(function(response){});
			}
		}, 1000);
	} else {
		var ga = new GlideAjax('AppsAndServices');
		ga.addParam('sysparm_name', 'clearIncidentMessage');
		ga.getXML(function(response){});
	}
})();