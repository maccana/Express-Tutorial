var fs = require('fs');

var contents = fs.readFileSync('./lib/notes.md', 'UTF-8');

console.log('READ FILE CONTENTS WITH FS :', contents);

// Using fs.readFile async

var contents = fs.readFile('./lib/asyncread.md', 'UTF-8', function(err, contents) {
    if(err) {
        console.log('Throwing the error will cause the error to get throw and kill the process');
        console.log('=========================================================================');
        console.log('There was an error reading the file...', err);
        
        
    }
    console.log('READ FILE CONTENTS ASYNCRONOUSLY WITH FS :', contents);
    
});

