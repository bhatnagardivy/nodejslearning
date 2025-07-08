const fs = require('fs');
const path = require('path');

// For copying the large files.

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), 'utf-8');
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem.txt'));

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// });

rs.pipe(ws); // This is efficient way.