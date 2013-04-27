var fs = require('fs'),
    request = require('request'),
    _ = require('underscore');

var Ti = function() {};

Ti.App = {};
function set(prop, val) {
    process.env[prop] = val;
};
function get(prop, defVal) {
    return process.env[prop] || defVal;
};
Ti.App.Properties = {
    setBool: set,
    getBool: get,
    setString: set,
    getString: get
};

Ti.Network = {
    createHTTPClient: function(config) {
        var r;
        return {
            open: function(method, url) {
                r = {
                    method: method,
                    url: url
                };
            },
            send: function(data) {
                r.body = data;
                if(r.fpath) {
                    var stream = fs.createWriteStream(r.fpath);
                    request(r, callback).pipe(stream);
                } else {
                    request(r, callback);
                }

                function callback(err, res, body) {
                    if (err && config.onerror) {
                        return config.onerror(err);
                    }
                    if (config.onload) {
                        config.responseText = body;
                        config.onload()
                    }
                }
            },
            setFile: function(fpath) {
                r.fpath = fpath;
            }
        }
    },
    decodeURIComponent: function(str) {
        return decodeURIComponent(str);
    }
}

Ti.Filesystem = {
    applicationDataDirectory: __dirname,
    getFile: function() {
        var filepath = _.values(arguments).join('/');
        return new file(filepath);
    }
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
    if(fs.existsSync(fpath)) {
        var stat = fs.statSync(fpath);
        if (stat.isDirectory()) {
            f.deleteDirectory = function() {
                return fs.unlinkSync(fpath);
            };

        } else {
            f.deleteFile = function() {
                return fs.unlinkSync(fpath);
            }
            f.size = stat.size;
        }
    }
    return f;
}

Ti.Geolocation = {}

module.exports = Ti;