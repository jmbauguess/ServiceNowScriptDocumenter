/**
 * SNValidator
 * @namespace SNValidator
 * @description Validates arguments for ServiceNow classes
 * @type {Class} 
 */
var SNValidator = Class.create();
SNValidator.prototype = {
	/**
 	* checkValidStringArgument
	 * @description Validates that an argument is, in fact, a string
 	* @param  {string} string A string to test
 	* @return {boolean}        true if an object
	 * @example
	 * SNValidator.checkValidStringArgument('Words'); //true
	 * @example
	 * SNValidator.checkValidStringArgument(1000); //false
	 * @example
	 * SNValidator.checkValidStringArgument(['words']); //false
 	*/
	checkValidStringArgument: function(string) {
		return typeof string === 'string';
	},
	/**
 	* checkValidObjectArgument
	 * @description Validates that an argument is, in fact, an object
 	* @param  {Object} object An object to test
 	* @return {Boolean}        true if an object
	 * @example
	 * var obj = {};
	 * SNValidator().checkValidObjectArgument(obj); //true
	 * @example
	 * var obj = 'Test';
	 * SNValidator().checkValidObjectArgument(obj); //false
 	*/
	checkValidObjectArgument: function(object) {
		return typeof object === 'object';		
	},
	/**
 	* checkValidNumberArgumentLoose
	 * @description Validates than an argument is, in fact, a valid number, but uses == instead of ===
 	* @param  {number} number A number to test
 	* @return {boolean}        true if the value is a number
	 * @example
	 * SNValidator().checkValidNumberArgumentLoose(1000); //true
	 * @example
	 * SNValidator().checkValidNumberArgumentLoose('1000'); //true
	 * @example
	 * SNValidator().checkValidNumberArgumentLoose('1000a'); //false
 	*/
	checkValidNumberArgumentLoose: function(number) {
		return Number(number) == 'number' && !isNaN(Number(number));		
	},
	/**
 	* checkValidNumberArgumentStrict
	* @description Validates than an argument is, in fact, a valid number, uses ===
 	* @param  {number} number A number to test
 	* @return {boolean}        true if the value is a number
	 * @example
	 * SNValidator().checkValidNumberArgumentStrict(1000); //true
	 * @example
	 * SNValidator().checkValidNumberArgumentStrict('1000'); //false
 	*/
	checkValidNumberArgumentStrict: function(number) {
		return typeof number === 'number' && !isNaN(number);		
	},
	/**
 	* checkValidSysIDArgument
	 * @description Validates that an argument is, in fact, a sys_id
 	* @param  {string} sys_id A string to test
 	* @return {Boolean}        true if a sys_id
	 * @example
	 * SNValidator.checkValidSysIDArgument('153ebc53a4377100764f456eb40d41f1'); //true
	 * @example
	 * SNValidator.checkValidSysIDArgument('ZXYWbxjf1243892389'); //false
 	*/
	checkValidSysIDArgument: function(sys_id) {		
		this.checkValidStringArgument(sys_id);
		return sys_id.match(/^[0-9a-f]{32}$/);		
	},
	/**
	 * checkValidCallbackArgument
	 * @description Validates that an argument is, in fact, a function to callback
	 * @param  {Function} callback     A function to test
	 * @return {boolean}                true if a valid function (or object)
	 * @example
	 * var func = function() { console.log("boom"); };
	 * SNValidator.checkValidCallbackArgument(func); //true
	 * @example
	 * var func = {};
	 * SNValidator.checkValidCallbackArgument(func); //false
	 */
	checkValidCallbackArgument: function(callback) {
		return typeof callback === 'function';
	},	
	/**
 	* @description Logger function that does not work in prod (scripps)
	 * @return {boolean} true if the instance is not production; false otherwise
 	*/
	logger: function(text){
		if (gs.getProperty('instance_name') != 'scripps'){
			gs.log(text);
		}
	},
	type: 'SNValidator'
};