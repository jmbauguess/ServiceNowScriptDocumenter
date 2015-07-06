/**
 * SNFormatter
 * @namespace
 * @description Contains functions to format values properly, such as money, strings, titles, etc.
 * @type {Class}
 */
var SNFormatter = Class.create();
SNFormatter.prototype = {	
	/**
 	* @description Formats a string into a money value; does not check to see if it's just numbers
 	* @param {string} value - the value to convert to money
 	* @return {string} a string formatted with a dollar sign and at least 2 decimal places
	 * @example
	 * SNFormatter.formatMoneyValue('12.333'); // $12.33
	 * @example
	 * SNFormatter.formatMoneyValue('12.3'); // $12.33
 	*/
	formatMoneyValue: function(value){
		var valueArray = value.toString().split('.');
		if (valueArray[0].indexOf('-') > -1) {
			var returnVal = '-$' + valueArray[0].replace('-', '');
		} else {
			var returnVal = '$' + valueArray[0];
		}
		if (valueArray.length > 1) {
			if (valueArray[1].length == 1){
				valueArray[1] = valueArray[1].concat('0');
			} else if (valueArray[1].length > 2) {
				valueArray[1] = valueArray[1].substring(0,2);
			}
			returnVal += '.' + valueArray[1];
		} else if (valueArray.length == 1) {
			returnVal += '.00';
		}
		return returnVal;
	},
    type: 'SNFormatter'
}