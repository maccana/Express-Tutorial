var fs = require('fs');

if(!fs.existsSync('notes.md')) {
    fs.writeFileSync('notes.md', 'Some notes here...', 'utf-8');
}
// Remove a file synchronously wrapped in try / catch block
try {
    fs.unlinkSync('./lib/config.json');

} catch (err) {
    console.log('Error unlinking file ', err);

}

fs.unlink('notes.md', function (err) {
    if (err) {
        console.log(err);
    } 
    console.log('Notes.md removed....');

})
