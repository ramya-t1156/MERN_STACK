// task - 02
// To log the date and time whenever the server.js file is updated, 
// you can use the fs.watch method to monitor the file for changes.

const http = require("http")
const fs = require("fs") // for watching changes in file

fs.watch("server.js",(eventType,filename)=>{
    const now = new Date()
    console.log(`File ${currentFile} updated at ${now.toLocaleString()}`)
})

const server = http.createServer((req,res)=>{
    console.log(`Request received : ${req.url}`)
    res.end("Server is running")
})

//start the server
server.listen(300,()=>{console.log("server started")})
