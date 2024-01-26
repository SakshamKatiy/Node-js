const fs = require("fs");

//fs.mkdirSync("Saksham")

// fs.writeFileSync("Saksham/write.txt","Hello how are you")

// fs.appendFileSync("saksham/write.txt"," i am very fine")

// const data = fs.readFileSync("saksham/write.txt","utf8")
// console.log(data)

//fs.renameSync("saksham/write.txt","saksham/crud.txt")

fs.unlinkSync("write.txt")