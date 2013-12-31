var Ti = module.exports = function() {};

Ti._isTestEnv = true;
Ti.App = require('./lib/app');
Ti.Database = require('./lib/database');
Ti.Filesystem = require('./lib/filesystem');
Ti.Geolocation = require('./lib/geolocation');
Ti.Network = require('./lib/network');
Ti.XML = require('./lib/xml');
Ti.UI = require('./lib/ui');