const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hello")
})
server.listen(1000,()=>{console.log("hey")})