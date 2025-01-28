// this file used to connect to DB
const mongoose = require("mongoose")

async function DB(){
    try {
        // connecting to mongoDB
        await mongoose.connect("mongodb://localhost:27017/course")
        console.log("db connected");
    } catch (error) {
        console.log("error on connection db")
    } 
}

// exporting DB
module.exports = DB