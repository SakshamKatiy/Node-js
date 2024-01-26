const fs = require("fs");

// fs.writeFileSync("read.txt","hello this file creating by syncronous");

// fs.appendFileSync("read.txt","text adding by append function")

const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);

// Node.js includes an additional data type called Buffer(not available in browser's Javascript)

// Buffer is mainly used to store binary data,

// while reading from a file or receiving packets over the network



//to rename the file name

fs.renameSync("read.txt","readwrite.txt")

