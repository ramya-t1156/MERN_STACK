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



const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
// to get middleware
app.use(express.json())

const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname,"Model","product.json"),"utf-8"))

app.get("/api/v1/products", (req, res) => {
    try {
        res.json({
            status: "success",
            count: jsonData.length,
            data: {
                products: jsonData
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch products",
            error: error.message
        });
    }
});

app.get("/api/v1/products/:id",(req,res)=>{
    console.log("Yes")
    let id = req.params.id*1;
    const data = jsonData.find((i)=>i.id===id)
    res.json({
        status:"success",
        data:data
    })
})

// app.get("/*",(req,res)=>{
//     res.json({
//         status:"error",
//         message:"Page not found"
//     })
// })

// app.post("/api/v1/products",(req,res)=>{
//     res.json({
//         status:"success",
//         data:req.body
//     })
// })

// // getting from postman - and logging
// app.post("/api/v1/products", (req, res) => {
//     console.log(req.body)
// })

app.post("/api/v1/products",(req,res)=>{
    const id = jsonData.length + 1
    // created new id and added
    const newProduct = {id:id,...req.body};
    // to push in jsonData
    jsonData.push(newProduct)
    console.log(jsonData)
    // to convert the JavaScript object into JSON format
    fs.writeFile(path.join(__dirname,"model","product.json"),JSON.stringify(jsonData),()=>{})
    res.json()
})

// to delete an product
app.delete("/api/v1/products/:id",(req,res)=>{
    // *1 - the string will be converted to number
    let id = req.params.id*1
    let deletedJson = jsonData.filter((i)=>(i.id!==id));
    fs.writeFile(path.join(__dirname,"model","product.json"),JSON.stringify(deletedJson),()=>{})
    res.status(204)
    res.json();
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})