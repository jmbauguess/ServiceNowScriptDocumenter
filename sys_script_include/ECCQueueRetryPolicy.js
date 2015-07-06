var ECCQueueRetryPolicy = Class.create();

/**
 * A JS class that is used by the ECC Retry Policy async business rule
 * on the ECC Queue table. It makes use of ECC Queue Retry Policy
 * definitions to decide whether an outbound ECC queue (output) needs to be
 * retried or not.  It determines this by triggering off of the resulting
 * input ECC Queue entry in response to the output queue.
 */
ECCQueueRetryPolicy.prototype = {
  /**
   * Constructor, takes the input ECC Queue record as the argument
   */
  initialize : function(inputQueueGR) {
	this.fDebug = gs.getProperty('ecc.queue.retry.debug', false);
    this._debug(inputQueueGR.sys_id);
    this.fECCInputQueueGR = inputQueueGR;
    this.fCorrelator;    
  },

  /**
   * The main entry point to this class, call this to start processing
   * after calling the constructor
   */
  process : function() {
    var processed = false;
    var pGR = new GlideRecord("ecc_queue_retry_policy");
    pGR.addActiveQuery();
    pGR.orderBy("order");
    pGR.query();
    while(pGR.next()) {
      if(this.processPolicy(pGR)) {
        processed = true;
        break; // there can only be 1 policy at a time, they will all run
      }
    }

    if(!processed) {
      this._debug("no policy matches ECC Queue input record, retry not processed");
      this._updateSuccess(); // update the most recent "retrying" activity to "succeeded"
    }
  },

  /**
   * Internal function for updating the most recent / incomplete activity
   * row that is related to the input ECC Queue to the status of "succeeded"
   */
  _updateSuccess : function() {
    if(this.fECCInputQueueGR.response_to.nil()) {
      return; // there is no response_to, nothing to process
    }

    if(this.fECCInputQueueGR.response_to.response_to.nil()) {
      return; // the original ECC output queue is not present, nothing to process
    }

    var correlator = this.fECCInputQueueGR.response_to.response_to;
    // locate a retrying activity and update it to success
    var agr = new GlideRecord("ecc_queue_retry_activity");
    agr.addQuery("retry_queue_entry", correlator);
    agr.orderByDesc("retry_count");
    agr.query();
    while (agr.next()) {
      if (agr.status == "failed" || agr.status == "error") {
        break;
      }

      agr.status = "succeeded";
      agr.input_queue = this.fECCInputQueueGR.sys_id;
      agr.update();
      break;
    }
  },

  /**
   * Process one policy, schedules a retry to occur by creating a 
   * sys_trigger job in the future
   */
  processPolicy : function(p) {
    this._debug("--------- processPolicy '" + p.name + "' ----------");
    if (!this._matchRecord(p)) {
      return false;
    }

    if (!this._evaluateCondition(p)) {
      return false; // no processing needed
    }

    // the correlator value is the sys_id of the original ECC Output Queue GR
    // that caused the retry.  Subsequent ECC Output Queue GR that are inserted
    // because of retry will have it's response_to field pointing to the original
    // ECC Output Queue GR
    if (this.fECCInputQueueGR.response_to.nil()) {
      gs.log("ECCQueueRetryPolicy: no response_to value, cannot retry (" + this.fECCInputQueueGR.sys_id + ")");
      return false;
    }
    
    if (!this._setCorrelator()) {
      return false; // unable to set correlator, cannot retry
    }

    var status = "retrying"
    var retryCount = 1;
    var pa = this._getLastActivity(p, this.fCorrelator);
    if (pa == null) {
      retryCount = 1;
    } else if (pa.status == "succeeded" || pa.status == "failed" || pa.status == "error") {
      this._debug("status = " + pa.status + ", no retry");
      pa.input_queue = this.fECCInputQueueGR.sys_id;
      pa.update();
      return false; // we're done, no more retries
    } else if (pa.status == "last_try") {
      pa.status = "failed";
      pa.input_queue = this.fECCInputQueueGR.sys_id;
      pa.update();
      return true;
    } else {
      retryCount = pa.retry_count + 1;
      if (retryCount == p.max_retry) {
        status = "last_try";
      }
      pa.input_queue = this.fECCInputQueueGR.sys_id;
      pa.update();
    }

    /**
     * Calculate the next retry time and schedule a job to run in the future
     * to re-create the ECC output queue entry
     */
    var d = p.getElement("retry_interval").getGlideObject().getNumericValue() / 1000; // in seconds
    now.addSeconds(d);

    this._debug("scheduling retry: '" + this.fECCInputQueueGR.response_to + "', '" + retryCount + "', '" + status + "', '" + p.sys_id + "'");

    var s = new ScheduleOnce();
    s.script = "var eRetry = new ECCQueueRetry('" + this.fCorrelator + "');" + 
               "eRetry.process('" + 
               this.fECCInputQueueGR.response_to + "', '" + 
               retryCount + "', '" + 
               status + "', '" + p.sys_id + "');";
    s.setAsSeconds(d);
    s.schedule();

    /************************************************************************/

    this._debug("scheduled retry");
    return true;
  },

  /**
   * Match the input ECC Queue entry with the policy
   */
  _matchRecord : function(pGR) {
    var agent = this.fECCInputQueueGR.agent.toString();
    var topic = this.fECCInputQueueGR.topic.toString();
    var eccName = this.fECCInputQueueGR.name.toString();
    var source = this.fECCInputQueueGR.source.toString();

    if (!this._equalsFieldValue(pGR.agent, agent)) {
      this._debug("agent does not match");
      return false;
    }

    if (!this._equalsFieldValue(pGR.topic, topic)) {
      this._debug("topic does not match");
      return false;
    }

    if (!this._equalsFieldValue(pGR.ecc_name, eccName)) {
      this._debug("ecc_name does not match");
      return false;
    }

    if (!this._equalsFieldValue(pGR.source, source)) {
      this._debug("source does not match");
      return false;
    }

    // check the filter on the policy with the input ECC queue
    if (!pGR.condition.nil()) {
      var matched = GlideFilter.checkRecord(this.fECCInputQueueGR, pGR.condition, true);
      this._debug("match condition '" + pGR.condition + "': " + matched);
      return matched;
    }

    this._debug("_matchRecord returns true");
    return true;
  },

  /**
   * Compare fields only when it is not nil
   */
  _equalsFieldValue : function(el, str) {
    if (!el.nil() && !el.toString().equals(str)) {
      return false;
    }

    return true;
  },

  /**
   * Set the class variable for the correlator value with the
   * original ECC output queue sys_id, this value is used to create
   * a retry "set"
   */
  _setCorrelator : function() {
    var outputQueueGR = new GlideRecord("ecc_queue");
    outputQueueGR.addQuery("sys_id", this.fECCInputQueueGR.response_to);
    outputQueueGR.query();
    if(!outputQueueGR.next()) {
      gs.log("ECCQueueRetryPolicy: output queue GR for input queue GR not found, cannot retry (" + this.fECCInputQueueGR.sys_id + ")");
      return false;
    }

    if(outputQueueGR.response_to.nil()) {
      this._debug("using the response_to of the input queue GR " + this.fECCInputQueueGR.response_to);
      this.fCorrelator = this.fECCInputQueueGR.response_to;
    } else {
      this._debug("using the response_to of the output queue GR " + this.fECCInputQueueGR.response_to.response_to);
      this.fCorrelator = outputQueueGR.response_to;
    }

    return true;
  },

  /**
   * Query for the last activity record, based on the correlator 
   * or original ECC output queue sys_id
   */
  _getLastActivity : function(p, correlator) {
    var pa = new GlideRecord("ecc_queue_retry_activity");
    pa.addQuery("policy", p.sys_id);
    pa.addQuery("retry_queue_entry", correlator);
    pa.orderByDesc("retry_count");
    pa.query();
    if (pa.next()) {
      this._debug("found activity");
      return pa;
    }

    this._debug("activity not found");
    return null;
  },

  /**
   * Evaluate the condition_script field of the policy to determine
   * if the input ECC queue record matches
   */
  _evaluateCondition : function(p) {
    if (p.condition_script.nil()) {
      this._debug("_evaluateCondition returns true, no condition_script");
      return true;
    }

    var script = p.condition_script;
    var evaluator = new GlideEvaluator();

    var answer = false;
    var controller = GlideController;
    controller.putGlobal("answer", answer);
    var ret = evaluator.evaluateCondition(p.condition_script);
    answer = controller.getGlobal("answer");
    controller.removeGlobal("answer");

    var ret = (answer == true);
    this._debug("_evaluateCondition returns " + ret);
    return ret;
  },

  /**
   * Called from a UI Action on the input ECC Queue
   * creates a default policy record from the ECC queue record as a template
   */
  createRetryPolicy : function() {
    var pgr = new GlideRecord("ecc_queue_retry_policy");
    pgr.initialize();

    pgr.agent = this.fECCInputQueueGR.agent;
    pgr.topic = this.fECCInputQueueGR.topic;
    pgr.ecc_name = this.fECCInputQueueGR.name;
    pgr.source = this.fECCInputQueueGR.source;
    pgr.active = "true";

    var conditionStr = "";
    if (this.fECCInputQueueGR.state == "error") {
      pgr.condition = "state=error^EQ";
    }

    if (!this.fECCInputQueueGR.error_string.nil()) {
      var errorStr = this.fECCInputQueueGR.error_string.toString().trim().substring(0,20);
      pgr.condition_script = "answer = current.error_string.toString().startsWith('" + errorStr + "');";
    }

    pgr.insert();
    return pgr;
  },

  // debug output
  _debug : function(msg) {
    if (this.fDebug == false) {
      return;
    }

    gs.log("debugging ECCQueueRetryPolicy: " + msg); 
  }
}