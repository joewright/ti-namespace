#Ti-Namespace

Write tests for your titanium js libraries in node for easier testing.

Methods implemented:

Ti.App
    Properties
        setBool
        getBool
        setString
        getString

Ti.Network
    createHTTPClient (takes arguments: Fn onload, Fn onerror)
        open
        send
        setFile

    decodeURIComponent

Network Example:
```
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        done();
    },
    onerror: function(e) {
        done('Error downloading file - ' + url);
    },
    timeout: 60000
});

xhr.open("GET", 'http://github.com');
xhr.setFile('./test.html');
xhr.send();
```
Ti.Filesystem
    applicationDataDirectory,
    getFile (returns Ti.Filesystem.File)

Ti.Filesystem.File
    exists
    createDirectory
    deleteFile
    size


TODO:
Testing