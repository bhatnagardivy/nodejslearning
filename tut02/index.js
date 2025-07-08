const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')); // Deleting the text file.
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet u.');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
        console.log(newData);
    } catch( err ) {
        console.error(err);
    }
}

fileOps();

// // Reading a file.
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// // Writing a file.
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet u.', (err) => {
//     if (err) throw err;
//     console.log('Write operation complete');

//     // Appending a file.
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes, it is.', (err) => {
//         if (err) throw err;
//         console.log('Append operation complete');

//         // Renaming a file.
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename operation Completed');
//         });
//     });
// });



// Exit on uncaught error.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});

