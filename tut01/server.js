console.log("Divy Bhatnagar"); // Normal console message

const os = require('os');

console.log(os.type()); // Displays type of current OS.
console.log(os.version()); // Displays version of current OS.
console.log(os.homedir()); // Displays user home directory.

console.log(__dirname); // Displays current directory path with name.
console.log(__filename); // Displays current file path with name.

const path = require('path');

console.log(path.dirname(__filename)); // Displays directory path of current filename. Similiar to __dirname.
console.log(path.basename(__filename)); // Displays current filename with extension.
console.log(path.extname(__filename)); // Displays the extension of the current filename.

console.log(path.parse(__filename)); // Displays the object of the above path function values present from line 14-16.

// const math = require('./math'); // way 1 of importing. 
const {add, sub, mul, div} = require('./math'); // way 2 of importing.

console.log(add(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(div(2,3));