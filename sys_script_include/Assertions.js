/**
 * Assertions 
 * @description Contains assertions for running unit tests
 * @namespace
 * @type {Class}
 */
var Assertions = Class.create();
Assertions.prototype = {
	/**
	 * @description runs on initialization of the object
	 * @param  {string} tableName    A table name for what is being tested
	 * @param  {string} functionName The name of the function or class being tested
	 * @param {string} testName The name of the test
	 */
	initialize: function(tableName, functionName, testName) {
		this.tableName = tableName;
		this.functionName = functionName;
		this.testName = testName;
	},	
	/**
	 * @description Sets the name of the function being tested
	 * @param {string} functionName The name of the function or class being tested
	 */
	setFunctionName: function(functionName) {
		this.functionName = functionName;
	},
	/**
	 * @description  Sets the name of the table being tested
	 * @param {string} tableName The name of the table being tested
	 */
	setTableName: function(tableName) {
		this.tableName = tableName;
	},
	/**
	 * @description sets the name of the test
	 * @param {string} testName The name of the test
	 */
	setTestName: function(testName) {
		this.testName = testName;
	},
	/**
	 * @description Asserts that a value is equal to what is expected (==)
	 * @param  {any} expected A value that is expected
	 * @param  {any} actual   The actual value
	 * @param  {string} message  A message describing the test
	 * @example
	 * assert.assertEqual(1, 1, '1 ?== 1'); //true
	 * assert.assertEqual(1, 2, '1 ?== 2'); //false
	 */
	assertEqual: function(expected, actual, message) {
		var answer = expected == actual ? true : false;		
		if (!answer) {
			this.fail("Expected " + expected + " but instead received " + actual + this.cleanUpMessage(message));
		} else {
			this.pass("Expected " + expected + " and received " + actual + this.cleanUpMessage(message));
		}
	},
	/**
	 * assertDeepEqual Asserts that a value is equal to what is expected (===)
	 * @param  {any} expected A value that is expected
	 * @param  {any} actual   The actual value
	 * @param  {string} message  A message describing the test
	 * @example
	 * assert.assertDeepEqual('1', 1, 'String of 1 equals 1?'); //false
	 * assert.assertDeepEqual(1, 1, 'Number 1 equals Number 1?'); //true
	 */
	assertDeepEqual: function(expected, actual, message) {
		var answer = expected === actual ? true : false;
		if (!answer) {
			this.fail("Expected " + expected + " but instead received " + actual + this.cleanUpMessage(message));
		} else {
			this.pass("Expected " + expected + " and received " + actual + this.cleanUpMessage(message));
		}
	},
	/**
	 * @description Asserts that a value is not equal to an expected value (!=)
	 * @param  {any} expected A value that is expected
	 * @param  {any} actual   The actual value
	 * @param  {string} message  A message describing the test
	 * @example
	 * assert.assertNotEqual('Pie', 'Cake', 'Cake does not equal Pie'); //true
	 * assert.assertNotEqual(1, 1, 'One does not equal One?'); //false
	 */
	assertNotEqual: function(expected, actual, message) {
		var answer = expected != actual ? true : false;
		if (!answer) {
			this.fail("Expected " + expected + " but instead received " + actual + this.cleanUpMessage(message));
		} else {
			this.pass("Expected to not be " + expected + " and received " + actual + this.cleanUpMessage(message));
		}
	},
	/**
	 * @description Asserts that a value is not equal to an expected value (!==)
	 * @param  {any} expected A value that is expected
	 * @param  {any} actual   The actual value
	 * @param  {string} message  A message describing the test
	 * @example
	 * assert.assertDeepNotEqual('Pie', 'Cake', 'Cake does not equal Pie'); //true
	 * assert.assertDeepNotEqual(1, 1, 'One does not equal One?'); //false
	 */
	assertDeepNotEqual: function(expected, actual, message) {
		var answer = expected !== actual ? true : false;
		if (!answer) {
			this.fail("Expected " + expected + " but instead received " + actual + this.cleanUpMessage(message));
		} else {
			this.pass("Expected to not be " + expected + " and received " + actual + this.cleanUpMessage(message));
		}
	},	
	/**
	 * @description Asserts that an exception is thrown by a function
	 * @param  {Function} block   A block of code to execute
	 * @param  {string} message A message describing the test
	 * @example
	 * assert.assertThrows(function() { throw 'help'; }, 'This function throws "help"'); //true
	 */
	assertThrows: function(block, message) {
		var threw = false;		
		try {
			block();
		} catch (e) {
			threw = true;			
		}
		if (!threw)
			this.fail("Expected exception " + this.cleanUpMessage(message));			
			
		this.pass("Expected an exception and one was thrown " + this.cleanUpMessage(message));		
	},
	/**
	 * @description Asserts that a value is true
	 * @param  {any} value   A value to test
	 * @param  {string} message A message describing the test
	 * @example
	 * assert.assertTrue(1 == 1, 'One equals One?'); //true
	 * assert.assertTrue(1 == 2, 'One equals Two?'); //false
	 */
	assertTrue: function(value, message) {
		if (value === true) {
			this.pass("Expected " + value + " to be true, and it was " + this.cleanUpMessage(message));
		} else {
			this.fail("Expected " + value + " to be true, and it was not " + this.cleanUpMessage(message));
		}
	},
	/**
	 * @description Asserts that a value is false
	 * @param  {any} value   A value to test
	 * @param  {string} message A message describing the test
	 * @example
	 * assert.assertFalse(1 == 1, 'One equals One?'); //false
	 * assert.assertFalse(1 == 2, 'One equals Two?'); //true
	 */
	assertFalse: function(value, message) {
		if (value === false) {
			this.pass("Expected " + value + " to be false, and it was " + this.cleanUpMessage(message));
		} else {
			this.fail("Expected " + value + " to be false, and it was not " + this.cleanUpMessage(message));
		}
	},
	/**
	 * @description Handles the passing of a test
	 * @param  {string} message A message describing the test
	 */
	pass: function(message) {
		this.createResultRecord(message, true);
		this.results.passed.push(message);
	},
	/**
	 * @description Handles the failure of a test
	 * @param  {string} message A message describing the test
	 */
	fail: function(message) {
		this.createResultRecord(message, false);
		this.results.failed.push(message);
	},
	/**
	 * cleanUpMessage Cleans up the message; returns '' if nothing was passed in
	 * @param  {string} message A message describing the test
	 * @return {string} A cleaned up message
	 */
	cleanUpMessage: function(message) {
		if (message) {
			return message = ": " + message;
		}
		return '';
	},
	/**
	 * @description Logs the result to a table in ServiceNow
	 * @param  {string} message A message describing the test
	 * @param  {boolean} flag    Whether or not the test passed
	 */
	createResultRecord: function(message, flag) {
		var result = new GlideRecord('u_unit_test_result');
		result.initialize();
		var flagMessage = flag ? 'pass' : 'fail';
		result.u_status = flagMessage;		
		result.u_message = message;
		result.u_test_name = this.testName;
		result.u_function_name = this.functionName;
		result.u_table_name = this.tableName;
		result.insert();
	},
	/**
	 * @description An object containing an array of results
	 * @type {Object}
	 */
	results: {'failed': [], 'passed': []},
	type: 'Assertions'
};