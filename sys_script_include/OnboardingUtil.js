/**
 * OnboardingUtil
 * @namespace
 * @description Contains functions for onboarding
 * @type {Class}
 */
var OnboardingUtil = Class.create();
OnboardingUtil.prototype = {
    /**
 	* @description Checks to see if the request is an Onboarding request or not
 	* @return true if this is for an onboarding request
 	*/
	isOnboarding: function(title){
		return title === "Onboarding Services";
	},
	/**
 	* @description Checks to see if the request is a Vendor Access Request or not
 	* @return true if this is a Vendor Access Request
 	*/
	isVendorAccessRequest: function(name){
		return name === "Vendor Access Request";
	},
	/**
 	* @description If this is a Vendor Access Request, checks to see if it is a new or existing, because they use different variables for the name of the vendor
 	* @return {string} 'new' if a new vendor and 'existing' if an existing vendor
 	*/
	getVendorRequestType: function(approvalFor){
		var vendor = new GlideRecord('sc_item_option_mtom');
		vendor.addQuery('request_item', approvalFor.sys_id);
		vendor.query();
		gs.log(vendor.getRowCount());
		while(vendor.next()){
			if (vendor.sc_item_option.item_option_new.name == 'vendor_status'){
				return vendor.sc_item_option.value;
			}
		}
	},
    type: 'OnboardingUtil'
}