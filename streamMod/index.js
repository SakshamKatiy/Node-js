const fs = require('fs');
const http = require("http");

const server = http.createServer();
server.on("request",(req,res)=>{
    // ___FIRST METHOD___
// fs.readFile("file.txt",(err,data)=>{
// res.end(data.toString())
// });
   


const rstream = fs.createReadStream("file.txt");

    //_____2ND WAY _______
// rstream.on('data',(chunkdata)=>{
//     res.write(chunkdata);


// });
// rstream.on('end',()=>{
//     res.end();
// });
// rstream.on('error',(err)=>{
// res.end("file not found");
// console.log(err);
// });


//_____3RD WAY_______
rstream.pipe(res);
});
server.listen(8000,"127.0.0.1")