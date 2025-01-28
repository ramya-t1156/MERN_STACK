// server using express
const express = require('express')
const app = express()

const cors = require("cors")
// pass cors as a middleware
app.use(cors())

// importing DB and schema
const DB = require("./DB/db")
const courseSchema = require("./models/schema")

// get the contents from API
// in Postman (localhost:3000/api/v1/search)
// press get

app.get("/api/v1/search",async(req,res)=>{
    // calling DB to connect to DB
    await DB()

    // // after connection find all courses from the DB
    // let course = await courseSchema.find()
    // // displaying courses in console
    // console.log(course)
    // // sending the response in API
    // res.send("data collected")

    // search query 
    // in Postman (localhost:3000/api/v1/search/?search=1)
    let query = req.query.search
    console.log(query)

    // searching for title
    // Postman(localhost:3000/api/v1/search?search=css)
    // i => case insensitive
    let course = await courseSchema.find({title : {$regex : query , $options : "i"}}) 
    res.json(course)

})

// crearing an port
app.listen(3000,()=>{
    console.log("server running")
})