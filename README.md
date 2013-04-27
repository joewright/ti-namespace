#Ti-Namespace

Mock Titanium JS namespace for node.
Write tests for your Titanium libraries in Node.

Network Example:
----
Run this in Node
```
var Ti = require('ti-namespace');
//same as Titanium environment:
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        done();
    },
    onerror: function(e) {
        done('Error downloading file - ' + url);
    }
});

xhr.open("GET", 'http://github.com');
xhr.setFile('./test.html');
xhr.send();
```


Methods implemented:
---------------
Ti.App
* Properties
    * setBool
    * getBool
    * setString
    * getString

Ti.Network
* createHTTPClient
    * open
    * send
    * setFile

* decodeURIComponent

Ti.Filesystem
* applicationDataDirectory,
* getFile (returns Ti.Filesystem.File)

Ti.Filesystem.File
* exists
* createDirectory
* deleteFile
* size

TODO:
Testing, more examples.
