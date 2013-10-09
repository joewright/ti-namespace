var fs = require('fs'),
	request = require('request');

exports.createHTTPClient = function(config) {
	var r;
	return {
		open: function(method, url) {
			r = {
				method: method,
				url: url,
				followRedirect: (config.autoRedirect === false) ? false : true
			};
		},
		send: function(data) {
			r.body = JSON.stringify(data);
			if (data) {
				r.body = data;
				r.json = true;
			}
			if (r.file) {
				var stream = fs.createWriteStream(r.file);
				request(r, callback).pipe(stream);
			} else {
				request(r, callback);
			}

			function callback(err, res, body) {
				if (err && config.onerror) {
					err.source = {status:' '};
					return config.onerror(err);
				}
				if (config.onload) {
					if (r.json) body = JSON.stringify(body);
					config.responseText = body;
					config.onload()
				}
			}
		},
		setFile: function(file) {
			r.file = file.nativePath || file;
		}
	}
};
exports.online = true;
exports.decodeURIComponent = function(str) {
	return decodeURIComponent(str);
};