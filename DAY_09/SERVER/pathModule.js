// Path module

const path = require("path")

//  these keywords are global (ex - __dirname)
// working directory
console.log(__dirname); // C:\Users\HP\Documents\SERVER\pathModule.js
// file name
console.log(__filename); // C:\Users\HP\Documents\SERVER\pathModule.js
// give the basename
console.log(path.basename("C:\Users\HP\Documents\SERVER\pathModule.js")); // UsersHPDocumentsSERVERpathModule.js
// for giving the extension of the file
console.log(path.extname("osModule.js")) // .js
// adding folder with file
// windows - forward slash(\) , macOS - (/)
console.log(path.join("folder","index.js"))
// parsing the directory 
// gives the directory details like {{
//   root: 'C:',
//   dir: 'C:',
//   base: 'UsersHPDocumentsSERVERpathModule.js',
//   ext: '.js',
//   name: 'UsersHPDocumentsSERVERpathModule'
// }}
console.log(path.parse("C:\Users\HP\Documents\SERVER\pathModule.js"))