// Working with directories.

const fs = require('fs');

if(!fs.existsSync('./new')) {
    // Create a new directory.
    fs.mkdir('./new', (err) => {
        if(err) throw err;
        console.log('Directoy created');
    });
}

if(fs.existsSync('./new')) {
    // Create a new directory.
    fs.rmdir('./new', (err) => {
        if(err) throw err;
        console.log('Directoy removed');
    });
}

