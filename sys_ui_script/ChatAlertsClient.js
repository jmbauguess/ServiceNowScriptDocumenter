/**
 * @description Displays chat messages on the client side
 * @namespace ChatAlertsClient
 */
var ChatAlertsClient = Class.create();
ChatAlertsClient.prototype = {	
	// Default pool_interval
	CHECK_INTERVAL: 30000,
	CHAT_WIDTH: 200,
	CHAT_MIN_HEIGHT: 150,
	log: function(str) {
		if (window.console && window.console.log){
		//	console.log(str);
		}
	},	
	/**
	 * @description initializes the chat message container to null
	 */
	initialize: function(item_id) {		
		this.chatMessageContainer = null;
	},
	/**
	 * @description Main method - checks to see if the user is in the support desk, and if so, runs the code to get messages
	 */
	start: function() {		
		if (g_user.hasRole('support_desk')){
			var ga = new GlideAjax('ChatAlerts');
			ga.addParam('sysparm_name','getMyMessages');
			ga.getXML(this.response.bind(this));
		}
	},	
	/** 
	 * @description Response handler for server response to getMyMessages
	 * @param {HttpResponse} response the response from the server
	 */
	response: function(response) {
		var result = response.responseXML.getElementsByTagName("result");
		var message = result[0].getAttribute("message");
		var poll_interval = parseInt(result[0].getAttribute("poll_interval"));
		if (poll_interval >= 1000 && poll_interval != this.CHECK_INTERVAL) {
			this.CHECK_INTERVAL = poll_interval;
		}				
		// Build the invisible chat container on demand
		var chatMessages = response.responseXML.getElementsByTagName("chat_message");
		if (!this.chatMessageContainer && chatMessages.length > 0) 
			this.createContainer();		
		// Add all chat messages
		for (var i=0; i < chatMessages.length; i++) {
			var from_name = chatMessages[i].getAttribute("from_name");
			var body = chatMessages[i].getAttribute("body");
			var sys_id = chatMessages[i].getAttribute("sys_id");
			var dt = chatMessages[i].getAttribute("dt");
			this.createMessage(sys_id, from_name, body, dt);
		}		
		// Remove any acknowledged chat messages still visible
		if (this.chatMessageContainer) {
			for (var ii = 0; ii < this.chatMessageContainer.children.length; ii++) {
				var found = false;
				for (var i=0; i < chatMessages.length; i++) {
					var sys_id = chatMessages[i].getAttribute("sys_id");
					if (this.chatMessageContainer.children[ii].id.indexOf(sys_id) != -1) {
						found = true;
						break;
					}
				}
				// We never found that message in the list so remove
				if (!found) {
					console.log('removing a message because it wasn\'t found');
					this.removeMessage(this.chatMessageContainer.children[ii].id);
				}
			}
		}		
		// Repeat!
		setTimeout(this.start.bind(this), this.CHECK_INTERVAL);
	},		
	/**
	 * @description Helper function to perform the AJAX call to acknowledge the message on the server
	 * @param {string} sys_id A sys_id of a chat message record to acknowledge on the server
	 */
	acknowledgeMessage: function(sys_id) {
		this.removeMessage(sys_id);		
		var ga = new GlideAjax('ChatAlerts');
		ga.addParam('sysparm_name','acknowledgeMessage');
		ga.addParam('sysparm_message_sys_id', sys_id);
		ga.getXML();
	},	
	/**
	 * @description Helper function to create the chat container, this is our 'sidebar'
	 */
	createContainer: function() {
		this.chatMessageContainer = document.createElement('div');
		this.chatMessageContainer.style.position = 'absolute';
		this.chatMessageContainer.style.right = '0px';
		this.chatMessageContainer.style.bottom = '0px';
		this.chatMessageContainer.style.maxHeight = '50%';
		this.chatMessageContainer.style.width = this.CHAT_WIDTH + 'px';
		document.body.appendChild(this.chatMessageContainer);
	},	
	/**
	 * @description Helper function to remove a chat message based on sys_id
	 * @param {string} sys_id The sys_id of a chat message to remove from the page
	 */
	removeMessage: function(sys_id) {
		var id = sys_id;
		if (id.indexOf('chat_message_') == -1)
			id = 'chat_message_' + sys_id;
		var div = document.getElementById(id);
		document.getElementById(id).parentNode.removeChild(div);
	},	
	/**
	 * @description Helper function to create a message within the container
	 * @param {string} sys_id The sys_id of the chat message
	 * @param {string} from_name Who the message is from
	 * @param {string} body The body of the message
	 * @param {string} dt The date and time of the message
	 */
	createMessage: function(sys_id, from_name, body, dt) {
		// Skip creation if it already exists
		if (document.getElementById('chat_message_' + sys_id) != null)
			return;				
		var divOuter = document.createElement('div');
		divOuter.id = 'chat_message_' + sys_id;
		divOuter.style.position = 'relative';
		divOuter.style.backgroundColor = 'LightGoldenRodYellow';
		divOuter.style.borderColor = '#CACACA';
		divOuter.style.borderWidth = '1px';
		divOuter.style.borderStyle = 'solid';
		divOuter.style.borderTop = '';
		divOuter.style.cursor = 'pointer';
		var thiz = this;
		divOuter.onclick = function() {
			thiz.acknowledgeMessage(sys_id);
			window.open('chat_desktop.do?sysparm_nostack=true');
		};
		this.chatMessageContainer.appendChild(divOuter);		
		// Create a link in the top right of the message to facilitate acknowledging
		var a = document.createElement('a');
		a.style.position = 'absolute';
		a.style.right = '0px';
		a.style.top = '0px';
		a.href = '#';
		a.onclick = function() {
			var event = arguments[0] || window.event;
			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
			thiz.acknowledgeMessage(sys_id);
			return false;
		};
		divOuter.appendChild(a);		
		var img = document.createElement('img');
		img.src = 'images/closex_hover.gif';
		img.style.display = 'none';
		a.appendChild(img);		
		divOuter.onmouseover = function() {
			img.style.display = 'inline';
		};
		divOuter.onmouseout = function() {
			img.style.display = 'none';
		};		
		// The message div, this will contain the actual body
		var div = document.createElement('div');
		div.style.padding = '10px 12px 12px 10px';
		div.style.margin = '0 0 0 0';
		div.innerHTML =
			'<div style="margin-bottom: 5px">' + dt + ' - ' + from_name + ' says:</div>' +
			'<div><span style="font-weight: bold">' + body + '</span></div>';
		divOuter.appendChild(div);		
		// Calculate the starting position, ie off the screen
		divOuter.style.bottom = (0 - divOuter.offsetHeight) + 'px';
		// Animate the transition
		this.animate(divOuter, 'bottom', 0, 1, parseInt(divOuter.style.bottom) > 0, function() {
			thiz.chatMessageContainer.scrollTop = thiz.chatMessageContainer.scrollHeight;				
			divOuter.style.borderTop = '';
			thiz.chatMessageContainer.style.borderTopColor = '#CACACA';
			thiz.chatMessageContainer.style.borderTopWidth = '1px';
			thiz.chatMessageContainer.style.borderTopStyle = 'solid';
		});
	},	
	/** 
	 * @description Helper function to animate the display of a div
	 * @param {HtmlElement} element The element to animate
	 * @param {string} attribute The attribute to affect
	 * @param {integer} target
	 * @param {integer} step
	 * @param {boolean} dir
	 * @param {function} callback A callback function
	 */
	animate: function(element, attribute, target, step, dir, callback) {
		if (!dir) {
			if (parseInt(element.style[attribute]) < target) {
				element.style[attribute] = (parseInt(element.style[attribute]) + step) + 'px';
				setTimeout(this.animate.bind(this, element, attribute, target, step, dir, callback), 5);				
			} else {
				if (typeof callback != 'undefined')
					callback();
			}
		}
	}	
};
// Only enable the client on the top frame
if (window.top == window.self) {
	// The top frame could be chat desktop or workflow or something else
	if (window.self.location.pathname == '/' || window.self.location.pathname.indexOf('navpage.do') == 1) {
		// Once the page has loaded kick off the code!
		addLoadEvent(function() {
			var chatAlerts = new ChatAlertsClient();
			chatAlerts.start();
		});
	}
}