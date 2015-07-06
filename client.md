## Objects
<dl>
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

