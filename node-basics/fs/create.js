var fs = require('fs');

var md = `
SAMPLE MARKDOWN TITLE
=====================

SAMPLE SUBTITLE
---------------

* point
* point
* point

`;

fs.writeFile('sample.md', md.trim(), function(err) {
    console.log('File created...');
});