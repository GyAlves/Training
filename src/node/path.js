const path = require("path")


// get the separator 
const separator = path.sep;

// Gets the file path 

const dir_resolve = path.resolve('home', 'work', 'my-project');
console.log("resolve: ", dir_resolve);

const dir_join = path.join("home", "work", "my-project");

console.log("Join:", dir_join);

// Gets file extension
const fileExt = path.extname('/foo/bar / node.js');
console.log("File ext: ", fileExt);


// Defining is a path is absolute

const isValidPath = path.isAbsolute('/foo/bar/node');
console.log("isValid", isValidPath);

// Parse method
const pathProps = path.parse('/foo/bar / node.js');
console.log("Path props", pathProps)

