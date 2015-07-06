var u_Correct_Software_Version = Class.create();
u_Correct_Software_Version.prototype = Object.extendsObject(AbstractAjaxProcessor,{
	getSoftwareVersion: function() {
		var cisForVersionField = ['cmdb_ci_app_server_java' , 'cmdb_ci_app_server_websphere' , 'cmdb_ci_app_server_tomcat' , 'cmdb_ci_app_server_jboss' , 'cmdb_ci_app_server_domino' , 'cmdb_ci_app_server_weblogic' , 'cmdb_ci_web_application' , 'cmdb_ci_db_instance' , 'cmdb_ci_vcenter' , 'cmdb_ci_app_server' , 'cmdb_ci_db_ora_listener' , 'cmdb_ci_web_service' , 'cmdb_ci_infra_service' , 'cmdb_ci_web_site' , 'cmdb_ci_db_mysql_instance' , 'cmdb_ci_db_db2_instance' , 'cmdb_ci_db_ora_instance' , 'cmdb_ci_db_syb_instance' , 'cmdb_ci_db_mssql_instance', 'cmdb_ci_application_software'];
		var cisForOSVersionField = ['cmdb_ci_virtualization_server' , 'cmdb_ci_netware_server' , 'cmdb_ci_win_server' , 'cmdb_ci_linux_server' , 'cmdb_ci_unix_server' , 'cmdb_ci_mainframe_lpar' , 'cmdb_ci_osx_server' , 'cmdb_ci_mainframe' , 'cmdb_ci_hpux_server' , 'cmdb_ci_aix_server' , 'cmdb_ci_solaris_server' , 'cmdb_ci_vcenter_server_obj' ||  table == 'cmdb_ci_hyper_v_server' , 'cmdb_ci_esx_server' , 'cmdb_ci_server'];
		var cisForFirmwareVersionField = ['cmdb_ci_storage_server'];
		var ci = this.getParameter('sysparm_ci');
		var getTheTableName = new GlideRecord('cmdb_ci');
		getTheTableName.get('sys_id', ci);
		var table = getTheTableName.sys_class_name;
		gs.log(table + " is the table name for the ci " + ci);
		var gr = new GlideRecord(table);
		gr.get('sys_id', ci);
		var regularExpression = new RegExp(table);
		gs.log(cisForVersionField.join(','));
		if (regularExpression.test(cisForVersionField.join(','))) {
			return gr.version;
		}
		else if (regularExpression.test(cisForFirmwareVersionField.join(','))){
			return gr.firmware_version;
		}
		else if (regularExpression.test(cisForOSVersionField.join(','))){
			return gr.os_version;
		}
		return "";
	},
	
	
	type: 'u_Correct_Software_Version'
});