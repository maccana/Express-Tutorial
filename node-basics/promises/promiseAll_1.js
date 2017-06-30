const getStuff = require('./getstuff');
const path = require('path');

Promise.all([
    getStuff(path.join(__dirname, 'albums.txt')),
    getStuff(path.join(__dirname, 'artists.txt')),
    getStuff(path.join(__dirname, 'lyrics.txt'))

]).then((values => {
    let albums = values[0]
    let artists = values[1]
    let lyrics = values[2]  
    console.log(albums + '\n' + artists + '\n' + lyrics)
}))


