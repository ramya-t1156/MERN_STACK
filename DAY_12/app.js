// // event contains event emiters
// const events = require("events")
// // to call class we need contstructor product
// // simple custom event in node js
// const customEvent = new events.EventEmitter();
// // event name - cs
// customEvent.on("cs",()=>{
//     console.log("cs is called")
// })
// // emitting cs event
// customEvent.emit("cs")

// import express from "express";
// // package - express
// const express = require("express")
// // rexpress returns an function now, that is stores in app
// const app = express()
// app.get("/",(req,res)=>{
//     res.json({ok:true})
// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })


// const express=require("express")
// const path=require("path")
// const app=express()
// app.get("/",(req,res)=>{
//     // res.json({ok:true})
//     res.status(200).sendFile(__dirname+"/index.html") 
// })
// app.listen(26,()=>{console.log("running");
// })



// const express = require("express")
// const fs = require("fs")
// const path = require("path")
// const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname,"model","product.json"),"utf-8"));
// const app = express()

// // whenever get req just send json data
// try {
//     app.get("/api/v1/products",(req,res)=>{
//         res.status(200).json({
//             status : "fulfilled",
//             count : jsonData.length,
//             data:{
//                 products : jsonData
//             }
//         });
//     })
// } catch (error) {
//     res.status(500).json({
//         status:"fail",
//         message : error
//     })
// }

// // Route for fetching a specific product by ID
// app.get("/api/v1/products/:id",(req,res)=>{
//     console.log("Yes")
//     let id = req.params.id*1;
//     const data = jsonData.find((i)=>i.id===id)
//     res.json({
//         status:"success",
//         data:data
//     })
// })


// // // to get every possible
// // app.get("/*",(res,req)=>{
// //     res.json({status:"fail"})
// // })

// app.listen(3000,()=>{console.log("http://127.0.0.1:3000")})






// // Importing from productFunction.js
// const express = require("express")
// // used to log API calls 
// const morgan = require("morgan")

// const app = express()
// // not a middleware it is an closure
// // if the json function returns middleware function then use ()
// app.use(express.json())
// // using morgan - responsible for log the API call 
// app.use(morgan("dev"))

// // app.use("/api/v1/products", productRoutes)

// // // middle ware 
// // // if next parameter is not cretaed means the api response will loading not genereted
// // app.use(mid)
// // function mid(req,res,next){
// //     console.log("yes middleware")
// // }


// app.listen(3000,()=>{
//     console.log("http://localhost:3000")
// })


const express = require("express")
const morgan = require("morgan")
const productRoutes = require("./routes/productRoutes")
const app = express()
// for setting up our environmental variable
const dotenv = require("dotenv")
// config - pass env file path
dotenv.config({path : "./config.env"})

app.use(express.json());
app.use(morgan("dev"))

app.use("/api/v1/products", productRoutes)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})

module.exports = app
