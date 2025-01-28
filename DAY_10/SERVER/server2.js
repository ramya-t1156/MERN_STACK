// ex - 01

// const http = require("http")
// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     res.end("hello")
// });

// server.listen(3000,()=>{console.log("heyy")});


// // ex - 02
// // http://localhost:3000/?id=10&name=jhon

// const http = require("http")
// const url = require("url")

// const server = http.createServer((req,res)=>{
//     let {query} = url.parse(req.url,true) // true - whether our req contains url
//     console.log(query.id)
//     let{id,name} = query
//     console.log(id)
//     console.log(name)
// });

// server.listen(3000,()=>{console.log("heyy")});