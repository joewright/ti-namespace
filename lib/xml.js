exports.parseString = function(input) {
	return {
		documentElement: {
			hasChildNodes: function() {
				return false;
			},
			getTextContent: function() {
				return str;
			},
			hasAttributes: function() {
				return false;
			}
		}
	};
}