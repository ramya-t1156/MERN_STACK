// task - 01 (when update in server.html)

// To log the date and time whenever the server.html file is updated, 
// you can use the fs.watch method to monitor the file for changes. 
// Here's how you can modify your code:

const http = require("http")
const fs = require("fs")

fs.watch("server.html",(eventType,filename)=>{
    if(eventType=="change"){
        const now = new Date();
        console.log(`File updated : ${filename} at ${now.toLocaleString()}`);
    }
})

const server = http.createServer((req,res)=>{
    fs.readFile("server.html","utf-8",(err,data)=>{
        if(err){
            res.writeHead(500,{"Content-Type":"text/plain"});
            res.end("Error loading file");
            return;
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
    })
})

server.listen(97,()=>{console.log("server started")})
