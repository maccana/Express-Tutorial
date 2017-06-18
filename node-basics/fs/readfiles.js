var fs = require('fs');

var contents = fs.readFileSync('./lib/notes.md', 'UTF-8');

console.log('READ FILE CONTENTS WITH FS :', contents);