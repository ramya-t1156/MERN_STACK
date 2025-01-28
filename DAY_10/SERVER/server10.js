// // server

// const http = require("http")
// const fs = require("fs")

// // creating a server
// // if there is no response - so the browser loading 
// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     fs.readFile("server.html","utf-8",(err,data)=>{
//         // function for write a header , (200 - response done(okay) , object)
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(data)
//     })
//     // res.end("hello") // ending our response so we cannot send headers
// })
// server.listen(3000,()=>console.log("http://localhost:3000/")) // port number - 3000 , callback - intimate us whether the server is running or not
// // http://localhost:3000/ - after typing this is browser only "server called" will be displayed

// // if the port is already in use it will throw an error -> so we have to remove all the cmds and then freashly start the server
// // for automatically restart type 
// /*
// type in cmd
// 1 . npm init (initialize)
// 2 . hit enter for all 
// 3 . entry point: (fsModule.js) server.js       
// 4 . in last type yes
// ----
// npm i nodemon - constantly monitor the server and update the server

// change in package.json 
// "start": "nodemon server.js"

// you can also give like http://localhost:3000/home
// */





// // task - 01 (when update in server.html)

// // To log the date and time whenever the server.html file is updated, 
// // you can use the fs.watch method to monitor the file for changes. 

// const http = require("http")
// const fs = require("fs")

// fs.watch("server.html",(eventType,filename)=>{
//     if(eventType=="change"){
//         const now = new Date();
//         console.log(`File updated : ${filename} at ${now.toLocaleString()}`);
//     }
// })

// const server = http.createServer((req,res)=>{
//     fs.readFile("server.html","utf-8",(err,data)=>{
//         if(err){
//             res.writeHead(500,{"Content-Type":"text/plain"});
//             res.end("Error loading file");
//             return;
//         }
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.end(data);
//     })
// })

// server.listen(97,()=>{console.log("server started")})





// // task - 02
// // To log the date and time whenever the server.js file is updated, 
// // you can use the fs.watch method to monitor the file for changes.

// const http = require("http")
// const fs = require("fs") // for watching changes in file

// fs.watch("server.js",(eventType,filename)=>{
//     const now = new Date()
//     console.log(`File ${filename} updated at ${now.toLocaleString()}`)
// })

// const server = http.createServer((req,res)=>{
//     console.log(`Request received : ${req.url}`)
//     res.end("Server is running")
// })

// //start the server
// server.listen(300,()=>{console.log("server started")})




