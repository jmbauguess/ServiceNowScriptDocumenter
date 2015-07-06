/**
 * ChangeMangementCIReference
 * @namespace
 * @description Sets the CI reference qualifier for the Change Request Table based on the type of change request
 */
function ChangeManagementCIReference() {
		if (current.type == "Std-Application" || current.variables.chg_var_type == "Std-Application"){			
			return "install_status!=7^sys_class_name=cmdb_ci_application_software";
		} else if (current.type == "Emergency"){
			return "install_status!=7^sys_class_name=cmdb_ci_application_software^NQsys_class_nameINSTANCEOFcmdb_ci_hardware^ORsys_class_name=cmdb_ci_win_cluster^ORsys_class_nameINSTANCEOFcmdb_ci_database^ORsys_class_nameINSTANCEOFcmdb_ci_db_catalog^ORsys_class_nameINSTANCEOFcmdb_ci_db_instance^ORsys_class_name=cmdb_ci_service^ORsys_class_nameINSTANCEOFu_cmdb_ci_electrical^ORsys_class_name=cmdb_ci_circuit^ORsys_class_nameINSTANCEOFcmdb_ci_ups^ORsys_class_nameINSTANCEOFcmdb_ci_pdu^ORsys_class_nameINSTANCEOFu_cmdb_ci_mechanical^ORsys_class_nameINSTANCEOFcmdb_ci_crac^ORsys_class_nameINSTANCEOFcmdb_ci_netgear^sys_class_name!=cmdb_ci_computer^sys_class_name!=cmdb_ci_printer^sys_class_name!=u_cmdb_ci_mgmt_device";
		} else {
			return "sys_class_nameINSTANCEOFcmdb_ci_hardware^ORsys_class_name=cmdb_ci_win_cluster^ORsys_class_nameINSTANCEOFcmdb_ci_database^ORsys_class_nameINSTANCEOFcmdb_ci_db_catalog^ORsys_class_nameINSTANCEOFcmdb_ci_db_instance^ORsys_class_name=cmdb_ci_service^ORsys_class_nameINSTANCEOFu_cmdb_ci_electrical^ORsys_class_name=cmdb_ci_circuit^ORsys_class_nameINSTANCEOFcmdb_ci_ups^ORsys_class_nameINSTANCEOFcmdb_ci_pdu^ORsys_class_nameINSTANCEOFu_cmdb_ci_mechanical^ORsys_class_nameINSTANCEOFcmdb_ci_crac^ORsys_class_nameINSTANCEOFcmdb_ci_netgear^sys_class_name!=cmdb_ci_computer^sys_class_name!=cmdb_ci_printer^sys_class_name!=u_cmdb_ci_mgmt_device";
		}	
}