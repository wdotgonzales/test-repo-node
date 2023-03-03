/* Path Module */
const path = require('path');

// Path Separation
console.log(path.sep);

// 
const filePath = path.join('/content','subfolder','text.txt');
console.log(filePath);

// Absolute Path or Full Path
const abosulutePath = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(abosulutePath);

