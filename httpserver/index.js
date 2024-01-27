const http  = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Hello Home is responding");

    }else if(req.url == "/about"){
        res.end("this is about us page");

    }
    else if(req.url == "/contact"){
        res.end("this is contact us page");

    }else{
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1>404 error</h1>");
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("working")
})