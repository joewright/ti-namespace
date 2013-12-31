function UIView(options) {
	for (var k in options) {
		this[k] = options[k];
	}
	this.id = parseInt(Math.random() * 1000);
	return this;
}
UIView.prototype.add = function(v) {
	this.children.push(v);
};
UIView.prototype.remove = function(v) {
	for (var i = 0; i < this.children.length; ++i) {
		if (this.children[i].id == v.id) {
			this.children.splice(i, 1);
			return;
		}
	}
};

function eventProperties(name, v) {
	var event = {
		source: v,
		bubbles: v.bubbleParent !== false,
		cancelBubble: v.bubbleParent === false,
		type: name
	};
	if (v.eventProperties) {
		for (var k in v.eventProperties) {
			event[k] = v.eventProperties[k];
		}
	}
	return event;
}

UIView.prototype.addEventListener = function(name, handler) {
	handler && handler(eventProperties(name, this));
};

exports.createEmailDialog = function(options) {
	var dialog = new UIView(options);
	dialog.open = function(aOpts) {
		return;
	};
	dialog.eventProperties = {};
	dialog.eventProperties.success = true;
	return dialog;
};