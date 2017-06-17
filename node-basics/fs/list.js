var fs = require('fs');
var path = require('path');

// Use readdirSync to get list of files from given directory
var files = fs.readdirSync(path.join(__dirname, 'lib'));

console.log('Files in lib dir ... ', files);