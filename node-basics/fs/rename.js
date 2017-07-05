var fs = require('fs');

// Check the file exists
fs.stat('./lib/project-config.js', function (err, stat) {
    if (err == null) {
        console.log('File exists');
        // Call synchronous file rename
        renameFileSync();
    } else if (err.code == 'ENOENT') {
        // Create the file
        fs.writeFile('./lib/project-config.js', 'Some log\n');
        renameFileSync();
    } else {
        console.log('Some other error: ', err.code);
    }
});

function renameFileSync() {
    fs.renameSync('./lib/project-config.js', './lib/config.json');
}

function renameFileAsync() {
    // asyncrhonous
    fs.rename('./lib/notes.md', './notes.md', function (err) {
        if (err) {
            console.log(err)
        }
        console.log('File was renamed and moved to different location...');
    })
}

console.log('Config file renamed..');

if (!fs.existsSync('./lib/notes.md')) {
    // Create the file
    fs.writeFile('./lib/notes.md', 'Some notes here.....\n');
    renameFileAsync();

} else {
    renameFileAsync();
}

