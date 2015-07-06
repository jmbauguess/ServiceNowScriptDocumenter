## Objects
<dl>
<dt><a href="#AccessRequestApproverUpdate">AccessRequestApproverUpdate</a> : <code>object</code></dt>
<dd><p>Handles functionality for the AccessRequestApproverUpdate catalog item</p>
</dd>
<dt><a href="#ApplicationAccessRequestUtils">ApplicationAccessRequestUtils</a> : <code>object</code></dt>
<dd><p>Application Access request utilities</p>
</dd>
<dt><a href="#ApprovalRetriever">ApprovalRetriever</a> : <code>object</code></dt>
<dd><p>Retrieves approvals based on the ci</p>
</dd>
<dt><a href="#ApprovalUtil">ApprovalUtil</a> : <code>object</code></dt>
<dd><p>Generates custom email text for approval or requested item emails</p>
</dd>
<dt><a href="#AppsAndServices">AppsAndServices</a> : <code>object</code></dt>
<dd><p>Populates the services and watch list based on the business application field on the incident form</p>
</dd>
<dt><a href="#AppServiceUtil">AppServiceUtil</a> : <code>object</code></dt>
<dd><p>Handles app/service relationships for the incident form</p>
</dd>
<dt><a href="#Assertions">Assertions</a> : <code>object</code></dt>
<dd><p>Contains assertions for running unit tests</p>
</dd>
<dt><a href="#AttachmentChecker">AttachmentChecker</a> : <code>object</code></dt>
<dd><p>Checks the current record for attachments</p>
</dd>
<dt><a href="#BlockCertainEmailsUtil">BlockCertainEmailsUtil</a> : <code>object</code></dt>
<dd><p>Contains various utilities for dealing with blocked emails
 Also finds the source email in the header field of a current object of a business Rule that hits the sys_email table, because for some reason, finding out who it&#39;s from directly isn&#39;t something the current object wants to do, outside of an inbound action of course.</p>
</dd>
<dt><a href="#CatalogClassCreator">CatalogClassCreator</a> : <code>object</code></dt>
<dd><p>Creates classes for Selenium automated browser testing</p>
</dd>
<dt><a href="#ChangeManagementCIReference">ChangeManagementCIReference</a> : <code>object</code></dt>
<dd><p>Sets the CI reference qualifier for the Change Request Table based on the type of change request</p>
</dd>
<dt><a href="#ChangeManagementUtil">ChangeManagementUtil</a> : <code>object</code></dt>
<dd><p>Useful for server side CM functionality</p>
</dd>
<dt><a href="#ChangeTasker">ChangeTasker</a> : <code>object</code></dt>
<dd><p>A class for handling change tasks</p>
</dd>
<dt><a href="#ChatAlerts">ChatAlerts</a> : <code>object</code></dt>
<dd><p>Polls the system for Chat Messages</p>
</dd>
<dt><a href="#ClassCreator">ClassCreator</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#InboundEmailTicketUtil">InboundEmailTicketUtil</a> : <code>object</code></dt>
<dd><p>This is a class that contains all the utilities to handle Inbound Emails sent with the intent of creating new incident tickets.</p>
</dd>
<dt><a href="#ModelClassCreator">ModelClassCreator</a> : <code>object</code></dt>
<dd><p>Creates Model Classes for RESTful services</p>
</dd>
<dt><a href="#OnboardingUtil">OnboardingUtil</a> : <code>object</code></dt>
<dd><p>Contains functions for onboarding</p>
</dd>
<dt><a href="#ProposedChangeHandler">ProposedChangeHandler</a> : <code>object</code></dt>
<dd><p>Provides functionality for discovering information about proposed changes, can handle multiple proposed changes per change request</p>
</dd>
<dt><a href="#ReworkCancellation">ReworkCancellation</a> : <code>object</code></dt>
<dd><p>Handles the cancellation of reworked Requested Items</p>
</dd>
<dt><a href="#ReworkUtil">ReworkUtil</a> : <code>object</code></dt>
<dd><p>Handles functionality for rework</p>
</dd>
<dt><a href="#ScheduleNewHolidaysUtil">ScheduleNewHolidaysUtil</a> : <code>object</code></dt>
<dd><p>This contains the method needed to insert new or update holiday records</p>
</dd>
<dt><a href="#SecurityAccessUtil">SecurityAccessUtil</a> : <code>object</code></dt>
<dd><p>Handles checks for Security Access Requests</p>
</dd>
<dt><a href="#ServiceAccount">ServiceAccount</a> : <code>object</code></dt>
<dd><p>Allows for the creation of users that are useful for service accounts, so they can access web services from ServiceNow</p>
</dd>
<dt><a href="#ServiceCatalogUtils">ServiceCatalogUtils</a> : <code>object</code></dt>
<dd><p>Utilities for general Service Catalog items: requests, requested items, etc.</p>
</dd>
<dt><a href="#SNFormatter">SNFormatter</a> : <code>object</code></dt>
<dd><p>Contains functions to format values properly, such as money, strings, titles, etc.</p>
</dd>
<dt><a href="#SNUnit">SNUnit</a> : <code>object</code></dt>
<dd><p>Runs back-end unit tests in ServiceNow</p>
</dd>
<dt><a href="#SNValidator">SNValidator</a> : <code>object</code></dt>
<dd><p>Validates arguments for ServiceNow classes</p>
</dd>
<dt><a href="#SNVariableUtil">SNVariableUtil</a> : <code>object</code></dt>
<dd><p>Contains functionality that handles service catalog variables or other dictionary items</p>
</dd>
<dt><a href="#UserAndGroupUtils">UserAndGroupUtils</a> : <code>object</code></dt>
<dd><p>Utility functions for users and groups</p>
</dd>
<dt><a href="#VariableClearer">VariableClearer</a> : <code>object</code></dt>
<dd><p>There are times when variables on a ritm need to be cleared due to users changing options without clearing them.  Using g_form.setValue(&#39;name&#39;, &#39;&#39;) will not work on the client side because the form needs the sys_id (with ni.VE prepended) to identify the element on the form</p>
</dd>
<dt><a href="#CatalogDateValidator">CatalogDateValidator</a> : <code>object</code></dt>
<dd><p>Validates dates on a catalog item, because the standard validator doesn&#39;t work there</p>
</dd>
<dt><a href="#ChangeLCSController">ChangeLCSController</a> : <code>object</code></dt>
<dd><p>Controls how the Life Cycle Status of Change Request appears</p>
</dd>
<dt><a href="#ChangeRequest">ChangeRequest</a> : <code>object</code></dt>
<dd><p>Handles the field states for Change Request.  Used in the UI Policies to prevent overlap when the policies are at the same order level.</p>
</dd>
<dt><a href="#ChatAlertsClient">ChatAlertsClient</a> : <code>object</code></dt>
<dd><p>Displays chat messages on the client side</p>
</dd>
<dt><a href="#IncidentMessage">IncidentMessage</a> : <code>object</code></dt>
<dd><p>Controls that the incident message is shown on the list view, since we took the functionality away from the gs.addErrorMessage() code in the business rule.
  Instead, now the client renders the message based on g_user.getClientData and gs.putClientData</p>
</dd>
<dt><a href="#MedeaInternational">MedeaInternational</a> : <code>object</code></dt>
<dd><p>Contains functions for the Medea International Catalog Item and its Variable Sets/Variables</p>
</dd>
<dt><a href="#MediaPulse">MediaPulse</a> : <code>object</code></dt>
<dd><p>Contains functionality for the MediaPulse form</p>
</dd>
<dt><a href="#PeopleSoft">PeopleSoft</a> : <code>object</code></dt>
<dd><p>Contains utility functions for PeopleSoft Access Request</p>
</dd>
<dt><a href="#PreApprovalUtil">PreApprovalUtil</a> : <code>object</code></dt>
<dd><p>Used to filter the categories and sub categories for Change Pre-Approvals</p>
</dd>
<dt><a href="#QueryString">QueryString</a> : <code>object</code></dt>
<dd><p>creates an object that contains parameters passed in from the URL</p>
</dd>
<dt><a href="#SecurityAccessRequest">SecurityAccessRequest</a> : <code>object</code></dt>
<dd><p>Contains utilities for Security Access Request catalog items</p>
</dd>
<dt><a href="#ServiceCatalog">ServiceCatalog</a> : <code>object</code></dt>
<dd><p>Class for handling Service Catalog functionality</p>
</dd>
<dt><a href="#TaskUtils">TaskUtils</a> : <code>object</code></dt>
<dd><p>Contains base functionality for tasks</p>
</dd>
<dt><a href="#VariableHider">VariableHider</a> : <code>object</code></dt>
<dd><p>Handles hiding variables or making them read-only on a ritm, because the UI policies often fail at this</p>
</dd>
</dl>
## Typedefs
<dl>
<dt><a href="#handleMissingFields">handleMissingFields</a> : <code>function</code></dt>
<dd><p>Ensures that blank, read-only fields on a catalog task are not set as mandatory</p>
</dd>
<dt><a href="#handleFieldNames">handleFieldNames</a> : <code>function</code></dt>
<dd><p>Gets the name of the variable so we can properly disable it</p>
</dd>
</dl>
<a name="AccessRequestApproverUpdate"></a>
## AccessRequestApproverUpdate : <code>object</code>
Handles functionality for the AccessRequestApproverUpdate catalog item

**Kind**: global namespace  
**Extends:** <code>AbstractAjaxProcessor</code>  
**See**: SNValidator  

* [AccessRequestApproverUpdate](#AccessRequestApproverUpdate) : <code>object</code>
  * [.getApprovers()](#AccessRequestApproverUpdate.getApprovers) ⇒ <code>string</code>
  * [.getAllowedGroups()](#AccessRequestApproverUpdate.getAllowedGroups) ⇒ <code>Array</code>
  * [.accessAllowed()](#AccessRequestApproverUpdate.accessAllowed) ⇒
  * [.updateApprovers(current)](#AccessRequestApproverUpdate.updateApprovers) ⇒
  * [.isCatalogItemSOX(current)](#AccessRequestApproverUpdate.isCatalogItemSOX) ⇒ <code>boolean</code>
  * [.cleanName(name)](#AccessRequestApproverUpdate.cleanName) ⇒ <code>string</code>

<a name="AccessRequestApproverUpdate.getApprovers"></a>
### AccessRequestApproverUpdate.getApprovers() ⇒ <code>string</code>
AJAX function to return approvers to the client form

**Kind**: static method of <code>[AccessRequestApproverUpdate](#AccessRequestApproverUpdate)</code>  
**Returns**: <code>string</code> - - a String/Array of approver sys_ids  

| Type | Description |
| --- | --- |
| <code>string</code> | A sys_id from the form |

<a name="AccessRequestApproverUpdate.getAllowedGroups"></a>
### AccessRequestApproverUpdate.getAllowedGroups() ⇒ <code>Array</code>
returns an array groups who are allowed to view the catalog item

**Kind**: static method of <code>[AccessRequestApproverUpdate](#AccessRequestApproverUpdate)</code>  
**Returns**: <code>Array</code> - A list of group names  
<a name="AccessRequestApproverUpdate.accessAllowed"></a>
### AccessRequestApproverUpdate.accessAllowed() ⇒
Determines if a user can access the catalog item

**Kind**: static method of <code>[AccessRequestApproverUpdate](#AccessRequestApproverUpdate)</code>  
**Returns**: - true if the user can access it  
<a name="AccessRequestApproverUpdate.updateApprovers"></a>
### AccessRequestApproverUpdate.updateApprovers(current) ⇒
Given a requested item, updates the related catalog approver entry

**Kind**: static method of <code>[AccessRequestApproverUpdate](#AccessRequestApproverUpdate)</code>  
**Returns**: true if the update was successful; false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | a requested item glide record |

<a name="AccessRequestApproverUpdate.isCatalogItemSOX"></a>
### AccessRequestApproverUpdate.isCatalogItemSOX(current) ⇒ <code>boolean</code>
Determines if the catalog item relates to a sox application

**Kind**: static method of <code>[AccessRequestApproverUpdate](#AccessRequestApproverUpdate)</code>  
**Returns**: <code>boolean</code> - - true if the catalog item relates to a sox application  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current requested item |

<a name="AccessRequestApproverUpdate.cleanName"></a>
### AccessRequestApproverUpdate.cleanName(name) ⇒ <code>string</code>
converts the name to match a CMDB entry - Currently Many are wrong or have multiple possibilities

**Kind**: static method of <code>[AccessRequestApproverUpdate](#AccessRequestApproverUpdate)</code>  
**Returns**: <code>string</code> - the cleaned up name  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the catalog item |

<a name="ApplicationAccessRequestUtils"></a>
## ApplicationAccessRequestUtils : <code>object</code>
Application Access request utilities

**Kind**: global namespace  

* [ApplicationAccessRequestUtils](#ApplicationAccessRequestUtils) : <code>object</code>
  * [.getSecurityAccessRequestUser(current)](#ApplicationAccessRequestUtils+getSecurityAccessRequestUser) ⇒ <code>String</code>
  * [.getCurrentApplication(current)](#ApplicationAccessRequestUtils+getCurrentApplication) ⇒ <code>String</code>
  * [.getHiringManager(gr)](#ApplicationAccessRequestUtils+getHiringManager)
  * [.getRequestedFor(gr)](#ApplicationAccessRequestUtils+getRequestedFor)
  * [.reworkReminder()](#ApplicationAccessRequestUtils+reworkReminder)
  * [.approvalReminder()](#ApplicationAccessRequestUtils+approvalReminder)

<a name="ApplicationAccessRequestUtils+getSecurityAccessRequestUser"></a>
### applicationAccessRequestUtils.getSecurityAccessRequestUser(current) ⇒ <code>String</code>
Determines what type of user the request is for, then returns that user

**Kind**: instance method of <code>[ApplicationAccessRequestUtils](#ApplicationAccessRequestUtils)</code>  
**Returns**: <code>String</code> - The name of the user requested for  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | The current record |

<a name="ApplicationAccessRequestUtils+getCurrentApplication"></a>
### applicationAccessRequestUtils.getCurrentApplication(current) ⇒ <code>String</code>
Returns the name of the current category item

**Kind**: instance method of <code>[ApplicationAccessRequestUtils](#ApplicationAccessRequestUtils)</code>  
**Returns**: <code>String</code> - the name of the category item, which is an application  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current record |

<a name="ApplicationAccessRequestUtils+getHiringManager"></a>
### applicationAccessRequestUtils.getHiringManager(gr)
Gets the Hiring Manager on the RITM

**Kind**: instance method of <code>[ApplicationAccessRequestUtils](#ApplicationAccessRequestUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | The sc_req_item glide record |

<a name="ApplicationAccessRequestUtils+getRequestedFor"></a>
### applicationAccessRequestUtils.getRequestedFor(gr)
Gets the "Requested For" on the RITM

**Kind**: instance method of <code>[ApplicationAccessRequestUtils](#ApplicationAccessRequestUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | The sc_req_item glide record |

<a name="ApplicationAccessRequestUtils+reworkReminder"></a>
### applicationAccessRequestUtils.reworkReminder()
Fires off a rework notification if the item has not be reworked in a specified period of time.  If the item has not been updated in 30 days, it is automatically rejected

**Kind**: instance method of <code>[ApplicationAccessRequestUtils](#ApplicationAccessRequestUtils)</code>  
**See**: ScheduledJob  
<a name="ApplicationAccessRequestUtils+approvalReminder"></a>
### applicationAccessRequestUtils.approvalReminder()
Checks for Access Request approvals that are idle.  If they are idle for 30 days, they are automatically rejected.  If they are idle for 15 days, a reminder is sent. The times can be changed via system properties on the Service Catalog system properties page

**Kind**: instance method of <code>[ApplicationAccessRequestUtils](#ApplicationAccessRequestUtils)</code>  
<a name="ApprovalRetriever"></a>
## ApprovalRetriever : <code>object</code>
Retrieves approvals based on the ci

**Kind**: global namespace  

* [ApprovalRetriever](#ApprovalRetriever) : <code>object</code>
  * [.initialize(current)](#ApprovalRetriever+initialize)
  * [.getApproversByFieldFromCI(fieldName, ci)](#ApprovalRetriever+getApproversByFieldFromCI) ⇒ <code>array</code>
  * [.trySplittingValues(value)](#ApprovalRetriever+trySplittingValues) ⇒ <code>array</code>
  * [.removeCIApprovers()](#ApprovalRetriever+removeCIApprovers)
  * [.resetNonCIApprovers(state)](#ApprovalRetriever+resetNonCIApprovers)
  * [.removeNonCIApprovers()](#ApprovalRetriever+removeNonCIApprovers)
  * [.removeInfrastructureApprovers()](#ApprovalRetriever+removeInfrastructureApprovers)
  * [.removeEmergencyApprovers()](#ApprovalRetriever+removeEmergencyApprovers)
  * [.resetProposedChangeApprovers()](#ApprovalRetriever+resetProposedChangeApprovers)

<a name="ApprovalRetriever+initialize"></a>
### approvalRetriever.initialize(current)
Sets some class variables

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current record (typically a change request) |

<a name="ApprovalRetriever+getApproversByFieldFromCI"></a>
### approvalRetriever.getApproversByFieldFromCI(fieldName, ci) ⇒ <code>array</code>
Gets an approver or group of approvers from a given field on a given ci

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  
**Returns**: <code>array</code> - an array of approvers  

| Param | Type | Description |
| --- | --- | --- |
| fieldName | <code>string</code> | the name of a field |
| ci | <code>GlideRecord</code> | the sys_id of a configuration item |

<a name="ApprovalRetriever+trySplittingValues"></a>
### approvalRetriever.trySplittingValues(value) ⇒ <code>array</code>
Wraps the attempt to split an array into a try catch block

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  
**Returns**: <code>array</code> - either the string split by comma, or an empty array  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | a string to split into an array |

<a name="ApprovalRetriever+removeCIApprovers"></a>
### approvalRetriever.removeCIApprovers()
Removes any default approvers from the approval list for a task

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  
**Example**  
```js
var ar = new ApprovalRetriever(current); if (current.type == "Std-Application") {	ar.removeCIApprovers();		}
```
<a name="ApprovalRetriever+resetNonCIApprovers"></a>
### approvalRetriever.resetNonCIApprovers(state)
Resets approvals to a given state

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>string</code> | the state to set the approvals |

**Example**  
```js
var ar = new ApprovalRetriever(current);ar.resetNonCIApprovers('not requested');
```
<a name="ApprovalRetriever+removeNonCIApprovers"></a>
### approvalRetriever.removeNonCIApprovers()
Completely removes an approval record

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  
**Example**  
```js
var ar = new ApprovalRetriever(current);ar.removeNonCIApprovers();
```
<a name="ApprovalRetriever+removeInfrastructureApprovers"></a>
### approvalRetriever.removeInfrastructureApprovers()
Removes and resets approvals on infrastructure

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  
**Example**  
```js
var ar = new ApprovalRetriever(current);else {    ar.removeInfrastructureApprovers();}
```
<a name="ApprovalRetriever+removeEmergencyApprovers"></a>
### approvalRetriever.removeEmergencyApprovers()
Removes and resets Emergency approvals

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  
**Example**  
```js
var ar = new ApprovalRetriever(current);if (current.type == "Emergency") {	ar.removeEmergencyApprovers();}
```
<a name="ApprovalRetriever+resetProposedChangeApprovers"></a>
### approvalRetriever.resetProposedChangeApprovers()
Resets approvals related to proposed changes

**Kind**: instance method of <code>[ApprovalRetriever](#ApprovalRetriever)</code>  
**Example**  
```js
var ar = new ApprovalRetriever(current);if (NonAppliedProposedChangesExist(current)) {	ar.resetProposedChangeApprovers();}
```
<a name="ApprovalUtil"></a>
## ApprovalUtil : <code>object</code>
Generates custom email text for approval or requested item emails

**Kind**: global namespace  
**Extends:** <code>[SNVariableUtil](#SNVariableUtil)</code>  
**See**

- SNValidator
- SNFormatter
- OnboardingUtil
- SercurityAccessUtil
- ServiceCatalogUtils


* [ApprovalUtil](#ApprovalUtil) : <code>object</code>
  * [.initialize()](#ApprovalUtil.initialize)
  * [.getCustomFields()](#ApprovalUtil.getCustomFields) ⇒ <code>string</code>
  * [.determineVariables()](#ApprovalUtil.determineVariables)
  * [.handleNeededVariables(sc)](#ApprovalUtil.handleNeededVariables)
  * [.handleReturn()](#ApprovalUtil.handleReturn) ⇒ <code>string</code>
  * [.reorderResult()](#ApprovalUtil.reorderResult) ⇒ <code>string</code>
  * [.getVariables(argument)](#ApprovalUtil.getVariables) ⇒ <code>array</code>
  * [.isReworkable()](#ApprovalUtil.isReworkable) ⇒ <code>boolean</code>

<a name="ApprovalUtil.initialize"></a>
### ApprovalUtil.initialize()
Creates an ApprovalUtil object

**Kind**: static method of <code>[ApprovalUtil](#ApprovalUtil)</code>  
<a name="ApprovalUtil.getCustomFields"></a>
### ApprovalUtil.getCustomFields() ⇒ <code>string</code>
Processes the custom fields needed for an approval email

**Kind**: static method of <code>[ApprovalUtil](#ApprovalUtil)</code>  
**Returns**: <code>string</code> - a result list, containing questions and their values  
**Example**  
```js
//Inside an Email Notification's mail script tagvar approvalUtil = new ApprovalUtil(current.sysapproval);template.print(approvalUtil.getCustomFields());
```
<a name="ApprovalUtil.determineVariables"></a>
### ApprovalUtil.determineVariables()
Sets the variables list for the class

**Kind**: static method of <code>[ApprovalUtil](#ApprovalUtil)</code>  
<a name="ApprovalUtil.handleNeededVariables"></a>
### ApprovalUtil.handleNeededVariables(sc)
process

**Kind**: static method of <code>[ApprovalUtil](#ApprovalUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| sc | <code>GlideRecord</code> | The Catalog Variable Glide Record |

<a name="ApprovalUtil.handleReturn"></a>
### ApprovalUtil.handleReturn() ⇒ <code>string</code>
finalizes the process and returns the final results

**Kind**: static method of <code>[ApprovalUtil](#ApprovalUtil)</code>  
**Returns**: <code>string</code> - a string contain information about the variables in the request  
<a name="ApprovalUtil.reorderResult"></a>
### ApprovalUtil.reorderResult() ⇒ <code>string</code>
Reorders the results from the query into the correct field order so it can be printed neatly in an email

**Kind**: static method of <code>[ApprovalUtil](#ApprovalUtil)</code>  
**Returns**: <code>string</code> - a string that contains proper output  
<a name="ApprovalUtil.getVariables"></a>
### ApprovalUtil.getVariables(argument) ⇒ <code>array</code>
gets the variable list associated with the catalog item

**Kind**: static method of <code>[ApprovalUtil](#ApprovalUtil)</code>  
**Returns**: <code>array</code> - an array containing variables (questions) to look for  

| Param | Type | Description |
| --- | --- | --- |
| argument | <code>string</code> | includes any extra text to add to the system property |

<a name="ApprovalUtil.isReworkable"></a>
### ApprovalUtil.isReworkable() ⇒ <code>boolean</code>
Determines if a catalog item is reworkable

**Kind**: static method of <code>[ApprovalUtil](#ApprovalUtil)</code>  
**Returns**: <code>boolean</code> - true if the catalog item is reworkable; false otherwise  
<a name="AppsAndServices"></a>
## AppsAndServices : <code>object</code>
Populates the services and watch list based on the business application field on the incident form

**Kind**: global namespace  
**Extends:** <code>AbstractAjaxProcessor</code>  

* [AppsAndServices](#AppsAndServices) : <code>object</code>
  * [.getService(sysparm_app, sysparm_ci)](#AppsAndServices.getService) ⇒ <code>string</code>
  * [.getApplication(sysparm_service)](#AppsAndServices.getApplication) ⇒ <code>string</code>
  * [.watchLister(sysparm_app)](#AppsAndServices.watchLister) ⇒ <code>string</code>
  * [.ciPopulator(sysparm_app, sysparm_ci, sysparm_service)](#AppsAndServices.ciPopulator) ⇒ <code>string</code>
  * [.ciRemover(sysparm_oldci)](#AppsAndServices.ciRemover) ⇒ <code>string</code>
  * [.ciRemoverService(sysparm_oldci)](#AppsAndServices.ciRemoverService) ⇒ <code>string</code>

<a name="AppsAndServices.getService"></a>
### AppsAndServices.getService(sysparm_app, sysparm_ci) ⇒ <code>string</code>
Uses the relationship table to get services related to an application.  Typically, this is a 1:M relationship (Service:App), so it should return just one service

**Kind**: static method of <code>[AppsAndServices](#AppsAndServices)</code>  
**Returns**: <code>string</code> - The Service(s) associated with the application  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_app | <code>string</code> | AJAX parameter - a comma delimited list value |
| sysparm_ci | <code>string</code> | AJAX parameter - the sys_id of a ci |

<a name="AppsAndServices.getApplication"></a>
### AppsAndServices.getApplication(sysparm_service) ⇒ <code>string</code>
Uses the relationship table to get applications related to a service

**Kind**: static method of <code>[AppsAndServices](#AppsAndServices)</code>  
**Returns**: <code>string</code> - a list of applications related to given services  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_service | <code>string</code> | AJAX parameter - a comma delimited list of services |

<a name="AppsAndServices.watchLister"></a>
### AppsAndServices.watchLister(sysparm_app) ⇒ <code>string</code>
Returns a list of users based on the applications passed in via AJAX.  Note: The client side handles whether or not the user is removed, or users are added

**Kind**: static method of <code>[AppsAndServices](#AppsAndServices)</code>  
**Returns**: <code>string</code> - A string of users, comma delimited  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_app | <code>string</code> | AJAX parameter - a comma delimited list value |

<a name="AppsAndServices.ciPopulator"></a>
### AppsAndServices.ciPopulator(sysparm_app, sysparm_ci, sysparm_service) ⇒ <code>string</code>
Searches the Relationship table to find any relations between server CIs and business services

**Kind**: static method of <code>[AppsAndServices](#AppsAndServices)</code>  
**Returns**: <code>string</code> - a list of app/service relationships  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_app | <code>string</code> | AJAX parameter - a comma delimited list value |
| sysparm_ci | <code>string</code> | AJAX parameter - the sys_id of a ci |
| sysparm_service | <code>string</code> | AJAX parameter - a comma delimited list of services |

<a name="AppsAndServices.ciRemover"></a>
### AppsAndServices.ciRemover(sysparm_oldci) ⇒ <code>string</code>
Used when the CI changes to empty.  Returns all of the old apps so they can be removed.

**Kind**: static method of <code>[AppsAndServices](#AppsAndServices)</code>  
**Returns**: <code>string</code> - a list of applications related to that ci  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_oldci | <code>string</code> | The sys_id of a ci that's being removd from the form |

<a name="AppsAndServices.ciRemoverService"></a>
### AppsAndServices.ciRemoverService(sysparm_oldci) ⇒ <code>string</code>
removes services when the ci changes to empty

**Kind**: static method of <code>[AppsAndServices](#AppsAndServices)</code>  
**Returns**: <code>string</code> - a list of services related to that ci  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_oldci | <code>string</code> | The sys_id of a ci that's being removd from the form |

<a name="AppServiceUtil"></a>
## AppServiceUtil : <code>object</code>
Handles app/service relationships for the incident form

**Kind**: global namespace  
**See**: ArrayUtil  

* [AppServiceUtil](#AppServiceUtil) : <code>object</code>
  * [.initialize()](#AppServiceUtil+initialize)
  * [.getWatchListForApps(previous, current)](#AppServiceUtil+getWatchListForApps) ⇒ <code>string</code>
  * [.getManagers(application)](#AppServiceUtil+getManagers) ⇒ <code>array</code>
  * [.getBusinessServices(apps)](#AppServiceUtil+getBusinessServices) ⇒ <code>array</code>
  * [.getBusinessApplications(services)](#AppServiceUtil+getBusinessApplications) ⇒ <code>array</code>
  * [.syncCMDBCI(current, previous)](#AppServiceUtil+syncCMDBCI)

<a name="AppServiceUtil+initialize"></a>
### appServiceUtil.initialize()
Ensures there's an instance of ArrayUtil available

**Kind**: instance method of <code>[AppServiceUtil](#AppServiceUtil)</code>  
<a name="AppServiceUtil+getWatchListForApps"></a>
### appServiceUtil.getWatchListForApps(previous, current) ⇒ <code>string</code>
Finds the managers of the applications

**Kind**: instance method of <code>[AppServiceUtil](#AppServiceUtil)</code>  
**Returns**: <code>string</code> - The new watch list as a string  

| Param | Type | Description |
| --- | --- | --- |
| previous | <code>GlideRecord</code> | The Previous Version of the record |
| current | <code>GlideRecord</code> | The Current version of the record about to be saved |

<a name="AppServiceUtil+getManagers"></a>
### appServiceUtil.getManagers(application) ⇒ <code>array</code>
Gets managers related to applications

**Kind**: instance method of <code>[AppServiceUtil](#AppServiceUtil)</code>  
**Returns**: <code>array</code> - an array of managers  

| Param | Type | Description |
| --- | --- | --- |
| application | <code>array</code> | An array of applications |

<a name="AppServiceUtil+getBusinessServices"></a>
### appServiceUtil.getBusinessServices(apps) ⇒ <code>array</code>
Queries the Relationship table to find what services an application is related to

**Kind**: instance method of <code>[AppServiceUtil](#AppServiceUtil)</code>  
**Returns**: <code>array</code> - a list of services associated with the applications passed in  

| Param | Type | Description |
| --- | --- | --- |
| apps | <code>array</code> | A list of applications to use as a query parameter |

<a name="AppServiceUtil+getBusinessApplications"></a>
### appServiceUtil.getBusinessApplications(services) ⇒ <code>array</code>
Queries the Relationship table to find what services an application is related to

**Kind**: instance method of <code>[AppServiceUtil](#AppServiceUtil)</code>  
**Returns**: <code>array</code> - a list of applications associated with the services passed in  

| Param | Type | Description |
| --- | --- | --- |
| services | <code>array</code> | A list of services to use as a query parameter |

<a name="AppServiceUtil+syncCMDBCI"></a>
### appServiceUtil.syncCMDBCI(current, previous)
Takes the value of the CI and gets the related applications and services

**Kind**: instance method of <code>[AppServiceUtil](#AppServiceUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current record |
| previous | <code>GlideRecord</code> | the previous record |

<a name="Assertions"></a>
## Assertions : <code>object</code>
Contains assertions for running unit tests

**Kind**: global namespace  

* [Assertions](#Assertions) : <code>object</code>
  * [.results](#Assertions+results) : <code>Object</code>
  * [.initialize(tableName, functionName, testName)](#Assertions+initialize)
  * [.setFunctionName(functionName)](#Assertions+setFunctionName)
  * [.setTableName(tableName)](#Assertions+setTableName)
  * [.setTestName(testName)](#Assertions+setTestName)
  * [.assertEqual(expected, actual, message)](#Assertions+assertEqual)
  * [.assertDeepEqual(expected, actual, message)](#Assertions+assertDeepEqual)
  * [.assertNotEqual(expected, actual, message)](#Assertions+assertNotEqual)
  * [.assertDeepNotEqual(expected, actual, message)](#Assertions+assertDeepNotEqual)
  * [.assertThrows(block, message)](#Assertions+assertThrows)
  * [.assertTrue(value, message)](#Assertions+assertTrue)
  * [.assertFalse(value, message)](#Assertions+assertFalse)
  * [.pass(message)](#Assertions+pass)
  * [.fail(message)](#Assertions+fail)
  * [.cleanUpMessage(message)](#Assertions+cleanUpMessage) ⇒ <code>string</code>
  * [.createResultRecord(message, flag)](#Assertions+createResultRecord)

<a name="Assertions+results"></a>
### assertions.results : <code>Object</code>
An object containing an array of results

**Kind**: instance property of <code>[Assertions](#Assertions)</code>  
<a name="Assertions+initialize"></a>
### assertions.initialize(tableName, functionName, testName)
runs on initialization of the object

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tableName | <code>string</code> | A table name for what is being tested |
| functionName | <code>string</code> | The name of the function or class being tested |
| testName | <code>string</code> | The name of the test |

<a name="Assertions+setFunctionName"></a>
### assertions.setFunctionName(functionName)
Sets the name of the function being tested

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| functionName | <code>string</code> | The name of the function or class being tested |

<a name="Assertions+setTableName"></a>
### assertions.setTableName(tableName)
Sets the name of the table being tested

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tableName | <code>string</code> | The name of the table being tested |

<a name="Assertions+setTestName"></a>
### assertions.setTestName(testName)
sets the name of the test

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| testName | <code>string</code> | The name of the test |

<a name="Assertions+assertEqual"></a>
### assertions.assertEqual(expected, actual, message)
Asserts that a value is equal to what is expected (==)

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| expected | <code>any</code> | A value that is expected |
| actual | <code>any</code> | The actual value |
| message | <code>string</code> | A message describing the test |

**Example**  
```js
assert.assertEqual(1, 1, '1 ?== 1'); //trueassert.assertEqual(1, 2, '1 ?== 2'); //false
```
<a name="Assertions+assertDeepEqual"></a>
### assertions.assertDeepEqual(expected, actual, message)
assertDeepEqual Asserts that a value is equal to what is expected (===)

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| expected | <code>any</code> | A value that is expected |
| actual | <code>any</code> | The actual value |
| message | <code>string</code> | A message describing the test |

**Example**  
```js
assert.assertDeepEqual('1', 1, 'String of 1 equals 1?'); //falseassert.assertDeepEqual(1, 1, 'Number 1 equals Number 1?'); //true
```
<a name="Assertions+assertNotEqual"></a>
### assertions.assertNotEqual(expected, actual, message)
Asserts that a value is not equal to an expected value (!=)

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| expected | <code>any</code> | A value that is expected |
| actual | <code>any</code> | The actual value |
| message | <code>string</code> | A message describing the test |

**Example**  
```js
assert.assertNotEqual('Pie', 'Cake', 'Cake does not equal Pie'); //trueassert.assertNotEqual(1, 1, 'One does not equal One?'); //false
```
<a name="Assertions+assertDeepNotEqual"></a>
### assertions.assertDeepNotEqual(expected, actual, message)
Asserts that a value is not equal to an expected value (!==)

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| expected | <code>any</code> | A value that is expected |
| actual | <code>any</code> | The actual value |
| message | <code>string</code> | A message describing the test |

**Example**  
```js
assert.assertDeepNotEqual('Pie', 'Cake', 'Cake does not equal Pie'); //trueassert.assertDeepNotEqual(1, 1, 'One does not equal One?'); //false
```
<a name="Assertions+assertThrows"></a>
### assertions.assertThrows(block, message)
Asserts that an exception is thrown by a function

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>function</code> | A block of code to execute |
| message | <code>string</code> | A message describing the test |

**Example**  
```js
assert.assertThrows(function() { throw 'help'; }, 'This function throws "help"'); //true
```
<a name="Assertions+assertTrue"></a>
### assertions.assertTrue(value, message)
Asserts that a value is true

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | A value to test |
| message | <code>string</code> | A message describing the test |

**Example**  
```js
assert.assertTrue(1 == 1, 'One equals One?'); //trueassert.assertTrue(1 == 2, 'One equals Two?'); //false
```
<a name="Assertions+assertFalse"></a>
### assertions.assertFalse(value, message)
Asserts that a value is false

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | A value to test |
| message | <code>string</code> | A message describing the test |

**Example**  
```js
assert.assertFalse(1 == 1, 'One equals One?'); //falseassert.assertFalse(1 == 2, 'One equals Two?'); //true
```
<a name="Assertions+pass"></a>
### assertions.pass(message)
Handles the passing of a test

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message describing the test |

<a name="Assertions+fail"></a>
### assertions.fail(message)
Handles the failure of a test

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message describing the test |

<a name="Assertions+cleanUpMessage"></a>
### assertions.cleanUpMessage(message) ⇒ <code>string</code>
cleanUpMessage Cleans up the message; returns '' if nothing was passed in

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  
**Returns**: <code>string</code> - A cleaned up message  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message describing the test |

<a name="Assertions+createResultRecord"></a>
### assertions.createResultRecord(message, flag)
Logs the result to a table in ServiceNow

**Kind**: instance method of <code>[Assertions](#Assertions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | A message describing the test |
| flag | <code>boolean</code> | Whether or not the test passed |

<a name="AttachmentChecker"></a>
## AttachmentChecker : <code>object</code>
Checks the current record for attachments

**Kind**: global namespace  
<a name="AttachmentChecker.checkAttachments"></a>
### AttachmentChecker.checkAttachments(sysparm_record) ⇒ <code>boolean</code>
Checks a task record for attachments

**Kind**: static method of <code>[AttachmentChecker](#AttachmentChecker)</code>  
**Returns**: <code>boolean</code> - true if the record has attachments; false if it does not  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_record | <code>string</code> | the sys_id of a task record |

<a name="BlockCertainEmailsUtil"></a>
## BlockCertainEmailsUtil : <code>object</code>
Contains various utilities for dealing with blocked emails
 Also finds the source email in the header field of a current object of a business Rule that hits the sys_email table, because for some reason, finding out who it's from directly isn't something the current object wants to do, outside of an inbound action of course.

**Kind**: global namespace  

* [BlockCertainEmailsUtil](#BlockCertainEmailsUtil) : <code>object</code>
  * [.checkBlockedEmail(emailName)](#BlockCertainEmailsUtil+checkBlockedEmail) ⇒ <code>boolean</code>
  * [.trimOutFrom(header)](#BlockCertainEmailsUtil+trimOutFrom) ⇒ <code>string</code>

<a name="BlockCertainEmailsUtil+checkBlockedEmail"></a>
### blockCertainEmailsUtil.checkBlockedEmail(emailName) ⇒ <code>boolean</code>
Checks to see whether or not the email passed is an email in the "blocked list" of a given application

**Kind**: instance method of <code>[BlockCertainEmailsUtil](#BlockCertainEmailsUtil)</code>  
**Returns**: <code>boolean</code> - true if the email is blocked; false if it's not blocked  

| Param | Type | Description |
| --- | --- | --- |
| emailName | <code>string</code> | The email address |

<a name="BlockCertainEmailsUtil+trimOutFrom"></a>
### blockCertainEmailsUtil.trimOutFrom(header) ⇒ <code>string</code>
trims out the From part of an email header

**Kind**: instance method of <code>[BlockCertainEmailsUtil](#BlockCertainEmailsUtil)</code>  
**Returns**: <code>string</code> - who the email is from  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>string</code> | the header of an email |

<a name="CatalogClassCreator"></a>
## CatalogClassCreator : <code>object</code>
Creates classes for Selenium automated browser testing

**Kind**: global namespace  

* [CatalogClassCreator](#CatalogClassCreator) : <code>object</code>
  * [.initialize(camelCaseVariables, language)](#CatalogClassCreator+initialize)
  * [.processServiceCatalog()](#CatalogClassCreator+processServiceCatalog)
  * [.getServiceCatalogVariables(catalogItem)](#CatalogClassCreator+getServiceCatalogVariables) ⇒ <code>string</code>
  * [.generateClass(data, itemName)](#CatalogClassCreator+generateClass) ⇒ <code>string</code>
  * [.capitalizeFirstLetter(word)](#CatalogClassCreator+capitalizeFirstLetter) ⇒ <code>string</code>
  * [.replaceUnderscoresWithCamelCase(item)](#CatalogClassCreator+replaceUnderscoresWithCamelCase) ⇒ <code>string</code>
  * [.replaceSpaces(item)](#CatalogClassCreator+replaceSpaces) ⇒ <code>string</code>
  * [.getVariableSets(catalogItem)](#CatalogClassCreator+getVariableSets) ⇒ <code>array</code>
  * [.getJavaVariables(gr)](#CatalogClassCreator+getJavaVariables) ⇒ <code>array</code>
  * [.getJavascriptVariables(gr)](#CatalogClassCreator+getJavascriptVariables) ⇒ <code>array</code>
  * [.getCSharpVariables(gr)](#CatalogClassCreator+getCSharpVariables) ⇒ <code>array</code>
  * [.getPythonVariables(gr)](#CatalogClassCreator+getPythonVariables) ⇒ <code>array</code>
  * [.getRubyVariables(gr)](#CatalogClassCreator+getRubyVariables) ⇒ <code>array</code>

<a name="CatalogClassCreator+initialize"></a>
### catalogClassCreator.initialize(camelCaseVariables, language)
Initalizes values for the running of the script

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  

| Param | Type | Description |
| --- | --- | --- |
| camelCaseVariables | <code>string</code> | True for camelCase; false for non_camel_case |
| language | <code>string</code> | Which programming language |

<a name="CatalogClassCreator+processServiceCatalog"></a>
### catalogClassCreator.processServiceCatalog()
The entry point to the script

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
<a name="CatalogClassCreator+getServiceCatalogVariables"></a>
### catalogClassCreator.getServiceCatalogVariables(catalogItem) ⇒ <code>string</code>
Searches the variable table for variables associated with a Catalog Item

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>string</code> - A class to add to the database  

| Param | Type | Description |
| --- | --- | --- |
| catalogItem | <code>string</code> | The name of a catalog item |

<a name="CatalogClassCreator+generateClass"></a>
### catalogClassCreator.generateClass(data, itemName) ⇒ <code>string</code>
Generates a class based on the catalog item

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>string</code> - a class to add to the database  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | a list of variables |
| itemName | <code>string</code> | a catalog item |

<a name="CatalogClassCreator+capitalizeFirstLetter"></a>
### catalogClassCreator.capitalizeFirstLetter(word) ⇒ <code>string</code>
Capitalizes the first letter in a word

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>string</code> - The word with the first character capitalized  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | A word to alter |

<a name="CatalogClassCreator+replaceUnderscoresWithCamelCase"></a>
### catalogClassCreator.replaceUnderscoresWithCamelCase(item) ⇒ <code>string</code>
- Replaces "_" to make a word camelCase

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>string</code> - The passed in name in camelCase format  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>string</code> | A catalog item name |

<a name="CatalogClassCreator+replaceSpaces"></a>
### catalogClassCreator.replaceSpaces(item) ⇒ <code>string</code>
Replaces whitespace and non-word characters in a Catalog Iten name so it's a valid class name

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>string</code> - The name without spaces or non-word characters  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>string</code> | A catalog item name |

<a name="CatalogClassCreator+getVariableSets"></a>
### catalogClassCreator.getVariableSets(catalogItem) ⇒ <code>array</code>
Gets a list of variables in the variable set based on a catalog item

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>array</code> - An array of sys_ids of the variables in a variable set associated with the catalog item  

| Param | Type | Description |
| --- | --- | --- |
| catalogItem | <code>string</code> | The name of a catalog item |

<a name="CatalogClassCreator+getJavaVariables"></a>
### catalogClassCreator.getJavaVariables(gr) ⇒ <code>array</code>
Generates variables for the Java programming language

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>array</code> - An array containing the new variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Glide Record containing variable information |

<a name="CatalogClassCreator+getJavascriptVariables"></a>
### catalogClassCreator.getJavascriptVariables(gr) ⇒ <code>array</code>
Generates variables for the Javascript programming language

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>array</code> - An array containing the new variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Glide Record containing variable information |

<a name="CatalogClassCreator+getCSharpVariables"></a>
### catalogClassCreator.getCSharpVariables(gr) ⇒ <code>array</code>
Generates variables for the C# programming language

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>array</code> - An array containing the new variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Glide Record containing variable information |

<a name="CatalogClassCreator+getPythonVariables"></a>
### catalogClassCreator.getPythonVariables(gr) ⇒ <code>array</code>
Generates variables for the Python programming language

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>array</code> - An array containing the new variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Glide Record containing variable information |

<a name="CatalogClassCreator+getRubyVariables"></a>
### catalogClassCreator.getRubyVariables(gr) ⇒ <code>array</code>
Generates variables for the Ruby programming language

**Kind**: instance method of <code>[CatalogClassCreator](#CatalogClassCreator)</code>  
**Returns**: <code>array</code> - An array containing the new variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Glide Record containing variable information |

<a name="ChangeManagementCIReference"></a>
## ChangeManagementCIReference : <code>object</code>
Sets the CI reference qualifier for the Change Request Table based on the type of change request

**Kind**: global namespace  
<a name="ChangeManagementUtil"></a>
## ChangeManagementUtil : <code>object</code>
Useful for server side CM functionality

**Kind**: global namespace  
**Extends:** <code>AbstractAjaxProcesseor</code>  

* [ChangeManagementUtil](#ChangeManagementUtil) : <code>object</code>
  * [.isEmergencyPreApprovalComplete()](#ChangeManagementUtil.isEmergencyPreApprovalComplete)
  * [.eliminateWorkflow(current)](#ChangeManagementUtil.eliminateWorkflow)
  * [.isUserInGroup(sysparm_user)](#ChangeManagementUtil.isUserInGroup) ⇒ <code>boolean</code>
  * [.isServerBuild(type)](#ChangeManagementUtil.isServerBuild) ⇒ <code>boolean</code>
  * [.wereWorkNotesDone(sysparm_task)](#ChangeManagementUtil.wereWorkNotesDone) ⇒ <code>boolean</code>
  * [.checkApprovalCountInWorkflowStageOne(current, comparison)](#ChangeManagementUtil.checkApprovalCountInWorkflowStageOne) ⇒ <code>string</code>
  * [.checkApprovalCountInWorkflowStageTwo(current, comparison)](#ChangeManagementUtil.checkApprovalCountInWorkflowStageTwo) ⇒ <code>string</code>
  * [.checkCMPhaseApproval(current, changeApproversTotal-)](#ChangeManagementUtil.checkCMPhaseApproval) ⇒ <code>string</code>
  * [.checkApprovalCountInWorkflow(current)](#ChangeManagementUtil.checkApprovalCountInWorkflow) ⇒ <code>string</code>
  * [.checkPhaseTwoApproval(current, changeApproversTotal-)](#ChangeManagementUtil.checkPhaseTwoApproval) ⇒ <code>string</code>
  * [.isCM(approver)](#ChangeManagementUtil.isCM) ⇒ <code>boolean</code>
  * [.seeIfRegularApproverIsRemoved(approvalGR, comparison)](#ChangeManagementUtil.seeIfRegularApproverIsRemoved) ⇒ <code>boolean</code>
  * [.isPredefined(current)](#ChangeManagementUtil.isPredefined) ⇒ <code>boolean</code>
  * [.reschedule(current)](#ChangeManagementUtil.reschedule) ⇒ <code>GlideRecord</code>
  * [.copyChangeTasks(current, childChange)](#ChangeManagementUtil.copyChangeTasks)
  * [.copyAffectedCIs(current, the)](#ChangeManagementUtil.copyAffectedCIs)
  * [.copyImpactedServices(current, the)](#ChangeManagementUtil.copyImpactedServices)
  * [.checkForAllChangeTasksClosed(changeRequestSysID)](#ChangeManagementUtil.checkForAllChangeTasksClosed)
  * [.updateChangeTasksClosedField(changeRequestSysID, action)](#ChangeManagementUtil.updateChangeTasksClosedField)

<a name="ChangeManagementUtil.isEmergencyPreApprovalComplete"></a>
### ChangeManagementUtil.isEmergencyPreApprovalComplete()
Checks to see if the emergency pre approval is complete, so we don't show an unnecessary message

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
<a name="ChangeManagementUtil.eliminateWorkflow"></a>
### ChangeManagementUtil.eliminateWorkflow(current)
Deletes the current workflow

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | The current change request |

<a name="ChangeManagementUtil.isUserInGroup"></a>
### ChangeManagementUtil.isUserInGroup(sysparm_user) ⇒ <code>boolean</code>
In the instance where an Assignment Group/Assigned to is set in the Std-Application form, the Infrastructure type change will change the AG but not the Assigned to.  We need to ensure that the person is removed from AG if they aren't in the group

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>boolean</code> - true if the user is a member of a group  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_user | <code>string</code> | The sys_id of a user |

<a name="ChangeManagementUtil.isServerBuild"></a>
### ChangeManagementUtil.isServerBuild(type) ⇒ <code>boolean</code>
Tells us if this is a server build

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>boolean</code> - true if it's a server build  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The change type |

<a name="ChangeManagementUtil.wereWorkNotesDone"></a>
### ChangeManagementUtil.wereWorkNotesDone(sysparm_task) ⇒ <code>boolean</code>
Determines if there were work notes done on a record

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>boolean</code> - true if there were worknotes for the given record  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_task | <code>String</code> | a sys_id of a task record |

<a name="ChangeManagementUtil.checkApprovalCountInWorkflowStageOne"></a>
### ChangeManagementUtil.checkApprovalCountInWorkflowStageOne(current, comparison) ⇒ <code>string</code>
Checks the approval status of a change request

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>string</code> - 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current record (Change Request) |
| comparison | <code>Array</code> | a list of users that were original approvers |

<a name="ChangeManagementUtil.checkApprovalCountInWorkflowStageTwo"></a>
### ChangeManagementUtil.checkApprovalCountInWorkflowStageTwo(current, comparison) ⇒ <code>string</code>
Checks the approval status of a change request

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>string</code> - 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current record (Change Request) |
| comparison | <code>Array</code> | a list of users that were original approvers |

<a name="ChangeManagementUtil.checkCMPhaseApproval"></a>
### ChangeManagementUtil.checkCMPhaseApproval(current, changeApproversTotal-) ⇒ <code>string</code>
Checks the approval status of a change request during the phase 2 approval

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>string</code> - 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current record (Change Request) |
| changeApproversTotal- | <code>Array</code> | the number of change approvers - based on the CI or CM group |

<a name="ChangeManagementUtil.checkApprovalCountInWorkflow"></a>
### ChangeManagementUtil.checkApprovalCountInWorkflow(current) ⇒ <code>string</code>
Checks the approval status of a change request

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>string</code> - 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise  
**Depricated**:   

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current record (Change Request) |

<a name="ChangeManagementUtil.checkPhaseTwoApproval"></a>
### ChangeManagementUtil.checkPhaseTwoApproval(current, changeApproversTotal-) ⇒ <code>string</code>
Checks the approval status of a change request during the phase 2 approval

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>string</code> - 'approved' if the total = approved; 'rejected' if there is one rejection; '' otherwise  
**Depricated**:   

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current record (Change Request) |
| changeApproversTotal- | <code>integer</code> | the number of change approvers - based on the CI or CM group |

<a name="ChangeManagementUtil.isCM"></a>
### ChangeManagementUtil.isCM(approver) ⇒ <code>boolean</code>
Determines if the approver is a change manager.  We only want the Change manager's approval to count once during phase 2

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>boolean</code> - true if the user is a member of the change management group  

| Param | Type | Description |
| --- | --- | --- |
| approver | <code>string</code> | The sys_id of an approver |

<a name="ChangeManagementUtil.seeIfRegularApproverIsRemoved"></a>
### ChangeManagementUtil.seeIfRegularApproverIsRemoved(approvalGR, comparison) ⇒ <code>boolean</code>
checks the approvals to see if the default approver(s) have been removed

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>boolean</code> - true if all the original approvers are removed; false if they are still there  

| Param | Type | Description |
| --- | --- | --- |
| approvalGR | <code>GlideRecord</code> | GlideRecord containing approvers |
| comparison | <code>Array</code> | an array of approvers |

<a name="ChangeManagementUtil.isPredefined"></a>
### ChangeManagementUtil.isPredefined(current) ⇒ <code>boolean</code>
Determines if a task is one from the workflows

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>boolean</code> - true if it's predefined; false if it's a custom task  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the task record to check |

<a name="ChangeManagementUtil.reschedule"></a>
### ChangeManagementUtil.reschedule(current) ⇒ <code>GlideRecord</code>
Reschedules a backed out change request

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  
**Returns**: <code>GlideRecord</code> - The child change request to redirect the form to  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | The change request to copy |

<a name="ChangeManagementUtil.copyChangeTasks"></a>
### ChangeManagementUtil.copyChangeTasks(current, childChange)
Copies custom change tasks from a backedout change to its child

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current change request record |
| childChange | <code>GlideRecord</code> | the child record |

<a name="ChangeManagementUtil.copyAffectedCIs"></a>
### ChangeManagementUtil.copyAffectedCIs(current, the)
Copies affected ci records from a parent change to the child change

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current change request record |
| the | <code>GlideRecord</code> | child record |

<a name="ChangeManagementUtil.copyImpactedServices"></a>
### ChangeManagementUtil.copyImpactedServices(current, the)
Copies impacted services records from a parent change to the child change

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current change request record |
| the | <code>GlideRecord</code> | child record |

<a name="ChangeManagementUtil.checkForAllChangeTasksClosed"></a>
### ChangeManagementUtil.checkForAllChangeTasksClosed(changeRequestSysID)
Checks to see if all change tasks are closed.  If so, sets a variable to be true

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| changeRequestSysID | <code>string</code> | a sys_id of a change request |

<a name="ChangeManagementUtil.updateChangeTasksClosedField"></a>
### ChangeManagementUtil.updateChangeTasksClosedField(changeRequestSysID, action)
Performs the action of updating the change request to tell if all tasks are closed

**Kind**: static method of <code>[ChangeManagementUtil](#ChangeManagementUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| changeRequestSysID | <code>string</code> | a sys_id of a change request |
| action | <code>boolean</code> | the true/false value to update the change request with |

<a name="ChangeTasker"></a>
## ChangeTasker : <code>object</code>
A class for handling change tasks

**Kind**: global namespace  

* [ChangeTasker](#ChangeTasker) : <code>object</code>
  * [.initialize(change)](#ChangeTasker+initialize)
  * [.runOnScheduled()](#ChangeTasker+runOnScheduled)
  * [.runOnNewChange()](#ChangeTasker+runOnNewChange)
  * [.runOnTypeChange()](#ChangeTasker+runOnTypeChange)
  * [.runOnUpdate()](#ChangeTasker+runOnUpdate)
  * [._getBaseTasks()](#ChangeTasker+_getBaseTasks) ⇒ <code>array</code>
  * [._getSoxTasks()](#ChangeTasker+_getSoxTasks) ⇒ <code>array</code>
  * [.getCurrentTasks()](#ChangeTasker+getCurrentTasks) ⇒ <code>GlideRecord</code>
  * [._deleteOldTasks()](#ChangeTasker+_deleteOldTasks)
  * [._createNewTasks()](#ChangeTasker+_createNewTasks)
  * [._shouldSOXTasksBeMade()](#ChangeTasker+_shouldSOXTasksBeMade) ⇒ <code>boolean</code>
  * [.resetEmergencyApprovalTask()](#ChangeTasker+resetEmergencyApprovalTask)
  * [.isEmergencyGoingBack()](#ChangeTasker+isEmergencyGoingBack) ⇒ <code>boolean</code>
  * [.isInfrastructureScheduled()](#ChangeTasker+isInfrastructureScheduled) ⇒ <code>boolean</code>
  * [.isNonInfrastructureCreated()](#ChangeTasker+isNonInfrastructureCreated) ⇒ <code>boolean</code>

<a name="ChangeTasker+initialize"></a>
### changeTasker.initialize(change)
initializes values for the class

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  

| Param | Type | Description |
| --- | --- | --- |
| change | <code>GlideRecord</code> | Change Request |

<a name="ChangeTasker+runOnScheduled"></a>
### changeTasker.runOnScheduled()
Main Method for when a change request moves into "Scheduled" LCS

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
<a name="ChangeTasker+runOnNewChange"></a>
### changeTasker.runOnNewChange()
Main Method for New Changes

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
<a name="ChangeTasker+runOnTypeChange"></a>
### changeTasker.runOnTypeChange()
Runs if the type of a change request is changed

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
<a name="ChangeTasker+runOnUpdate"></a>
### changeTasker.runOnUpdate()
Compares current change tasks with a list of sox change tasks to see if any need to be generated

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
<a name="ChangeTasker+_getBaseTasks"></a>
### changeTasker._getBaseTasks() ⇒ <code>array</code>
Queries the custom tasks table for tasks based on change type and ci

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
**Returns**: <code>array</code> - an array of tasks data  
<a name="ChangeTasker+_getSoxTasks"></a>
### changeTasker._getSoxTasks() ⇒ <code>array</code>
runs to deal with SOX related change requests

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
**Returns**: <code>array</code> - an array of tasks data  
<a name="ChangeTasker+getCurrentTasks"></a>
### changeTasker.getCurrentTasks() ⇒ <code>GlideRecord</code>
Gets a list of change tasks given a change request

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
**Returns**: <code>GlideRecord</code> - the change tasks related to a change  
<a name="ChangeTasker+_deleteOldTasks"></a>
### changeTasker._deleteOldTasks()
Deletes all change tasks related to the current change request, but only if they are inactive

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
<a name="ChangeTasker+_createNewTasks"></a>
### changeTasker._createNewTasks()
Creates new tasks for a change request

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
<a name="ChangeTasker+_shouldSOXTasksBeMade"></a>
### changeTasker._shouldSOXTasksBeMade() ⇒ <code>boolean</code>
Conditional for when SOX change tasks should be created

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
**Returns**: <code>boolean</code> - true if the CI is SOX governed and the change request uses SOX project framework  
<a name="ChangeTasker+resetEmergencyApprovalTask"></a>
### changeTasker.resetEmergencyApprovalTask()
Resets the emergency approval task to open

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
<a name="ChangeTasker+isEmergencyGoingBack"></a>
### changeTasker.isEmergencyGoingBack() ⇒ <code>boolean</code>
Conditional for a Business Rule: true if the emergency change request moves from Scheduled to Draft

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
**Returns**: <code>boolean</code> - true if the change request is emergency and moves back to Draft from Scheduled  
<a name="ChangeTasker+isInfrastructureScheduled"></a>
### changeTasker.isInfrastructureScheduled() ⇒ <code>boolean</code>
isInfrastructureScheduled Conditional for a business rule: true if it's an infrastructure record moving to scheduled

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
**Returns**: <code>boolean</code> - true if the change request is infrastructure and scheduled  
<a name="ChangeTasker+isNonInfrastructureCreated"></a>
### changeTasker.isNonInfrastructureCreated() ⇒ <code>boolean</code>
Conditional for a business rule: true if it's a new non-infrastructure record

**Kind**: instance method of <code>[ChangeTasker](#ChangeTasker)</code>  
**Returns**: <code>boolean</code> - true if it's a new record that's not an infrastructure type  
<a name="ChatAlerts"></a>
## ChatAlerts : <code>object</code>
Polls the system for Chat Messages

**Kind**: global namespace  
**Extends:** <code>AbstractAjaxProcessor</code>  

* [ChatAlerts](#ChatAlerts) : <code>object</code>
  * [.log()](#ChatAlerts.log)
  * [.getMyMessages()](#ChatAlerts.getMyMessages) ⇒ <code>HttpResponse</code>
  * [.acknowledgeMessage(sysparm_message_sys_id)](#ChatAlerts.acknowledgeMessage)
  * [._addChatMessage(gr)](#ChatAlerts._addChatMessage)
  * [._dayOfWeek(i)](#ChatAlerts._dayOfWeek) ⇒ <code>String</code>

<a name="ChatAlerts.log"></a>
### ChatAlerts.log()
Logs to the console if the DEBUG property is true

**Kind**: static method of <code>[ChatAlerts](#ChatAlerts)</code>  
<a name="ChatAlerts.getMyMessages"></a>
### ChatAlerts.getMyMessages() ⇒ <code>HttpResponse</code>
AJAX Function to get chat messages from the server and return them to the client

**Kind**: static method of <code>[ChatAlerts](#ChatAlerts)</code>  
**Returns**: <code>HttpResponse</code> - a response containing unacknowledge chat messages  
<a name="ChatAlerts.acknowledgeMessage"></a>
### ChatAlerts.acknowledgeMessage(sysparm_message_sys_id)
Acknowledges messages, so they will no longer appear on screen

**Kind**: static method of <code>[ChatAlerts](#ChatAlerts)</code>  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_message_sys_id | <code>string</code> | The sys_id of a chat message |

<a name="ChatAlerts._addChatMessage"></a>
### ChatAlerts._addChatMessage(gr)
Adds a chat message to the XML we are returning

**Kind**: static method of <code>[ChatAlerts](#ChatAlerts)</code>  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | A glide record of a chat message |

<a name="ChatAlerts._dayOfWeek"></a>
### ChatAlerts._dayOfWeek(i) ⇒ <code>String</code>
Helper function to get an abbreviation for the day of the week

**Kind**: static method of <code>[ChatAlerts](#ChatAlerts)</code>  
**Returns**: <code>String</code> - the three letter abbreviation for the day  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>Integer</code> | the numerical day of the week |

<a name="ClassCreator"></a>
## ClassCreator : <code>object</code>
**Kind**: global namespace  
**Descriptioncreates**: classes for Selenium automated browser testing  

* [ClassCreator](#ClassCreator) : <code>object</code>
  * [.initialize(camelCaseVariables, language, tableType)](#ClassCreator+initialize)
  * [.getTaskTables()](#ClassCreator+getTaskTables)
  * [.getCMDBTables()](#ClassCreator+getCMDBTables)
  * [.getTableVariables(tableName, cmdbFlag)](#ClassCreator+getTableVariables) ⇒ <code>string</code>
  * [.generateClass(data, tablename)](#ClassCreator+generateClass) ⇒ <code>string</code>
  * [.capitalizeFirstLetter(word)](#ClassCreator+capitalizeFirstLetter) ⇒ <code>string</code>
  * [.replaceUnderscoresWithCamelCase(item)](#ClassCreator+replaceUnderscoresWithCamelCase) ⇒ <code>string</code>
  * [.getJavaVariables(gr, tableName)](#ClassCreator+getJavaVariables) ⇒ <code>string</code>
  * [.getJavascriptVariables(gr, tableName)](#ClassCreator+getJavascriptVariables) ⇒ <code>string</code>
  * [.getCSharpVariables(gr, tableName)](#ClassCreator+getCSharpVariables) ⇒ <code>string</code>
  * [.getPythonVariables(gr, tableName)](#ClassCreator+getPythonVariables) ⇒ <code>string</code>
  * [.getRubyVariables(gr, tableName)](#ClassCreator+getRubyVariables) ⇒ <code>string</code>

<a name="ClassCreator+initialize"></a>
### classCreator.initialize(camelCaseVariables, language, tableType)
Initializes values for the running of the script

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  

| Param | Type | Description |
| --- | --- | --- |
| camelCaseVariables | <code>string</code> | True for camelCase; false for non_camel_case |
| language | <code>string</code> | Which programming language |
| tableType | <code>string</code> | A table type (Task, CMDB) - Basically, any table that is extended |

<a name="ClassCreator+getTaskTables"></a>
### classCreator.getTaskTables()
Entry point for the class; creates records in the Class Generator table (or udpates them)

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
<a name="ClassCreator+getCMDBTables"></a>
### classCreator.getCMDBTables()
Entry point for the class; creates records in the Class Generator table (or udpates them)

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
<a name="ClassCreator+getTableVariables"></a>
### classCreator.getTableVariables(tableName, cmdbFlag) ⇒ <code>string</code>
Starts a dictionary table query based on the table and its parent

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - Data to insert into the table  

| Param | Type | Description |
| --- | --- | --- |
| tableName | <code>string</code> | The table to query for |
| cmdbFlag | <code>boolean</code> | True if this is for cmdb (we want to ensure we get the base table, even if we're down a level or two of inheritance) |

<a name="ClassCreator+generateClass"></a>
### classCreator.generateClass(data, tablename) ⇒ <code>string</code>
Generates a class in the appropriate language

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - Data to insert into the table  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | A list of variables in a particular programming language |
| tablename | <code>string</code> | The table name of the class |

<a name="ClassCreator+capitalizeFirstLetter"></a>
### classCreator.capitalizeFirstLetter(word) ⇒ <code>string</code>
Capitalizes the first letter of a word

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - A word with the first word capitalized  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | The word to capitalize |

<a name="ClassCreator+replaceUnderscoresWithCamelCase"></a>
### classCreator.replaceUnderscoresWithCamelCase(item) ⇒ <code>string</code>
Takes a word and makes it camelCase

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - A camelCase version of the passed string  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>string</code> | The string to make camelCase |

<a name="ClassCreator+getJavaVariables"></a>
### classCreator.getJavaVariables(gr, tableName) ⇒ <code>string</code>
Creates variables based on the Java programming language

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - A list of variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Record containing dictionary entries |
| tableName | <code>string</code> | The tablenames |

<a name="ClassCreator+getJavascriptVariables"></a>
### classCreator.getJavascriptVariables(gr, tableName) ⇒ <code>string</code>
Creates variables based on the Javascript programming language

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - A list of variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Record containing dictionary entries |
| tableName | <code>string</code> | The tablenames |

<a name="ClassCreator+getCSharpVariables"></a>
### classCreator.getCSharpVariables(gr, tableName) ⇒ <code>string</code>
Creates variables based on the C# programming language

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - A list of variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Record containing dictionary entries |
| tableName | <code>string</code> | The tablenames |

<a name="ClassCreator+getPythonVariables"></a>
### classCreator.getPythonVariables(gr, tableName) ⇒ <code>string</code>
Creates variables based on the Python programming language

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - A list of variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Record containing dictionary entries |
| tableName | <code>string</code> | The tablenames |

<a name="ClassCreator+getRubyVariables"></a>
### classCreator.getRubyVariables(gr, tableName) ⇒ <code>string</code>
Creates variables based on the Ruby programming language

**Kind**: instance method of <code>[ClassCreator](#ClassCreator)</code>  
**Returns**: <code>string</code> - A list of variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Record containing dictionary entries |
| tableName | <code>string</code> | The tablenames |

<a name="InboundEmailTicketUtil"></a>
## InboundEmailTicketUtil : <code>object</code>
This is a class that contains all the utilities to handle Inbound Emails sent with the intent of creating new incident tickets.

**Kind**: global namespace  
**See**: BlockCertainEmailsUtil  

* [InboundEmailTicketUtil](#InboundEmailTicketUtil) : <code>object</code>
  * [.initialize(emailThing)](#InboundEmailTicketUtil+initialize)
  * [.checkForUser(emailRec)](#InboundEmailTicketUtil+checkForUser) ⇒ <code>GlideRecord</code>
  * [.isNewTicket()](#InboundEmailTicketUtil+isNewTicket) ⇒ <code>boolean</code>
  * [.handleTicket(current)](#InboundEmailTicketUtil+handleTicket)
  * [.createIncident(current)](#InboundEmailTicketUtil+createIncident)
  * [.handleWatchList()](#InboundEmailTicketUtil+handleWatchList) ⇒ <code>string</code>
  * [.handleNonFoundEmail()](#InboundEmailTicketUtil+handleNonFoundEmail)
  * [.handleWorkNotes(current)](#InboundEmailTicketUtil+handleWorkNotes)
  * [.addToIncident(inc)](#InboundEmailTicketUtil+addToIncident)
  * [.decodeHtmlEntity(str)](#InboundEmailTicketUtil+decodeHtmlEntity)

<a name="InboundEmailTicketUtil+initialize"></a>
### inboundEmailTicketUtil.initialize(emailThing)
Sets email object for entire class equal to the current email record that we'll be dealing with

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| emailThing | <code>GlideRecord</code> | An email record |

<a name="InboundEmailTicketUtil+checkForUser"></a>
### inboundEmailTicketUtil.checkForUser(emailRec) ⇒ <code>GlideRecord</code>
Checks for whether or not there is a user in the system, based on the email provided

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  
**Returns**: <code>GlideRecord</code> - the user from the email  

| Param | Type | Description |
| --- | --- | --- |
| emailRec | <code>string</code> | String containing the sender |

<a name="InboundEmailTicketUtil+isNewTicket"></a>
### inboundEmailTicketUtil.isNewTicket() ⇒ <code>boolean</code>
Checks all of the emails in the to,cc,and from fields. Finds if any of them have incidents that aren't resolved or closed with a short description that matches the subject of the email

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  
**Returns**: <code>boolean</code> - true if this is a new incident; false otherwise  
<a name="InboundEmailTicketUtil+handleTicket"></a>
### inboundEmailTicketUtil.handleTicket(current)
Checks to see whether the person sending this email is from inside service-now or not. If that person is, found in our system, make an incident

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current incident record |

<a name="InboundEmailTicketUtil+createIncident"></a>
### inboundEmailTicketUtil.createIncident(current)
Creates an incident based on the user and the contents of the email

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | An incident Record |

<a name="InboundEmailTicketUtil+handleWatchList"></a>
### inboundEmailTicketUtil.handleWatchList() ⇒ <code>string</code>
Handles the addition of users to the watch list of an incident

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  
**Returns**: <code>string</code> - a list of users to add to the watch list  
<a name="InboundEmailTicketUtil+handleNonFoundEmail"></a>
### inboundEmailTicketUtil.handleNonFoundEmail()
Forwards the current email to the support desk. Text, attachments, and all.

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  
<a name="InboundEmailTicketUtil+handleWorkNotes"></a>
### inboundEmailTicketUtil.handleWorkNotes(current)
Looks through every email in the To,CC, and From fields and finds whether  or not there is an incident with a short description that matches the subject of this current email (minus the "Re: "). If one is found, add the contents of the this email to the worknotes

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current incident |

<a name="InboundEmailTicketUtil+addToIncident"></a>
### inboundEmailTicketUtil.addToIncident(inc)
Takes the incident record, and adds the contents of this email, including attachments, to it

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| inc | <code>GlideRecord</code> | the current incident |

<a name="InboundEmailTicketUtil+decodeHtmlEntity"></a>
### inboundEmailTicketUtil.decodeHtmlEntity(str)
Ensures that special characters don't show up as HTML encoded entities. Ex: &#8211 should show up as -- and not the encoded value

**Kind**: instance method of <code>[InboundEmailTicketUtil](#InboundEmailTicketUtil)</code>  
**Retun**: <code>string</code> the string without HTML encoding  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | A string to decode |

<a name="ModelClassCreator"></a>
## ModelClassCreator : <code>object</code>
Creates Model Classes for RESTful services

**Kind**: global namespace  

* [ModelClassCreator](#ModelClassCreator) : <code>object</code>
  * [.initialize(tableType)](#ModelClassCreator+initialize)
  * [.getTaskTables()](#ModelClassCreator+getTaskTables)
  * [.getTableVariables(tableName)](#ModelClassCreator+getTableVariables) ⇒ <code>string</code>
  * [.generateClass(data, tablename)](#ModelClassCreator+generateClass) ⇒ <code>string</code>
  * [.generateCollectionClass(tablename)](#ModelClassCreator+generateCollectionClass) ⇒ <code>string</code>
  * [.collectionClassBody(tablename)](#ModelClassCreator+collectionClassBody) ⇒ <code>string</code>
  * [.capitalizeFirstLetter(word)](#ModelClassCreator+capitalizeFirstLetter) ⇒ <code>string</code>
  * [.lowerCaseFirstLetter(word)](#ModelClassCreator+lowerCaseFirstLetter) ⇒ <code>string</code>
  * [.replaceUnderscoresWithCamelCase(item)](#ModelClassCreator+replaceUnderscoresWithCamelCase) ⇒ <code>string</code>
  * [.getJavaVariables(gr, tableName)](#ModelClassCreator+getJavaVariables) ⇒ <code>string</code>
  * [.getFormalDataType(elementType)](#ModelClassCreator+getFormalDataType) ⇒ <code>string</code>
  * [.getParentElementType(elementName)](#ModelClassCreator+getParentElementType) ⇒ <code>String</code>

<a name="ModelClassCreator+initialize"></a>
### modelClassCreator.initialize(tableType)
Initializes values for the running of the script

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tableType | <code>string</code> | A table type (Task, CMDB) - Basically, any table that is extended |

<a name="ModelClassCreator+getTaskTables"></a>
### modelClassCreator.getTaskTables()
Entry point for the class; creates records in the Class Generator Model table (or updates them)

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
<a name="ModelClassCreator+getTableVariables"></a>
### modelClassCreator.getTableVariables(tableName) ⇒ <code>string</code>
Starts a dictionary table query based on the table and its parent

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - Data to insert into the table  

| Param | Type | Description |
| --- | --- | --- |
| tableName | <code>string</code> | The table to query for |

<a name="ModelClassCreator+generateClass"></a>
### modelClassCreator.generateClass(data, tablename) ⇒ <code>string</code>
Generates a class in the appropriate language

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - Data to insert into the table  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | A list of variables in a particular programming language |
| tablename | <code>string</code> | The table name of the class |

<a name="ModelClassCreator+generateCollectionClass"></a>
### modelClassCreator.generateCollectionClass(tablename) ⇒ <code>string</code>
Generates a Collection class for handling the data

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - Data to insert into the table  

| Param | Type | Description |
| --- | --- | --- |
| tablename | <code>string</code> | The table name of the class |

<a name="ModelClassCreator+collectionClassBody"></a>
### modelClassCreator.collectionClassBody(tablename) ⇒ <code>string</code>
Generates the body of the collection class

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - Data to insert into the table  

| Param | Type | Description |
| --- | --- | --- |
| tablename | <code>string</code> | The table name of the class |

<a name="ModelClassCreator+capitalizeFirstLetter"></a>
### modelClassCreator.capitalizeFirstLetter(word) ⇒ <code>string</code>
Capitalizes the first letter of a word

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - A word with the first word capitalized  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | The word to capitalize |

<a name="ModelClassCreator+lowerCaseFirstLetter"></a>
### modelClassCreator.lowerCaseFirstLetter(word) ⇒ <code>string</code>
Makes the first letter of a word lowercase

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - The word with the first letter capitalized  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | The word to make lowercase on first character |

<a name="ModelClassCreator+replaceUnderscoresWithCamelCase"></a>
### modelClassCreator.replaceUnderscoresWithCamelCase(item) ⇒ <code>string</code>
Takes a word and makes it camelCase

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - A camelCase version of the passed string  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>string</code> | The string to make camelCase |

<a name="ModelClassCreator+getJavaVariables"></a>
### modelClassCreator.getJavaVariables(gr, tableName) ⇒ <code>string</code>
Creates variables based on the Java programming language

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - A list of variables  

| Param | Type | Description |
| --- | --- | --- |
| gr | <code>GlideRecord</code> | Record containing dictionary entries |
| tableName | <code>string</code> | The tablename |

<a name="ModelClassCreator+getFormalDataType"></a>
### modelClassCreator.getFormalDataType(elementType) ⇒ <code>string</code>
gets the formal data type of an element

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>string</code> - boolean if a boolean; String if a string  

| Param | Type | Description |
| --- | --- | --- |
| elementType | <code>string</code> | the defined element type in ServiceNow |

<a name="ModelClassCreator+getParentElementType"></a>
### modelClassCreator.getParentElementType(elementName) ⇒ <code>String</code>
Finds out what type of element we are dealing with

**Kind**: instance method of <code>[ModelClassCreator](#ModelClassCreator)</code>  
**Returns**: <code>String</code> - what the scalar_type of the element (ie: base type) is  

| Param | Type | Description |
| --- | --- | --- |
| elementName | <code>String</code> | the type of element |

<a name="OnboardingUtil"></a>
## OnboardingUtil : <code>object</code>
Contains functions for onboarding

**Kind**: global namespace  

* [OnboardingUtil](#OnboardingUtil) : <code>object</code>
  * [.isOnboarding()](#OnboardingUtil+isOnboarding) ⇒
  * [.isVendorAccessRequest()](#OnboardingUtil+isVendorAccessRequest) ⇒
  * [.getVendorRequestType()](#OnboardingUtil+getVendorRequestType) ⇒ <code>string</code>

<a name="OnboardingUtil+isOnboarding"></a>
### onboardingUtil.isOnboarding() ⇒
Checks to see if the request is an Onboarding request or not

**Kind**: instance method of <code>[OnboardingUtil](#OnboardingUtil)</code>  
**Returns**: true if this is for an onboarding request  
<a name="OnboardingUtil+isVendorAccessRequest"></a>
### onboardingUtil.isVendorAccessRequest() ⇒
Checks to see if the request is a Vendor Access Request or not

**Kind**: instance method of <code>[OnboardingUtil](#OnboardingUtil)</code>  
**Returns**: true if this is a Vendor Access Request  
<a name="OnboardingUtil+getVendorRequestType"></a>
### onboardingUtil.getVendorRequestType() ⇒ <code>string</code>
If this is a Vendor Access Request, checks to see if it is a new or existing, because they use different variables for the name of the vendor

**Kind**: instance method of <code>[OnboardingUtil](#OnboardingUtil)</code>  
**Returns**: <code>string</code> - 'new' if a new vendor and 'existing' if an existing vendor  
<a name="ProposedChangeHandler"></a>
## ProposedChangeHandler : <code>object</code>
Provides functionality for discovering information about proposed changes, can handle multiple proposed changes per change request

**Kind**: global namespace  

* [ProposedChangeHandler](#ProposedChangeHandler) : <code>object</code>
  * [.initialize()](#ProposedChangeHandler+initialize)
  * [.presentData(current)](#ProposedChangeHandler+presentData) ⇒ <code>string</code>
  * [.getDictionaryFields(tablename)](#ProposedChangeHandler+getDictionaryFields)
  * [.getFieldLabel(element, name)](#ProposedChangeHandler+getFieldLabel) ⇒ <code>string</code>
  * [.getParentTable(tablename)](#ProposedChangeHandler+getParentTable) ⇒ <code>function</code>
  * [.getFormalName(tableSys)](#ProposedChangeHandler+getFormalName) ⇒ <code>string</code>
  * [.getRelevantCIDataFromAffectedCI(current)](#ProposedChangeHandler+getRelevantCIDataFromAffectedCI)
  * [.handleXML(record)](#ProposedChangeHandler+handleXML) ⇒ <code>array</code>
  * [.dealWithReferences(value, reference)](#ProposedChangeHandler+dealWithReferences) ⇒ <code>string</code>
  * [.dealWithDropDown(value, fieldObject)](#ProposedChangeHandler+dealWithDropDown) ⇒ <code>string</code>
  * [.dealWithBlankChange(text)](#ProposedChangeHandler+dealWithBlankChange) ⇒ <code>string</code>
  * [.autoApplyChange(current)](#ProposedChangeHandler+autoApplyChange)

<a name="ProposedChangeHandler+initialize"></a>
### proposedChangeHandler.initialize()
Sets the arrays to empty so they can be used throughout the class

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
<a name="ProposedChangeHandler+presentData"></a>
### proposedChangeHandler.presentData(current) ⇒ <code>string</code>
Main method, presents the data in a printable format for emails and such

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
**Returns**: <code>string</code> - A printable list of data  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | The current record |

**Example**  
```js
//Within an email or HTML fieldtemplate.print(new ProposedChangeHandler().presentData(current));
```
<a name="ProposedChangeHandler+getDictionaryFields"></a>
### proposedChangeHandler.getDictionaryFields(tablename)
Gets all fields in the dictionary related to a set of tables

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tablename | <code>string</code> | The base table name to query with |

<a name="ProposedChangeHandler+getFieldLabel"></a>
### proposedChangeHandler.getFieldLabel(element, name) ⇒ <code>string</code>
Queries the field label table to find the label of the field for displaying later

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
**Returns**: <code>string</code> - Either the label of the field, or just the element argument if no label was found  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | The name of the field |
| name | <code>string</code> | The name of the table |

<a name="ProposedChangeHandler+getParentTable"></a>
### proposedChangeHandler.getParentTable(tablename) ⇒ <code>function</code>
Gets the name of the super class of the current table, and pushes it to the parentArray

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
**Returns**: <code>function</code> - Recursive, if there is a super class it tries to find the top level  

| Param | Type | Description |
| --- | --- | --- |
| tablename | <code>string</code> | A name of a table |

<a name="ProposedChangeHandler+getFormalName"></a>
### proposedChangeHandler.getFormalName(tableSys) ⇒ <code>string</code>
Finds the formal name (not label) of a table

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
**Returns**: <code>string</code> - the display/formal name of the table  

| Param | Type | Description |
| --- | --- | --- |
| tableSys | <code>string</code> | a sys id of a table |

**Example**  
```js
getFormalName('d7d614a0790030001d9281cf14342734'); // 'alm_asset'getFormalName(''); // ''
```
<a name="ProposedChangeHandler+getRelevantCIDataFromAffectedCI"></a>
### proposedChangeHandler.getRelevantCIDataFromAffectedCI(current)
Searches through Affected CI's for proposed changes

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | the current Task record |

<a name="ProposedChangeHandler+handleXML"></a>
### proposedChangeHandler.handleXML(record) ⇒ <code>array</code>
Handles the processing of the payload in the proposed change

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
**Returns**: <code>array</code> - An Array of objects  

| Param | Type | Description |
| --- | --- | --- |
| record | <code>GlideRecord</code> | the TaskCI record |

<a name="ProposedChangeHandler+dealWithReferences"></a>
### proposedChangeHandler.dealWithReferences(value, reference) ⇒ <code>string</code>
Since some values are references, we don't want to present sys_ids to the user, but actual readable values

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
**Returns**: <code>string</code> - The "name" property of the table  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | A record sys_id |
| reference | <code>string</code> | A table that is referenced |

**Example**  
```js
dealWithReferences('6b39cf5b3d514d40536529c60b915ff6', 'sys_user'); // 'Justin Bauguess'
```
<a name="ProposedChangeHandler+dealWithDropDown"></a>
### proposedChangeHandler.dealWithDropDown(value, fieldObject) ⇒ <code>string</code>
Gets the display value of a choice for dropdowns that have different label/value pairs

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
**Returns**: <code>string</code> - the label that matches the value in the choice list  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The value of the choice |
| fieldObject | <code>object</code> | an object containing information about a field |

**Example**  
```js
dealWithDropDown('1', fieldObject); // Assuming the fieldObject is for CMDB_CI.status, "Installed"
```
<a name="ProposedChangeHandler+dealWithBlankChange"></a>
### proposedChangeHandler.dealWithBlankChange(text) ⇒ <code>string</code>
Replaces an empty string with the word "Nothing"

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  
**Returns**: <code>string</code> - the string if it's not empty or "Nothing" if it is empty  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | a string to test |

**Example**  
```js
dealWithBlankChange('   '); // 'Nothing'dealWithBlankChange('Something'); // 'Something'
```
<a name="ProposedChangeHandler+autoApplyChange"></a>
### proposedChangeHandler.autoApplyChange(current)
Applies the proposed changes automatically without the UI Action

**Kind**: instance method of <code>[ProposedChangeHandler](#ProposedChangeHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | A change request record |

**Example**  
```js
//Within a business rule with a condition of change_request.approval changesTo 'approved'new ProposedChangeHandler().autoApplyChange(current);
```
<a name="ReworkCancellation"></a>
## ReworkCancellation : <code>object</code>
Handles the cancellation of reworked Requested Items

**Kind**: global namespace  

* [ReworkCancellation](#ReworkCancellation) : <code>object</code>
  * [.checkForAutoReject()](#ReworkCancellation+checkForAutoReject)
  * [.autoReject(ritm)](#ReworkCancellation+autoReject) ⇒ <code>integer</code>
  * [.cancelWorkflowContexts(ritm)](#ReworkCancellation+cancelWorkflowContexts)

<a name="ReworkCancellation+checkForAutoReject"></a>
### reworkCancellation.checkForAutoReject()
Checks requested items in a state of rework that haven't been updated in a certain time period

**Kind**: instance method of <code>[ReworkCancellation](#ReworkCancellation)</code>  
**Example**  
```js
//From within a Scheduled Jobnew ReworkCancellation().checkForAutoReject();
```
<a name="ReworkCancellation+autoReject"></a>
### reworkCancellation.autoReject(ritm) ⇒ <code>integer</code>
If a request has been idle for too long, it needs to be rejected and closed

**Kind**: instance method of <code>[ReworkCancellation](#ReworkCancellation)</code>  
**Returns**: <code>integer</code> - The state of the requested item  

| Param | Type | Description |
| --- | --- | --- |
| ritm | <code>GlideRecord</code> | A requested item |

<a name="ReworkCancellation+cancelWorkflowContexts"></a>
### reworkCancellation.cancelWorkflowContexts(ritm)
Cancels all workflow contexts related to a ritm

**Kind**: instance method of <code>[ReworkCancellation](#ReworkCancellation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ritm | <code>GlideRecord</code> | A requested item |

<a name="ReworkUtil"></a>
## ReworkUtil : <code>object</code>
Handles functionality for rework

**Kind**: global namespace  

* [ReworkUtil](#ReworkUtil) : <code>object</code>
  * [.isReworkable(current)](#ReworkUtil.isReworkable) ⇒ <code>boolean</code>
  * [.checkApprover(current, name)](#ReworkUtil.checkApprover) ⇒ <code>boolean</code>
  * [.getCatItem(ritm)](#ReworkUtil.getCatItem) ⇒ <code>string</code>
  * [.getRequestedForName(ritm)](#ReworkUtil.getRequestedForName) ⇒ <code>string</code>

<a name="ReworkUtil.isReworkable"></a>
### ReworkUtil.isReworkable(current) ⇒ <code>boolean</code>
Determines if a catalog item is reworkable

**Kind**: static method of <code>[ReworkUtil](#ReworkUtil)</code>  
**Returns**: <code>boolean</code> - true if the catalog item is reworkable; false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | The current requested item record OR the sys_id |

**Example**  
```js
//From an email notification, to include the rework linkvar ru = new ReworkUtil();ru.isReworkable(current);
```
<a name="ReworkUtil.checkApprover"></a>
### ReworkUtil.checkApprover(current, name) ⇒ <code>boolean</code>
Checks to see if the approver is the same as the "requested for"

**Kind**: static method of <code>[ReworkUtil](#ReworkUtil)</code>  
**Returns**: <code>boolean</code> - false if the approver is the requested for, true otherwise  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | The current requested item record |
| name | <code>string</code> | The name of the requested for |

<a name="ReworkUtil.getCatItem"></a>
### ReworkUtil.getCatItem(ritm) ⇒ <code>string</code>
Gets the catalog item related to the ritm, if we only have a sys_id

**Kind**: static method of <code>[ReworkUtil](#ReworkUtil)</code>  
**Returns**: <code>string</code> - The sys_id of the catalog item  

| Param | Type | Description |
| --- | --- | --- |
| ritm | <code>string</code> | The sys_id of a ritm |

<a name="ReworkUtil.getRequestedForName"></a>
### ReworkUtil.getRequestedForName(ritm) ⇒ <code>string</code>
Gets the requested for variable from the ritm

**Kind**: static method of <code>[ReworkUtil](#ReworkUtil)</code>  
**Returns**: <code>string</code> - The sys_id of the requested for variable  

| Param | Type | Description |
| --- | --- | --- |
| ritm | <code>string</code> | The sys_id of a ritm |

<a name="ScheduleNewHolidaysUtil"></a>
## ScheduleNewHolidaysUtil : <code>object</code>
This contains the method needed to insert new or update holiday records

**Kind**: global namespace  
<a name="SecurityAccessUtil"></a>
## SecurityAccessUtil : <code>object</code>
Handles checks for Security Access Requests

**Kind**: global namespace  

* [SecurityAccessUtil](#SecurityAccessUtil) : <code>object</code>
  * [.isSecurityAccessRequest()](#SecurityAccessUtil+isSecurityAccessRequest) ⇒ <code>boolean</code>
  * [.getSecurityAccessType()](#SecurityAccessUtil+getSecurityAccessType) ⇒ <code>string</code>
  * [.getApproverByPhase(catItem, number)](#SecurityAccessUtil+getApproverByPhase) ⇒ <code>string</code>
  * [.getPeopleSoftNonAppApprovers(ritm)](#SecurityAccessUtil+getPeopleSoftNonAppApprovers) ⇒ <code>GlideRecord</code>
  * [.expirePeopleSoftApprovals(approval)](#SecurityAccessUtil+expirePeopleSoftApprovals)
  * [.getApplicationApprovers(application)](#SecurityAccessUtil+getApplicationApprovers) ⇒ <code>array</code>

<a name="SecurityAccessUtil+isSecurityAccessRequest"></a>
### securityAccessUtil.isSecurityAccessRequest() ⇒ <code>boolean</code>
Checks to see if the ritm is a Security Access Request

**Kind**: instance method of <code>[SecurityAccessUtil](#SecurityAccessUtil)</code>  
**Returns**: <code>boolean</code> - true if it's a security access request; false otherwise  
<a name="SecurityAccessUtil+getSecurityAccessType"></a>
### securityAccessUtil.getSecurityAccessType() ⇒ <code>string</code>
Gets the type of Security Access Request, so we can get the proper variables

**Kind**: instance method of <code>[SecurityAccessUtil](#SecurityAccessUtil)</code>  
**Returns**: <code>string</code> - One of the request access types (new_access, edit_access, delete_access)  
<a name="SecurityAccessUtil+getApproverByPhase"></a>
### securityAccessUtil.getApproverByPhase(catItem, number) ⇒ <code>string</code>
Given a category item and a phase, returns the approver required

**Kind**: instance method of <code>[SecurityAccessUtil](#SecurityAccessUtil)</code>  
**Returns**: <code>string</code> - sys_id of the approver  

| Param | Type | Description |
| --- | --- | --- |
| catItem | <code>string</code> | The sys_id of a cat item |
| number | <code>integer</code> | Which approval to retrieve |

<a name="SecurityAccessUtil+getPeopleSoftNonAppApprovers"></a>
### securityAccessUtil.getPeopleSoftNonAppApprovers(ritm) ⇒ <code>GlideRecord</code>
Finds the approval records that are not the Hiring manager nor the normal application approvers

**Kind**: instance method of <code>[SecurityAccessUtil](#SecurityAccessUtil)</code>  
**Returns**: <code>GlideRecord</code> - a ready-to-be-queried glide record that should contain any approvals that are idle  

| Param | Type | Description |
| --- | --- | --- |
| ritm | <code>string</code> | Optional parameter to determine what requested item needs the approval checked |

<a name="SecurityAccessUtil+expirePeopleSoftApprovals"></a>
### securityAccessUtil.expirePeopleSoftApprovals(approval)
Sets the approval to cancelled if it has sat idle for a certain period of time

**Kind**: instance method of <code>[SecurityAccessUtil](#SecurityAccessUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| approval | <code>GlideRecord</code> | The approval records to update |

<a name="SecurityAccessUtil+getApplicationApprovers"></a>
### securityAccessUtil.getApplicationApprovers(application) ⇒ <code>array</code>
Queries the application approvers table for the sys_ids of the approvers for a given application access request

**Kind**: instance method of <code>[SecurityAccessUtil](#SecurityAccessUtil)</code>  
**Returns**: <code>array</code> - An array containing the sys_ids of all approvers  

| Param | Type | Description |
| --- | --- | --- |
| application | <code>string</code> | The name of an application access request |

<a name="ServiceAccount"></a>
## ServiceAccount : <code>object</code>
Allows for the creation of users that are useful for service accounts, so they can access web services from ServiceNow

**Kind**: global namespace  

* [ServiceAccount](#ServiceAccount) : <code>object</code>
  * [.createAccount(group, product)](#ServiceAccount+createAccount) ⇒ <code>string</code>
  * [._createAccount()](#ServiceAccount+_createAccount) ⇒ <code>string</code>
  * [._sanitizeName(name)](#ServiceAccount+_sanitizeName) ⇒ <code>string</code>
  * [._assignGroupMembership(the)](#ServiceAccount+_assignGroupMembership)
  * [._assignSOAPQueryRole(user)](#ServiceAccount+_assignSOAPQueryRole)
  * [._getGroupInfo(group)](#ServiceAccount+_getGroupInfo) ⇒ <code>string</code>
  * [._getProductInfo(group)](#ServiceAccount+_getProductInfo) ⇒ <code>string</code>
  * [._checkDuplicates(name)](#ServiceAccount+_checkDuplicates) ⇒ <code>number</code>

<a name="ServiceAccount+createAccount"></a>
### serviceAccount.createAccount(group, product) ⇒ <code>string</code>
creates the account - main method

**Kind**: instance method of <code>[ServiceAccount](#ServiceAccount)</code>  
**Returns**: <code>string</code> - The account name of the created account  

| Param | Type | Description |
| --- | --- | --- |
| group | <code>string</code> | The sys_id of a group record |
| product | <code>string</code> | The sys_id of a application_software record |

<a name="ServiceAccount+_createAccount"></a>
### serviceAccount._createAccount() ⇒ <code>string</code>
does the creation of the account once the values are set

**Kind**: instance method of <code>[ServiceAccount](#ServiceAccount)</code>  
**Returns**: <code>string</code> - the user name of the newly created account  
<a name="ServiceAccount+_sanitizeName"></a>
### serviceAccount._sanitizeName(name) ⇒ <code>string</code>
replaces non word and whitespace, makes the string lowercase

**Kind**: instance method of <code>[ServiceAccount](#ServiceAccount)</code>  
**Returns**: <code>string</code> - the name without spaces, non-word characters, and in lowercase  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name to sanitize |

<a name="ServiceAccount+_assignGroupMembership"></a>
### serviceAccount._assignGroupMembership(the)
Assigns the newly created user to the group who requested it

**Kind**: instance method of <code>[ServiceAccount](#ServiceAccount)</code>  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>string</code> | sys_id of a user |

<a name="ServiceAccount+_assignSOAPQueryRole"></a>
### serviceAccount._assignSOAPQueryRole(user)
Assigns the soap query role to the service account so it has read access

**Kind**: instance method of <code>[ServiceAccount](#ServiceAccount)</code>  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | The sys_id of the user to add soap_query to |

<a name="ServiceAccount+_getGroupInfo"></a>
### serviceAccount._getGroupInfo(group) ⇒ <code>string</code>
Gets the name of the group

**Kind**: instance method of <code>[ServiceAccount](#ServiceAccount)</code>  
**Returns**: <code>string</code> - The name of the group  

| Param | Type | Description |
| --- | --- | --- |
| group | <code>string</code> | The sys_id of a group |

<a name="ServiceAccount+_getProductInfo"></a>
### serviceAccount._getProductInfo(group) ⇒ <code>string</code>
Gets the name of the application

**Kind**: instance method of <code>[ServiceAccount](#ServiceAccount)</code>  
**Returns**: <code>string</code> - The name of the application  

| Param | Type | Description |
| --- | --- | --- |
| group | <code>string</code> | The sys_id of an application |

<a name="ServiceAccount+_checkDuplicates"></a>
### serviceAccount._checkDuplicates(name) ⇒ <code>number</code>
Ensures there is not already a service account for the group/application

**Kind**: instance method of <code>[ServiceAccount](#ServiceAccount)</code>  
**Returns**: <code>number</code> - how many accounts are associated with the group/application  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of a user |

<a name="ServiceCatalogUtils"></a>
## ServiceCatalogUtils : <code>object</code>
Utilities for general Service Catalog items: requests, requested items, etc.

**Kind**: global namespace  
**Extends:** <code>AbstractAjaxProcessor</code>  

* [ServiceCatalogUtils](#ServiceCatalogUtils) : <code>object</code>
  * [.getContractorEndDate(sysparm_contractor)](#ServiceCatalogUtils.getContractorEndDate) ⇒ <code>Date</code>
  * [.isContractorEndDate(sysparm_contractor)](#ServiceCatalogUtils.isContractorEndDate) ⇒ <code>boolean</code>
  * [.getContractorCompany(sysparm_contractor)](#ServiceCatalogUtils.getContractorCompany) ⇒ <code>string</code>
  * [.areApprovalsComplete(sysparm_task)](#ServiceCatalogUtils.areApprovalsComplete) ⇒ <code>boolean</code>
  * [.areTasksComplete(sysparm_task)](#ServiceCatalogUtils.areTasksComplete) ⇒ <code>boolean</code>
  * [.canStateBeChanged(sysparm_task, sysparm_req)](#ServiceCatalogUtils.canStateBeChanged) ⇒ <code>boolean</code>
  * [.firewallRuleRef()](#ServiceCatalogUtils.firewallRuleRef) ⇒ <code>string</code>
  * [.updateReferenceQual(sysparm_category, sysparm_app)](#ServiceCatalogUtils.updateReferenceQual) ⇒ <code>string</code>
    * [~app](#ServiceCatalogUtils.updateReferenceQual..app)
  * [.getUserInformationOnRITM()](#ServiceCatalogUtils.getUserInformationOnRITM)
  * [.isAutomated(name)](#ServiceCatalogUtils.isAutomated) ⇒ <code>boolean</code>
  * [.isAdSales(title)](#ServiceCatalogUtils.isAdSales) ⇒ <code>boolean</code>
  * [.getAdSalesType(approvalFor)](#ServiceCatalogUtils.getAdSalesType) ⇒ <code>string</code>
  * [.isFirewall(name)](#ServiceCatalogUtils.isFirewall) ⇒ <code>boolean</code>
  * [.waitForTasksComplete(current)](#ServiceCatalogUtils.waitForTasksComplete) ⇒ <code>boolean</code>

<a name="ServiceCatalogUtils.getContractorEndDate"></a>
### ServiceCatalogUtils.getContractorEndDate(sysparm_contractor) ⇒ <code>Date</code>
Determines the current end date of a contractor

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>Date</code> - the contractor's current expiration date OR the current date if the contractor's date is empty  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_contractor | <code>string</code> | AJAX parameter that contains a contractor's sys_id |

<a name="ServiceCatalogUtils.isContractorEndDate"></a>
### ServiceCatalogUtils.isContractorEndDate(sysparm_contractor) ⇒ <code>boolean</code>
Returns the expiration date of the current user

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>boolean</code> - true if the contractor has an end date; false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_contractor | <code>string</code> | AJAX parameter that contains a contractor's sys_id |

<a name="ServiceCatalogUtils.getContractorCompany"></a>
### ServiceCatalogUtils.getContractorCompany(sysparm_contractor) ⇒ <code>string</code>
Determines the company of the current contractor

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>string</code> - the current company of the contractor  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_contractor | <code>string</code> | AJAX parameter that contains a contractor's sys_id |

<a name="ServiceCatalogUtils.areApprovalsComplete"></a>
### ServiceCatalogUtils.areApprovalsComplete(sysparm_task) ⇒ <code>boolean</code>
Iterate through all approvals related to a task.

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>boolean</code> - If any are still 'requested', return false.  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_task | <code>string</code> | AJAX parameter which is the current task number |

<a name="ServiceCatalogUtils.areTasksComplete"></a>
### ServiceCatalogUtils.areTasksComplete(sysparm_task) ⇒ <code>boolean</code>
Iterate through all approvals related to a task.

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>boolean</code> - If any are not in a 'Complete' state, return false;  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_task | <code>string</code> | AJAX parameter which is the current task number |

<a name="ServiceCatalogUtils.canStateBeChanged"></a>
### ServiceCatalogUtils.canStateBeChanged(sysparm_task, sysparm_req) ⇒ <code>boolean</code>
Checks approvals and tasks for completion.

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>boolean</code> - If complete, returns true.  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_task | <code>string</code> | AJAX parameter of the current task number |
| sysparm_req | <code>string</code> | AJAX parameter of the current request number |

<a name="ServiceCatalogUtils.firewallRuleRef"></a>
### ServiceCatalogUtils.firewallRuleRef() ⇒ <code>string</code>
the reference qualifier for the CI field on the Firewall Rule Request form

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>string</code> - a string containing the appropriate reference qualifier  
**Example**  
```js
//From a Reference Qual field on a dictionary entry or variable entryjavascript:new ServiceCatalogUtils().firewallRuleRef();
```
<a name="ServiceCatalogUtils.updateReferenceQual"></a>
### ServiceCatalogUtils.updateReferenceQual(sysparm_category, sysparm_app) ⇒ <code>string</code>
Used by the Request Addition to the CMDB

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>string</code> - a toStringed array of subcategory values  

| Param | Type | Description |
| --- | --- | --- |
| sysparm_category | <code>string</code> | AJAX parameter The name of a category |
| sysparm_app | <code>string</code> | AJAX parameter The name of an application |

<a name="ServiceCatalogUtils.updateReferenceQual..app"></a>
#### updateReferenceQual~app
Since changing the category value clears the subcategory, we must provide existing subcategory if present

**Kind**: inner property of <code>[updateReferenceQual](#ServiceCatalogUtils.updateReferenceQual)</code>  
<a name="ServiceCatalogUtils.getUserInformationOnRITM"></a>
### ServiceCatalogUtils.getUserInformationOnRITM()
Since the g_form.getReference method is weird on RITMs, use this to get user information

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
<a name="ServiceCatalogUtils.isAutomated"></a>
### ServiceCatalogUtils.isAutomated(name) ⇒ <code>boolean</code>
Determines if the work done for a catalog item request is automated with code or not

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>boolean</code> - true if the work is automated; false if there are tasks to be generated  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of a requested item's catalog item |

<a name="ServiceCatalogUtils.isAdSales"></a>
### ServiceCatalogUtils.isAdSales(title) ⇒ <code>boolean</code>
Checks to see if the ritm is an Ad Sales Request

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>boolean</code> - true if it's an ad sales request  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The title of a ritm's catalog item title |

<a name="ServiceCatalogUtils.getAdSalesType"></a>
### ServiceCatalogUtils.getAdSalesType(approvalFor) ⇒ <code>string</code>
Determines the type of Ad Sales request

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>string</code> - On-Air or Digital  

| Param | Type | Description |
| --- | --- | --- |
| approvalFor | <code>GlideRecord</code> | a requested item record |

<a name="ServiceCatalogUtils.isFirewall"></a>
### ServiceCatalogUtils.isFirewall(name) ⇒ <code>boolean</code>
Checks to see if the ritm is a Firewall Rule Request

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>boolean</code> - true if it's a firewall rule request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of a requested item's catalog item |

<a name="ServiceCatalogUtils.waitForTasksComplete"></a>
### ServiceCatalogUtils.waitForTasksComplete(current) ⇒ <code>boolean</code>
Checks tasks for the current requested item for completion

**Kind**: static method of <code>[ServiceCatalogUtils](#ServiceCatalogUtils)</code>  
**Returns**: <code>boolean</code> - true if all tasks are complete; false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>GlideRecord</code> | A requested item |

**Example**  
```js
//From a Wait For Condition in a workflowanswer = new ServiceCatalogUtils().waitForTasksComplete(current);
```
<a name="SNFormatter"></a>
## SNFormatter : <code>object</code>
Contains functions to format values properly, such as money, strings, titles, etc.

**Kind**: global namespace  
<a name="SNFormatter+formatMoneyValue"></a>
### snFormatter.formatMoneyValue(value) ⇒ <code>string</code>
Formats a string into a money value; does not check to see if it's just numbers

**Kind**: instance method of <code>[SNFormatter](#SNFormatter)</code>  
**Returns**: <code>string</code> - a string formatted with a dollar sign and at least 2 decimal places  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the value to convert to money |

**Example**  
```js
SNFormatter.formatMoneyValue('12.333'); // $12.33
```
**Example**  
```js
SNFormatter.formatMoneyValue('12.3'); // $12.33
```
<a name="SNUnit"></a>
## SNUnit : <code>object</code>
Runs back-end unit tests in ServiceNow

**Kind**: global namespace  

* [SNUnit](#SNUnit) : <code>object</code>
  * [.initialize(setup, teardown)](#SNUnit+initialize)
  * [.setSetup(setup)](#SNUnit+setSetup)
  * [.setTeardown(teardown)](#SNUnit+setTeardown)
  * [.test(name, callback)](#SNUnit+test)

<a name="SNUnit+initialize"></a>
### snUnit.initialize(setup, teardown)
creates the test object

**Kind**: instance method of <code>[SNUnit](#SNUnit)</code>  

| Param | Type | Description |
| --- | --- | --- |
| setup | <code>function</code> | A setup function |
| teardown | <code>function</code> | A teardown function |

<a name="SNUnit+setSetup"></a>
### snUnit.setSetup(setup)
set a setup function

**Kind**: instance method of <code>[SNUnit](#SNUnit)</code>  

| Param | Type | Description |
| --- | --- | --- |
| setup | <code>function</code> | A setup function |

<a name="SNUnit+setTeardown"></a>
### snUnit.setTeardown(teardown)
set a teardown function

**Kind**: instance method of <code>[SNUnit](#SNUnit)</code>  

| Param | Type | Description |
| --- | --- | --- |
| teardown | <code>function</code> | A teardown function |

<a name="SNUnit+test"></a>
### snUnit.test(name, callback)
Runs a test, first calling the setup and finally calling the teardown

**Kind**: instance method of <code>[SNUnit](#SNUnit)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | A description of the test |
| callback | <code>function</code> | A function containing tests |

<a name="SNValidator"></a>
## SNValidator : <code>object</code>
Validates arguments for ServiceNow classes

**Kind**: global namespace  

* [SNValidator](#SNValidator) : <code>object</code>
  * [.checkValidStringArgument(string)](#SNValidator+checkValidStringArgument) ⇒ <code>boolean</code>
  * [.checkValidObjectArgument(object)](#SNValidator+checkValidObjectArgument) ⇒ <code>Boolean</code>
  * [.checkValidNumberArgumentLoose(number)](#SNValidator+checkValidNumberArgumentLoose) ⇒ <code>boolean</code>
  * [.checkValidNumberArgumentStrict(number)](#SNValidator+checkValidNumberArgumentStrict) ⇒ <code>boolean</code>
  * [.checkValidSysIDArgument(sys_id)](#SNValidator+checkValidSysIDArgument) ⇒ <code>Boolean</code>
  * [.checkValidCallbackArgument(callback)](#SNValidator+checkValidCallbackArgument) ⇒ <code>boolean</code>
  * [.logger()](#SNValidator+logger) ⇒ <code>boolean</code>

<a name="SNValidator+checkValidStringArgument"></a>
### snValidator.checkValidStringArgument(string) ⇒ <code>boolean</code>
Validates that an argument is, in fact, a string

**Kind**: instance method of <code>[SNValidator](#SNValidator)</code>  
**Returns**: <code>boolean</code> - true if an object  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | A string to test |

**Example**  
```js
SNValidator.checkValidStringArgument('Words'); //true
```
**Example**  
```js
SNValidator.checkValidStringArgument(1000); //false
```
**Example**  
```js
SNValidator.checkValidStringArgument(['words']); //false
```
<a name="SNValidator+checkValidObjectArgument"></a>
### snValidator.checkValidObjectArgument(object) ⇒ <code>Boolean</code>
Validates that an argument is, in fact, an object

**Kind**: instance method of <code>[SNValidator](#SNValidator)</code>  
**Returns**: <code>Boolean</code> - true if an object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | An object to test |

**Example**  
```js
var obj = {};SNValidator().checkValidObjectArgument(obj); //true
```
**Example**  
```js
var obj = 'Test';SNValidator().checkValidObjectArgument(obj); //false
```
<a name="SNValidator+checkValidNumberArgumentLoose"></a>
### snValidator.checkValidNumberArgumentLoose(number) ⇒ <code>boolean</code>
Validates than an argument is, in fact, a valid number, but uses == instead of ===

**Kind**: instance method of <code>[SNValidator](#SNValidator)</code>  
**Returns**: <code>boolean</code> - true if the value is a number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | A number to test |

**Example**  
```js
SNValidator().checkValidNumberArgumentLoose(1000); //true
```
**Example**  
```js
SNValidator().checkValidNumberArgumentLoose('1000'); //true
```
**Example**  
```js
SNValidator().checkValidNumberArgumentLoose('1000a'); //false
```
<a name="SNValidator+checkValidNumberArgumentStrict"></a>
### snValidator.checkValidNumberArgumentStrict(number) ⇒ <code>boolean</code>
Validates than an argument is, in fact, a valid number, uses ===

**Kind**: instance method of <code>[SNValidator](#SNValidator)</code>  
**Returns**: <code>boolean</code> - true if the value is a number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | A number to test |

**Example**  
```js
SNValidator().checkValidNumberArgumentStrict(1000); //true
```
**Example**  
```js
SNValidator().checkValidNumberArgumentStrict('1000'); //false
```
<a name="SNValidator+checkValidSysIDArgument"></a>
### snValidator.checkValidSysIDArgument(sys_id) ⇒ <code>Boolean</code>
Validates that an argument is, in fact, a sys_id

**Kind**: instance method of <code>[SNValidator](#SNValidator)</code>  
**Returns**: <code>Boolean</code> - true if a sys_id  

| Param | Type | Description |
| --- | --- | --- |
| sys_id | <code>string</code> | A string to test |

**Example**  
```js
SNValidator.checkValidSysIDArgument('153ebc53a4377100764f456eb40d41f1'); //true
```
**Example**  
```js
SNValidator.checkValidSysIDArgument('ZXYWbxjf1243892389'); //false
```
<a name="SNValidator+checkValidCallbackArgument"></a>
### snValidator.checkValidCallbackArgument(callback) ⇒ <code>boolean</code>
Validates that an argument is, in fact, a function to callback

**Kind**: instance method of <code>[SNValidator](#SNValidator)</code>  
**Returns**: <code>boolean</code> - true if a valid function (or object)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | A function to test |

**Example**  
```js
var func = function() { console.log("boom"); };SNValidator.checkValidCallbackArgument(func); //true
```
**Example**  
```js
var func = {};SNValidator.checkValidCallbackArgument(func); //false
```
<a name="SNValidator+logger"></a>
### snValidator.logger() ⇒ <code>boolean</code>
Logger function that does not work in prod (scripps)

**Kind**: instance method of <code>[SNValidator](#SNValidator)</code>  
**Returns**: <code>boolean</code> - true if the instance is not production; false otherwise  
<a name="SNVariableUtil"></a>
## SNVariableUtil : <code>object</code>
Contains functionality that handles service catalog variables or other dictionary items

**Kind**: global namespace  

* [SNVariableUtil](#SNVariableUtil) : <code>object</code>
  * [.dealWithListTable(list, table)](#SNVariableUtil+dealWithListTable) ⇒ <code>string</code>
  * [.getReferenceDisplayVariableName(table)](#SNVariableUtil+getReferenceDisplayVariableName) ⇒ <code>string</code>
  * [.dealWithReference(reference, value)](#SNVariableUtil+dealWithReference) ⇒ <code>string</code>
  * [.isTextField(fieldType)](#SNVariableUtil+isTextField) ⇒ <code>boolean</code>
  * [.getSelectValueBasedOnValue(name, value)](#SNVariableUtil+getSelectValueBasedOnValue) ⇒ <code>string</code>
  * [.isFinancial(A)](#SNVariableUtil+isFinancial) ⇒ <code>boolean</code>

<a name="SNVariableUtil+dealWithListTable"></a>
### snVariableUtil.dealWithListTable(list, table) ⇒ <code>string</code>
Handles list collectors

**Kind**: instance method of <code>[SNVariableUtil](#SNVariableUtil)</code>  
**Returns**: <code>string</code> - a string of actual values  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>string</code> | a list of values/sys_ids |
| table | <code>string</code> | the name of a table |

<a name="SNVariableUtil+getReferenceDisplayVariableName"></a>
### snVariableUtil.getReferenceDisplayVariableName(table) ⇒ <code>string</code>
Finds the dictionary entry for a table that is the display value

**Kind**: instance method of <code>[SNVariableUtil](#SNVariableUtil)</code>  
**Returns**: <code>string</code> - the name of the column (element) which is the display value  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>string</code> | a table name |

<a name="SNVariableUtil+dealWithReference"></a>
### snVariableUtil.dealWithReference(reference, value) ⇒ <code>string</code>
Reference fields need to be retrieved before giving a proper value

**Kind**: instance method of <code>[SNVariableUtil](#SNVariableUtil)</code>  
**Returns**: <code>string</code> - the value we care about in the table (number for tasks, name for others)  

| Param | Type | Description |
| --- | --- | --- |
| reference | <code>string</code> | the name of a table which is being referenced |
| value | <code>string</code> | the sys_id value of what is being referenced |

<a name="SNVariableUtil+isTextField"></a>
### snVariableUtil.isTextField(fieldType) ⇒ <code>boolean</code>
Determines if the field type is a text type (Single, Wide or Multiline)

**Kind**: instance method of <code>[SNVariableUtil](#SNVariableUtil)</code>  
**Returns**: <code>boolean</code> - true if it's a text field; otherwise, false  

| Param | Type | Description |
| --- | --- | --- |
| fieldType | <code>number</code> | a number which represents a field type in the system |

<a name="SNVariableUtil+getSelectValueBasedOnValue"></a>
### snVariableUtil.getSelectValueBasedOnValue(name, value) ⇒ <code>string</code>
Finds the value that appears on the form for a Select Box

**Kind**: instance method of <code>[SNVariableUtil](#SNVariableUtil)</code>  
**Returns**: <code>string</code> - the text value of the question choice  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the question/select box variable |
| value | <code>string</code> | the value of the question choice |

<a name="SNVariableUtil+isFinancial"></a>
### snVariableUtil.isFinancial(A) ⇒ <code>boolean</code>
Checks to see if the variable is a financial email, so we can format it properly

**Kind**: instance method of <code>[SNVariableUtil](#SNVariableUtil)</code>  
**Returns**: <code>boolean</code> - true if the variable is a financial variable; false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| A | <code>variable</code> | catalog variable |

<a name="UserAndGroupUtils"></a>
## UserAndGroupUtils : <code>object</code>
Utility functions for users and groups

**Kind**: global namespace  

* [UserAndGroupUtils](#UserAndGroupUtils) : <code>object</code>
  * [.exectueInactiveCleanup()](#UserAndGroupUtils+exectueInactiveCleanup)
  * [.toggleBusinessRules(status)](#UserAndGroupUtils+toggleBusinessRules)
  * [.deleteInactiveGroupMembers()](#UserAndGroupUtils+deleteInactiveGroupMembers)
  * [.deleteInactiveRoleAssignments()](#UserAndGroupUtils+deleteInactiveRoleAssignments)
  * [.isUserInGroup(user, group)](#UserAndGroupUtils+isUserInGroup) ⇒ <code>boolean</code>

<a name="UserAndGroupUtils+exectueInactiveCleanup"></a>
### userAndGroupUtils.exectueInactiveCleanup()
Main Method for cleaning up users and groups (Platform 3.1)

**Kind**: instance method of <code>[UserAndGroupUtils](#UserAndGroupUtils)</code>  
<a name="UserAndGroupUtils+toggleBusinessRules"></a>
### userAndGroupUtils.toggleBusinessRules(status)
Changes the status on business rules for the sys_user_grmember table

**Kind**: instance method of <code>[UserAndGroupUtils](#UserAndGroupUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>boolean</code> | true or false value to apply to the active field on the record |

<a name="UserAndGroupUtils+deleteInactiveGroupMembers"></a>
### userAndGroupUtils.deleteInactiveGroupMembers()
Deletes any group membership record where the user is no longer active

**Kind**: instance method of <code>[UserAndGroupUtils](#UserAndGroupUtils)</code>  
<a name="UserAndGroupUtils+deleteInactiveRoleAssignments"></a>
### userAndGroupUtils.deleteInactiveRoleAssignments()
Deletes any role assignment record where the user is no longer active

**Kind**: instance method of <code>[UserAndGroupUtils](#UserAndGroupUtils)</code>  
<a name="UserAndGroupUtils+isUserInGroup"></a>
### userAndGroupUtils.isUserInGroup(user, group) ⇒ <code>boolean</code>
Given a user's sys_d and a group name, determines if a user is in a group

**Kind**: instance method of <code>[UserAndGroupUtils](#UserAndGroupUtils)</code>  
**Returns**: <code>boolean</code> - true if the user is a member of the group; false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | a sys_id of a user |
| group | <code>string</code> | a name of a group |

<a name="VariableClearer"></a>
## VariableClearer : <code>object</code>
There are times when variables on a ritm need to be cleared due to users changing options without clearing them.  Using g_form.setValue('name', '') will not work on the client side because the form needs the sys_id (with ni.VE prepended) to identify the element on the form

**Kind**: global namespace  
**Extends:** <code>AbstractAjaxProcessor</code>  

* [VariableClearer](#VariableClearer) : <code>object</code>
  * [.findNonApplicableVariables(variableMap, recordSysId)](#VariableClearer.findNonApplicableVariables)
  * [.clearNonApplicableVariables(clearList, recordSysId)](#VariableClearer.clearNonApplicableVariables) ⇒ <code>string</code>
  * [.handlePeopleSoft(record)](#VariableClearer.handlePeopleSoft)

<a name="VariableClearer.findNonApplicableVariables"></a>
### VariableClearer.findNonApplicableVariables(variableMap, recordSysId)
Given a map of variables that are related and a ritm, finds the sys_id of the variables on the form so they can be cleared properly

**Kind**: static method of <code>[VariableClearer](#VariableClearer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| variableMap | <code>object</code> | An object containing a variable name and it'd dependent values |
| recordSysId | <code>string</code> | The sys_id of a requested item |

<a name="VariableClearer.clearNonApplicableVariables"></a>
### VariableClearer.clearNonApplicableVariables(clearList, recordSysId) ⇒ <code>string</code>
Given a list of variable names and requested item, finds the sys_id of those variables so they can be cleared properly

**Kind**: static method of <code>[VariableClearer](#VariableClearer)</code>  
**Returns**: <code>string</code> - A string of variable sys_ids to clear  

| Param | Type | Description |
| --- | --- | --- |
| clearList | <code>array</code> | An array of variable names |
| recordSysId | <code>string</code> | The sys_id of a requested item |

<a name="VariableClearer.handlePeopleSoft"></a>
### VariableClearer.handlePeopleSoft(record)
Ensures that variables that should be empty are before saving the record

**Kind**: static method of <code>[VariableClearer](#VariableClearer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| record | <code>GlideRecord</code> | The current requested item |

<a name="CatalogDateValidator"></a>
## CatalogDateValidator : <code>object</code>
Validates dates on a catalog item, because the standard validator doesn't work there

**Kind**: global namespace  

* [CatalogDateValidator](#CatalogDateValidator) : <code>object</code>
  * [.validateDateTime(date)](#CatalogDateValidator+validateDateTime) ⇒ <code>boolean</code>
  * [.validateDate(date)](#CatalogDateValidator+validateDate) ⇒ <code>boolean</code>

<a name="CatalogDateValidator+validateDateTime"></a>
### catalogDateValidator.validateDateTime(date) ⇒ <code>boolean</code>
validates a date/time object

**Kind**: instance method of <code>[CatalogDateValidator](#CatalogDateValidator)</code>  
**Returns**: <code>boolean</code> - true if valid  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | a date/time string |

<a name="CatalogDateValidator+validateDate"></a>
### catalogDateValidator.validateDate(date) ⇒ <code>boolean</code>
validates a date object

**Kind**: instance method of <code>[CatalogDateValidator](#CatalogDateValidator)</code>  
**Returns**: <code>boolean</code> - true if valid  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | a date string |

<a name="ChangeLCSController"></a>
## ChangeLCSController : <code>object</code>
Controls how the Life Cycle Status of Change Request appears

**Kind**: global namespace  

* [ChangeLCSController](#ChangeLCSController) : <code>object</code>
  * [.clearAll()](#ChangeLCSController+clearAll)
  * [.inDraft()](#ChangeLCSController+inDraft)
  * [.inDraftEmergency()](#ChangeLCSController+inDraftEmergency)
  * [.inPIP()](#ChangeLCSController+inPIP)
  * [.inSFA()](#ChangeLCSController+inSFA)
  * [.inScheduled()](#ChangeLCSController+inScheduled)
  * [.inScheduledEmergency()](#ChangeLCSController+inScheduledEmergency)
  * [.inDeployed()](#ChangeLCSController+inDeployed)
  * [.isDeployed()](#ChangeLCSController+isDeployed)

<a name="ChangeLCSController+clearAll"></a>
### changeLCSController.clearAll()
Clears all options on the life cycle status field

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeLCSController+inDraft"></a>
### changeLCSController.inDraft()
Sets the life cycle status field for Draft

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeLCSController+inDraftEmergency"></a>
### changeLCSController.inDraftEmergency()
Sets the life cycle status field for Draft if it's an Emergency

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeLCSController+inPIP"></a>
### changeLCSController.inPIP()
Sets the life cycle status field for Planning in Progress

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeLCSController+inSFA"></a>
### changeLCSController.inSFA()
Sets the life cycle status field for Scheduled for Approval

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeLCSController+inScheduled"></a>
### changeLCSController.inScheduled()
Sets the life cycle status field for Scheduled

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeLCSController+inScheduledEmergency"></a>
### changeLCSController.inScheduledEmergency()
Sets the life cycle status field for Scheduled Emergency

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeLCSController+inDeployed"></a>
### changeLCSController.inDeployed()
Sets the life cycle status field for Deployed

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeLCSController+isDeployed"></a>
### changeLCSController.isDeployed()
Sets the life cycle status field for after Deployed

**Kind**: instance method of <code>[ChangeLCSController](#ChangeLCSController)</code>  
<a name="ChangeRequest"></a>
## ChangeRequest : <code>object</code>
Handles the field states for Change Request.  Used in the UI Policies to prevent overlap when the policies are at the same order level.

**Kind**: global namespace  

* [ChangeRequest](#ChangeRequest) : <code>object</code>
  * [.setFieldsReadOnly(fields, trigger)](#ChangeRequest+setFieldsReadOnly)
  * [.setFieldsMandatory(fields, trigger)](#ChangeRequest+setFieldsMandatory)
  * [.setFieldsDisplay(fields, trigger)](#ChangeRequest+setFieldsDisplay)
  * [.typeIsNone()](#ChangeRequest+typeIsNone)
  * [.isInfrastructure(type)](#ChangeRequest+isInfrastructure) ⇒ <code>boolean</code>
  * [.isServerBuild(type)](#ChangeRequest+isServerBuild) ⇒ <code>boolean</code>
  * [.isDeployed(type)](#ChangeRequest+isDeployed) ⇒ <code>boolean</code>
  * [.isDeployedSuccessfulish(type)](#ChangeRequest+isDeployedSuccessfulish) ⇒ <code>boolean</code>
  * [.handleSOXFramework()](#ChangeRequest+handleSOXFramework)
  * [.isCancelled()](#ChangeRequest+isCancelled)
  * [.isClosed()](#ChangeRequest+isClosed)
  * [.onHoldHandler()](#ChangeRequest+onHoldHandler)
  * [.draftNonEmergency()](#ChangeRequest+draftNonEmergency)
  * [.draftEmergency()](#ChangeRequest+draftEmergency)
  * [.planningInProgress()](#ChangeRequest+planningInProgress)
  * [.scheduledForApproval()](#ChangeRequest+scheduledForApproval)
  * [.scheduledInfrastructure()](#ChangeRequest+scheduledInfrastructure)
  * [.scheduledNonInfrastructure()](#ChangeRequest+scheduledNonInfrastructure)
  * [.deployed()](#ChangeRequest+deployed)
  * [.cancelled()](#ChangeRequest+cancelled)
  * [.closed()](#ChangeRequest+closed)

<a name="ChangeRequest+setFieldsReadOnly"></a>
### changeRequest.setFieldsReadOnly(fields, trigger)
Changes the read only status of a list of fields

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>object</code> | A list of fields |
| trigger | <code>boolean</code> | The state to set the fields read only status |

<a name="ChangeRequest+setFieldsMandatory"></a>
### changeRequest.setFieldsMandatory(fields, trigger)
Changes the mandatory status of a list of fields

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>object</code> | A list of fields |
| trigger | <code>boolean</code> | The state to set the fields mandatory status |

<a name="ChangeRequest+setFieldsDisplay"></a>
### changeRequest.setFieldsDisplay(fields, trigger)
Changes the display status of a list of fields

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>object</code> | A list of fields |
| trigger | <code>boolean</code> | The state to set the fields read only status |

<a name="ChangeRequest+typeIsNone"></a>
### changeRequest.typeIsNone()
Sets fields to read only if the type is none

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+isInfrastructure"></a>
### changeRequest.isInfrastructure(type) ⇒ <code>boolean</code>
Determines if a change request is infrastructure based on type

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
**Returns**: <code>boolean</code> - true if it's infrastructure  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | A change request type |

<a name="ChangeRequest+isServerBuild"></a>
### changeRequest.isServerBuild(type) ⇒ <code>boolean</code>
Determines if a change request is a server build type

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
**Returns**: <code>boolean</code> - true if it's a server build  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | A change request type |

<a name="ChangeRequest+isDeployed"></a>
### changeRequest.isDeployed(type) ⇒ <code>boolean</code>
Determines if a change request is deployed

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
**Returns**: <code>boolean</code> - true if it's deployed  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | A change request life cycle status |

<a name="ChangeRequest+isDeployedSuccessfulish"></a>
### changeRequest.isDeployedSuccessfulish(type) ⇒ <code>boolean</code>
Determines if a change request is deployed successfully (or with issues)

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
**Returns**: <code>boolean</code> - true if it's deployed successfully (or with issues)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | A change request life cycle status |

<a name="ChangeRequest+handleSOXFramework"></a>
### changeRequest.handleSOXFramework()
Sets fields for SOX Framework

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+isCancelled"></a>
### changeRequest.isCancelled()
handles if the change request is cancelled

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+isClosed"></a>
### changeRequest.isClosed()
handles if the change request is closed

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+onHoldHandler"></a>
### changeRequest.onHoldHandler()
handles the visibility of the on hold checkbox

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+draftNonEmergency"></a>
### changeRequest.draftNonEmergency()
Handles if the change request is draft

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+draftEmergency"></a>
### changeRequest.draftEmergency()
Handles if the change request is draft (emergency)

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+planningInProgress"></a>
### changeRequest.planningInProgress()
Handles if the change request is planning in progress

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+scheduledForApproval"></a>
### changeRequest.scheduledForApproval()
Handles if the change request is scheduled for approval

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+scheduledInfrastructure"></a>
### changeRequest.scheduledInfrastructure()
Handles if the change request is scheduled and infrastructure

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+scheduledNonInfrastructure"></a>
### changeRequest.scheduledNonInfrastructure()
Handles if the change request is scheduled and non-infrastructure

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+deployed"></a>
### changeRequest.deployed()
Handles if the change request is deployed

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+cancelled"></a>
### changeRequest.cancelled()
Handles if the change request is cancelled

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChangeRequest+closed"></a>
### changeRequest.closed()
Handles if the change request is closed

**Kind**: instance method of <code>[ChangeRequest](#ChangeRequest)</code>  
<a name="ChatAlertsClient"></a>
## ChatAlertsClient : <code>object</code>
Displays chat messages on the client side

**Kind**: global namespace  

* [ChatAlertsClient](#ChatAlertsClient) : <code>object</code>
  * [.initialize()](#ChatAlertsClient+initialize)
  * [.start()](#ChatAlertsClient+start)
  * [.response(response)](#ChatAlertsClient+response)
  * [.acknowledgeMessage(sys_id)](#ChatAlertsClient+acknowledgeMessage)
  * [.createContainer()](#ChatAlertsClient+createContainer)
  * [.removeMessage(sys_id)](#ChatAlertsClient+removeMessage)
  * [.createMessage(sys_id, from_name, body, dt)](#ChatAlertsClient+createMessage)
  * [.animate(element, attribute, target, step, dir, callback)](#ChatAlertsClient+animate)

<a name="ChatAlertsClient+initialize"></a>
### chatAlertsClient.initialize()
initializes the chat message container to null

**Kind**: instance method of <code>[ChatAlertsClient](#ChatAlertsClient)</code>  
<a name="ChatAlertsClient+start"></a>
### chatAlertsClient.start()
Main method - checks to see if the user is in the support desk, and if so, runs the code to get messages

**Kind**: instance method of <code>[ChatAlertsClient](#ChatAlertsClient)</code>  
<a name="ChatAlertsClient+response"></a>
### chatAlertsClient.response(response)
Response handler for server response to getMyMessages

**Kind**: instance method of <code>[ChatAlertsClient](#ChatAlertsClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>HttpResponse</code> | the response from the server |

<a name="ChatAlertsClient+acknowledgeMessage"></a>
### chatAlertsClient.acknowledgeMessage(sys_id)
Helper function to perform the AJAX call to acknowledge the message on the server

**Kind**: instance method of <code>[ChatAlertsClient](#ChatAlertsClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| sys_id | <code>string</code> | A sys_id of a chat message record to acknowledge on the server |

<a name="ChatAlertsClient+createContainer"></a>
### chatAlertsClient.createContainer()
Helper function to create the chat container, this is our 'sidebar'

**Kind**: instance method of <code>[ChatAlertsClient](#ChatAlertsClient)</code>  
<a name="ChatAlertsClient+removeMessage"></a>
### chatAlertsClient.removeMessage(sys_id)
Helper function to remove a chat message based on sys_id

**Kind**: instance method of <code>[ChatAlertsClient](#ChatAlertsClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| sys_id | <code>string</code> | The sys_id of a chat message to remove from the page |

<a name="ChatAlertsClient+createMessage"></a>
### chatAlertsClient.createMessage(sys_id, from_name, body, dt)
Helper function to create a message within the container

**Kind**: instance method of <code>[ChatAlertsClient](#ChatAlertsClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| sys_id | <code>string</code> | The sys_id of the chat message |
| from_name | <code>string</code> | Who the message is from |
| body | <code>string</code> | The body of the message |
| dt | <code>string</code> | The date and time of the message |

<a name="ChatAlertsClient+animate"></a>
### chatAlertsClient.animate(element, attribute, target, step, dir, callback)
Helper function to animate the display of a div

**Kind**: instance method of <code>[ChatAlertsClient](#ChatAlertsClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HtmlElement</code> | The element to animate |
| attribute | <code>string</code> | The attribute to affect |
| target | <code>integer</code> |  |
| step | <code>integer</code> |  |
| dir | <code>boolean</code> |  |
| callback | <code>function</code> | A callback function |

<a name="IncidentMessage"></a>
## IncidentMessage : <code>object</code>
Controls that the incident message is shown on the list view, since we took the functionality away from the gs.addErrorMessage() code in the business rule.
  Instead, now the client renders the message based on g_user.getClientData and gs.putClientData

**Kind**: global namespace  
<a name="MedeaInternational"></a>
## MedeaInternational : <code>object</code>
Contains functions for the Medea International Catalog Item and its Variable Sets/Variables

**Kind**: global namespace  
**Extends:** <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  

* [MedeaInternational](#MedeaInternational) : <code>object</code>
  * [.setMandatories(accessType)](#MedeaInternational+setMandatories)
  * [.toggleAllLabels(on)](#MedeaInternational+toggleAllLabels)
  * [.toggleApplicationLabel(on)](#MedeaInternational+toggleApplicationLabel)
  * [.toggleUserServicesLabel(on)](#MedeaInternational+toggleUserServicesLabel)
  * [.toggleContractSecurityLabel(on)](#MedeaInternational+toggleContractSecurityLabel)
  * [.toggleCountryLabel(on)](#MedeaInternational+toggleCountryLabel)
  * [.toggleFolderLabel(on)](#MedeaInternational+toggleFolderLabel)
  * [.folderAccessControl()](#MedeaInternational+folderAccessControl)
  * [.folderSubmitCheck()](#MedeaInternational+folderSubmitCheck) ⇒ <code>boolean</code>

<a name="MedeaInternational+setMandatories"></a>
### medeaInternational.setMandatories(accessType)
Sets a list of fields to be mandatory (or not)

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  

| Param | Type | Description |
| --- | --- | --- |
| accessType | <code>string</code> | The type of access |

**Example**  
```js
new MedeaInternational().setMandatories('edit_access', true); //sets all "edit access" fields to mandatory
```
**Example**  
```js
new MedeaInternational().setMandatories('edit_access', false); //sets all "edit access" fields to not mandatory
```
<a name="MedeaInternational+toggleAllLabels"></a>
### medeaInternational.toggleAllLabels(on)
Toggles all labels on or off

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether to turn the labels on or off |

<a name="MedeaInternational+toggleApplicationLabel"></a>
### medeaInternational.toggleApplicationLabel(on)
Toggles the application label on or off

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether to turn the label on or off |

<a name="MedeaInternational+toggleUserServicesLabel"></a>
### medeaInternational.toggleUserServicesLabel(on)
Toggles the user services label on or off

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether to turn the label on or off |

<a name="MedeaInternational+toggleContractSecurityLabel"></a>
### medeaInternational.toggleContractSecurityLabel(on)
Toggles the contract security label on or off

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether to turn the label on or off |

<a name="MedeaInternational+toggleCountryLabel"></a>
### medeaInternational.toggleCountryLabel(on)
Toggles the country label on or off

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether to turn the label on or off |

<a name="MedeaInternational+toggleFolderLabel"></a>
### medeaInternational.toggleFolderLabel(on)
Toggles the folder label on or off

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether to turn the label on or off |

<a name="MedeaInternational+folderAccessControl"></a>
### medeaInternational.folderAccessControl()
Sets the mandatory state of the folder access control

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  
<a name="MedeaInternational+folderSubmitCheck"></a>
### medeaInternational.folderSubmitCheck() ⇒ <code>boolean</code>
Checks that Add/Remove folders does not contain NONE and other values

**Kind**: instance method of <code>[MedeaInternational](#MedeaInternational)</code>  
**Returns**: <code>boolean</code> - false if the folder containers contain invalid data  
<a name="MediaPulse"></a>
## MediaPulse : <code>object</code>
Contains functionality for the MediaPulse form

**Kind**: global namespace  
**Extends:** <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  

* [MediaPulse](#MediaPulse) : <code>object</code>
  * [.toggleDivisionLabel(on)](#MediaPulse+toggleDivisionLabel)
  * [.toggleGroupLabel(on)](#MediaPulse+toggleGroupLabel)
  * [.setMandatories(accessType)](#MediaPulse+setMandatories)

<a name="MediaPulse+toggleDivisionLabel"></a>
### mediaPulse.toggleDivisionLabel(on)
toggles the division label on or off

**Kind**: instance method of <code>[MediaPulse](#MediaPulse)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether or not to show the label |

<a name="MediaPulse+toggleGroupLabel"></a>
### mediaPulse.toggleGroupLabel(on)
toggles the group label on or off

**Kind**: instance method of <code>[MediaPulse](#MediaPulse)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether or not to show the label |

<a name="MediaPulse+setMandatories"></a>
### mediaPulse.setMandatories(accessType)
Sets a list of fields to be mandatory (or not)

**Kind**: instance method of <code>[MediaPulse](#MediaPulse)</code>  

| Param | Type | Description |
| --- | --- | --- |
| accessType | <code>string</code> | The type of access |

**Example**  
```js
new MediaPulse().setMandatories('edit_access', true); //sets all "edit access" fields to mandatory
```
**Example**  
```js
new MediaPulse().setMandatories('edit_access', false); //sets all "edit access" fields to not mandatory
```
<a name="PeopleSoft"></a>
## PeopleSoft : <code>object</code>
Contains utility functions for PeopleSoft Access Request

**Kind**: global namespace  

* [PeopleSoft](#PeopleSoft) : <code>object</code>
  * [.showPCList()](#PeopleSoft+showPCList) ⇒ <code>boolean</code>
  * [.showAMList()](#PeopleSoft+showAMList) ⇒ <code>boolean</code>
  * [.showGrantList()](#PeopleSoft+showGrantList) ⇒ <code>boolean</code>
  * [.setCollectorFilter(collectorName, filterString)](#PeopleSoft+setCollectorFilter)

<a name="PeopleSoft+showPCList"></a>
### peopleSoft.showPCList() ⇒ <code>boolean</code>
Determines if the PC list should be shown

**Kind**: instance method of <code>[PeopleSoft](#PeopleSoft)</code>  
**Returns**: <code>boolean</code> - true if the PC list should be shown  
<a name="PeopleSoft+showAMList"></a>
### peopleSoft.showAMList() ⇒ <code>boolean</code>
Determines if the AM list should be shown

**Kind**: instance method of <code>[PeopleSoft](#PeopleSoft)</code>  
**Returns**: <code>boolean</code> - true if the AM list should be shown  
<a name="PeopleSoft+showGrantList"></a>
### peopleSoft.showGrantList() ⇒ <code>boolean</code>
Determines if the Grant Access list should be shown

**Kind**: instance method of <code>[PeopleSoft](#PeopleSoft)</code>  
**Returns**: <code>boolean</code> - true if the Grant Access list should be shown  
<a name="PeopleSoft+setCollectorFilter"></a>
### peopleSoft.setCollectorFilter(collectorName, filterString)
Changes the filter of the list collector dynamically

**Kind**: instance method of <code>[PeopleSoft](#PeopleSoft)</code>  

| Param | Type | Description |
| --- | --- | --- |
| collectorName | <code>string</code> | the name of a list collector |
| filterString | <code>string</code> | the filter query to run on the list collector |

<a name="PreApprovalUtil"></a>
## PreApprovalUtil : <code>object</code>
Used to filter the categories and sub categories for Change Pre-Approvals

**Kind**: global namespace  

* [PreApprovalUtil](#PreApprovalUtil) : <code>object</code>
  * _instance_
    * [.categoryChange(category, a)](#PreApprovalUtil+categoryChange)
  * _inner_
    * [~FilterSubCategories](#PreApprovalUtil..FilterSubCategories) : <code>function</code>

<a name="PreApprovalUtil+categoryChange"></a>
### preApprovalUtil.categoryChange(category, a)
handles the subcategory list on a category change

**Kind**: instance method of <code>[PreApprovalUtil](#PreApprovalUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| category | <code>string</code> | The name of a category |
| a | <code>[FilterSubCategories](#PreApprovalUtil..FilterSubCategories)</code> | callback |

<a name="PreApprovalUtil..FilterSubCategories"></a>
### PreApprovalUtil~FilterSubCategories : <code>function</code>
filters the subcategories properly (ie: shows the ones it should, hides the rest)

**Kind**: inner typedef of <code>[PreApprovalUtil](#PreApprovalUtil)</code>  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Response</code> | The response from the server |

<a name="QueryString"></a>
## QueryString : <code>object</code>
creates an object that contains parameters passed in from the URL

**Kind**: global namespace  
<a name="QueryString+getObject"></a>
### queryString.getObject() ⇒ <code>object</code>
creates an object containing url parameters

**Kind**: instance method of <code>[QueryString](#QueryString)</code>  
**Returns**: <code>object</code> - an object containing url parameters  
**Example**  
```js
var qs = new QueryString();qs.getObject().sysparm_id; // gets a parameter called "sysparm_id"
```
<a name="SecurityAccessRequest"></a>
## SecurityAccessRequest : <code>object</code>
Contains utilities for Security Access Request catalog items

**Kind**: global namespace  

* [SecurityAccessRequest](#SecurityAccessRequest) : <code>object</code>
  * _instance_
    * [.hider(element)](#SecurityAccessRequest+hider)
    * [.shower(element)](#SecurityAccessRequest+shower)
    * [.toggleApplicationLabel(on)](#SecurityAccessRequest+toggleApplicationLabel)
    * [.getFormsArray()](#SecurityAccessRequest+getFormsArray) ⇒ <code>array</code>
    * [.atLeastOneSelectedOnGuide()](#SecurityAccessRequest+atLeastOneSelectedOnGuide) ⇒ <code>boolean</code>
    * [.validateTwoListCollectorsWithName(listCollectorName, listCollectorName2, listName)](#SecurityAccessRequest+validateTwoListCollectorsWithName) ⇒ <code>boolean</code>
    * [.hasAnythingChanged()](#SecurityAccessRequest+hasAnythingChanged) ⇒ <code>boolean</code>
  * _static_
    * [.processFormsArray](#SecurityAccessRequest.processFormsArray)

<a name="SecurityAccessRequest+hider"></a>
### securityAccessRequest.hider(element)
hides an element in the DOM

**Kind**: instance method of <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | an html element |

<a name="SecurityAccessRequest+shower"></a>
### securityAccessRequest.shower(element)
shows an element in the DOM

**Kind**: instance method of <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | an html element |

<a name="SecurityAccessRequest+toggleApplicationLabel"></a>
### securityAccessRequest.toggleApplicationLabel(on)
Hides or shows the application label

**Kind**: instance method of <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>boolean</code> | Whether or not to show the label |

<a name="SecurityAccessRequest+getFormsArray"></a>
### securityAccessRequest.getFormsArray() ⇒ <code>array</code>
gets all Access Request Forms

**Kind**: instance method of <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  
**Returns**: <code>array</code> - a list of security access request forms  
<a name="SecurityAccessRequest+atLeastOneSelectedOnGuide"></a>
### securityAccessRequest.atLeastOneSelectedOnGuide() ⇒ <code>boolean</code>
Ensures at least one check box is selected for the order guide

**Kind**: instance method of <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  
**Returns**: <code>boolean</code> - true if one or more application is selected  
<a name="SecurityAccessRequest+validateTwoListCollectorsWithName"></a>
### securityAccessRequest.validateTwoListCollectorsWithName(listCollectorName, listCollectorName2, listName) ⇒ <code>boolean</code>
Validates that two list collectors do not contain similar values

**Kind**: instance method of <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  
**Returns**: <code>boolean</code> - true if the lists do not contain similar values  

| Param | Type | Description |
| --- | --- | --- |
| listCollectorName | <code>string</code> | the name of a list collector variable |
| listCollectorName2 | <code>string</code> | the name of a list collector variable |
| listName | <code>string</code> | the name of the list |

<a name="SecurityAccessRequest+hasAnythingChanged"></a>
### securityAccessRequest.hasAnythingChanged() ⇒ <code>boolean</code>
Determines if any fields on the form have changed

**Kind**: instance method of <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  
**Returns**: <code>boolean</code> - true if any form fields have changed; false otherwise  
**Example**  
```js
var editAccess = g_form.getValue('request_types') == 'edit_access', mi = new MedeaInternational();if (newValue == '' && editAccess && !mi.hasAnythingChanged()) {	mi.setMandatories('edit_access', true);}
```
<a name="SecurityAccessRequest.processFormsArray"></a>
### SecurityAccessRequest.processFormsArray
Handles the data which comes back from the server

**Kind**: static typedef of <code>[SecurityAccessRequest](#SecurityAccessRequest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| catalogItems | <code>response</code> | A glide record |

<a name="ServiceCatalog"></a>
## ServiceCatalog : <code>object</code>
Class for handling Service Catalog functionality

**Kind**: global namespace  

* [ServiceCatalog](#ServiceCatalog) : <code>object</code>
  * [.validateDateField(a)](#ServiceCatalog+validateDateField) ⇒ <code>boolean</code>
  * [.validateOnboardingStartDate(start_date)](#ServiceCatalog+validateOnboardingStartDate)
  * [.validateOnboardingEndDate()](#ServiceCatalog+validateOnboardingEndDate) ⇒ <code>boolean</code>
  * [.validateContractorEndDate()](#ServiceCatalog+validateContractorEndDate) ⇒ <code>boolean</code>
  * [.validateNewVendorDate()](#ServiceCatalog+validateNewVendorDate) ⇒ <code>boolean</code>
  * [.validateExistingVendorDate()](#ServiceCatalog+validateExistingVendorDate) ⇒ <code>boolean</code>
  * [.hideServiceAndApplicationFields()](#ServiceCatalog+hideServiceAndApplicationFields)
  * [.serviceFields(onOff, ritm)](#ServiceCatalog+serviceFields)
  * [.applicationFields(onOff, ritm)](#ServiceCatalog+applicationFields)
  * [.cmdbFormNameFields()](#ServiceCatalog+cmdbFormNameFields)
  * [.calculateDigitalInvoice()](#ServiceCatalog+calculateDigitalInvoice)
  * [.nothingChangedDigital()](#ServiceCatalog+nothingChangedDigital) ⇒ <code>boolean</code>

<a name="ServiceCatalog+validateDateField"></a>
### serviceCatalog.validateDateField(a) ⇒ <code>boolean</code>
validates a date field format

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
**Returns**: <code>boolean</code> - true if it's a valid date  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | date string |

<a name="ServiceCatalog+validateOnboardingStartDate"></a>
### serviceCatalog.validateOnboardingStartDate(start_date)
ensures a start date is at least ten days away

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  

| Param | Type | Description |
| --- | --- | --- |
| start_date | <code>string</code> | a date string |

<a name="ServiceCatalog+validateOnboardingEndDate"></a>
### serviceCatalog.validateOnboardingEndDate() ⇒ <code>boolean</code>
Ensures an end date is not greater than six months away

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
**Returns**: <code>boolean</code> - true if the date is valid  
<a name="ServiceCatalog+validateContractorEndDate"></a>
### serviceCatalog.validateContractorEndDate() ⇒ <code>boolean</code>
Ensures an end date is not greater than six months away

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
**Returns**: <code>boolean</code> - true if the date is valid  
<a name="ServiceCatalog+validateNewVendorDate"></a>
### serviceCatalog.validateNewVendorDate() ⇒ <code>boolean</code>
Ensures an end date is not greater than six months away

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
**Returns**: <code>boolean</code> - true if the date is valid  
<a name="ServiceCatalog+validateExistingVendorDate"></a>
### serviceCatalog.validateExistingVendorDate() ⇒ <code>boolean</code>
Ensures an end date is not greater than six months away

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
**Returns**: <code>boolean</code> - true if the date is valid  
<a name="ServiceCatalog+hideServiceAndApplicationFields"></a>
### serviceCatalog.hideServiceAndApplicationFields()
Hides service and application fields for a CMDB request

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
<a name="ServiceCatalog+serviceFields"></a>
### serviceCatalog.serviceFields(onOff, ritm)
handles the visibility of service fields on the cmdb request

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  

| Param | Type | Description |
| --- | --- | --- |
| onOff | <code>boolean</code> | whether or not to show the variables |
| ritm | <code>boolean</code> | whether or not the code is executing on the sc_req_item form |

<a name="ServiceCatalog+applicationFields"></a>
### serviceCatalog.applicationFields(onOff, ritm)
handles the visibility of application fields on the cmdb request

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  

| Param | Type | Description |
| --- | --- | --- |
| onOff | <code>boolean</code> | whether or not to show the variables |
| ritm | <code>boolean</code> | whether or not the code is executing on the sc_req_item form |

<a name="ServiceCatalog+cmdbFormNameFields"></a>
### serviceCatalog.cmdbFormNameFields()
sets the name fields to not mandatory for the cmdb request

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
<a name="ServiceCatalog+calculateDigitalInvoice"></a>
### serviceCatalog.calculateDigitalInvoice()
calculates the digitial invoice section of an ad sales request

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
<a name="ServiceCatalog+nothingChangedDigital"></a>
### serviceCatalog.nothingChangedDigital() ⇒ <code>boolean</code>
Determines if any of the values on the digital invoice have changed

**Kind**: instance method of <code>[ServiceCatalog](#ServiceCatalog)</code>  
**Returns**: <code>boolean</code> - true if the user has actually changed a value on the form  
<a name="TaskUtils"></a>
## TaskUtils : <code>object</code>
Contains base functionality for tasks

**Kind**: global namespace  

* [TaskUtils](#TaskUtils) : <code>object</code>
  * [.setFieldsReadOnly(fields, trigger)](#TaskUtils+setFieldsReadOnly)
  * [.setFieldsMandatory(fields, trigger)](#TaskUtils+setFieldsMandatory)
  * [.setFieldsDisplay(fields, trigger)](#TaskUtils+setFieldsDisplay)

<a name="TaskUtils+setFieldsReadOnly"></a>
### taskUtils.setFieldsReadOnly(fields, trigger)
Changes the read only status of a list of fields

**Kind**: instance method of <code>[TaskUtils](#TaskUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>object</code> | A list of fields |
| trigger | <code>boolean</code> | The state to set the fields read only status |

<a name="TaskUtils+setFieldsMandatory"></a>
### taskUtils.setFieldsMandatory(fields, trigger)
Changes the mandatory status of a list of fields

**Kind**: instance method of <code>[TaskUtils](#TaskUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>object</code> | A list of fields |
| trigger | <code>boolean</code> | The state to set the fields mandatory status |

<a name="TaskUtils+setFieldsDisplay"></a>
### taskUtils.setFieldsDisplay(fields, trigger)
Changes the display status of a list of fields

**Kind**: instance method of <code>[TaskUtils](#TaskUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>object</code> | A list of fields |
| trigger | <code>boolean</code> | The state to set the fields read only status |

<a name="VariableHider"></a>
## VariableHider : <code>object</code>
Handles hiding variables or making them read-only on a ritm, because the UI policies often fail at this

**Kind**: global namespace  

* [VariableHider](#VariableHider) : <code>object</code>
  * [.disableAnElement(element)](#VariableHider+disableAnElement)
  * [.makeVariablesReadOnly()](#VariableHider+makeVariablesReadOnly)

<a name="VariableHider+disableAnElement"></a>
### variableHider.disableAnElement(element)
disables an individual html element

**Kind**: instance method of <code>[VariableHider](#VariableHider)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | an html element |

<a name="VariableHider+makeVariablesReadOnly"></a>
### variableHider.makeVariablesReadOnly()
makes all catalog variables read only on the form

**Kind**: instance method of <code>[VariableHider](#VariableHider)</code>  
<a name="handleMissingFields"></a>
## handleMissingFields : <code>function</code>
Ensures that blank, read-only fields on a catalog task are not set as mandatory

**Kind**: global typedef  
<a name="handleFieldNames"></a>
## handleFieldNames : <code>function</code>
Gets the name of the variable so we can properly disable it

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| record | <code>GlideRecord</code> | A response from the server |

