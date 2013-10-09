exports.iOS = require('./ios');

function set(prop, val) {
	process.env[prop] = val;
}

function get(prop, defVal) {
	return process.env[prop] || defVal;
}

exports.Properties = {
	setBool: set,
    getBool: get,
    setString: set,
    getString: get
}

exports.addEventListener = function(ename, callback) {

}