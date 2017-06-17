var fs = require('fs');
var path = require('path');

// Use readdirSync to get list of files from given directory
// Note this blocks async flow of Node
var files = fs.readdirSync(path.join(__dirname, 'lib'));

console.log('Files in lib dir ... ', files);

// Read a directory asyncronously - non-blocking
var files = fs.readdir(path.join(__dirname, 'lib'), function(err, files) {
    if(err) {
        throw err;
    }
    console.log('Read files in a directory asyncronously ', files);
});

// Any code here will run while the fs.readdir is performing it's task
console.log('This logs before the fs.readdir is finished...');