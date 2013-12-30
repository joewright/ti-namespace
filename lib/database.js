var mock, validRow = false;
exports.setMock = function(data) {
	mock = data;
	validRow = true;
}
function resultSet() {
	return {
		isValidRow: function() {
			return validRow;
		},
		next: function() {
			validRow = false;
			mock = undefined;
			return;
		},
		fieldByName: function(field) {
			if(mock) {
				return mock[field];
			}
			return '';
		}
	};
}

function Database(dbname) {
	var self = this;
	self.execute = function(statement) {
		return resultSet();
	};
	self.close = function() {
		return {};
	};

}

exports.open = function(dbname) {
	return new Database(dbname);
}