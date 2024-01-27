const path = require("path");

console.log(path.dirname('C:\Users\saksh\OneDrive\Documents\GitHub\Node-js\PathModule\index.js'));

console.log(path.extname('C:\Users\saksh\OneDrive\Documents\GitHub\Node-js\PathModule\index.js'));

console.log(path.basename("C:\Users\saksh\OneDrive\Documents\GitHub\Node-js\PathModule\index.js"));

console.log(path.parse("C:\Users\saksh\OneDrive\Documents\GitHub\Node-js\PathModule\index.js"));

const myPath = path.parse("C:\Users\saksh\OneDrive\Documents\GitHub\Node-js\PathModule\index.js");
console.log(myPath.name)