var fs = require('fs');

// synchronous
fs.renameSync('./lib/project-config.js', './lib/config.json');

console.log('Config file renamed..');

// asyncrhonous
fs.rename('./lib/notes.md', './notes.md', function(err) {
    if(err) {
        console.log(err)
    }
    console.log('File was renamed and moved to different location...');
})