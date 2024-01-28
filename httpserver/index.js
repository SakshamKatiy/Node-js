const http  = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,'utf-8');
    const objdata = JSON.parse(data);
    
    if(req.url == "/"){
        res.end("Hello Home is responding");

    }else if(req.url == "/about"){
        res.end("this is about us page");

    }
    else if(req.url == "/contact"){
        res.end("this is contact us page");

    }
    
    else if(req.url == "/userapi"){
        res.writeHead(200, {"Content-type":"application/json"});
        console.log(data);
        res.end(objdata.name);
        
        }
    
    else{
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1>404 error</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("working")
})