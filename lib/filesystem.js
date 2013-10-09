var fs = require('fs'),
	_ = require('lodash');

exports.resourcesDirectory = process.cwd() + '/assets';

exports.applicationDataDirectory = process.cwd();

exports.getFile = function() {
	var filepath = _.values(arguments).join('/');
	return new file(filepath);
};

function file(fpath) {
	var f = {
		exists: function() {
			return fs.existsSync(fpath);
		},
		createDirectory: function() {
			return fs.mkdirSync(fpath);
		},
		nativePath: fpath
	}
	if (fs.existsSync(fpath)) {
		var stat = fs.statSync(fpath);
		if (stat.isDirectory()) {
			f.deleteDirectory = function() {
				return fs.unlinkSync(fpath);
			};

		} else {
			f.deleteFile = function() {
				return fs.unlinkSync(fpath);
			}
			f.read = function() {
				f.toString = function() {
					return fs.readFileSync(fpath, 'utf-8');
				};
				return f;
			}
			f.size = stat.size;
		}
	}
	return f;
}