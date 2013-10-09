// var sqlite3 = require('sqlite3');

function resultSet() {
	return {
		isValidRow: function() {
			return false;
		},
		next: function() {
			return;
		},
		fieldByName: function(field) {
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