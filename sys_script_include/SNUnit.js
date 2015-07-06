/**
 * @description Runs back-end unit tests in ServiceNow
 * @namespace SNUnit
 * @type {Class}
 */
var SNUnit = Class.create();
SNUnit.prototype = {
	/**
	 * @description creates the test object
	 * @param  {Function} setup    A setup function
	 * @param  {Function} teardown A teardown function
	 */
    initialize: function(setup, teardown) {
		this.setup = setup;
		this.teardown = teardown;
		this.framework = new Assertions();
    },
    /**
     * @description set a setup function
     * @param {Function} setup A setup function
     */
	setSetup: function(setup) {
		this.setup = setup;
	},
	/**
	 * @description set a teardown function
	 * @param  {Function} teardown A teardown function
	 */
	setTeardown: function(teardown) {
		this.teardown = teardown;
	},
	/**
	 * @description Runs a test, first calling the setup and finally calling the teardown
	 * @param  {string}   name     A description of the test
	 * @param  {Function} callback A function containing tests
	 */
	test: function(name, callback) {
		try {
			this.setup();
			this.framework.setTestName(name);
			callback();
		} catch (e) {
			gs.log("There was an error running or setting up the tests");			
		} finally {
			this.teardown();
		}
	},	
    type: 'SNUnit'
};