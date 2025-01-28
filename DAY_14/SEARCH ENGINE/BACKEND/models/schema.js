const {Schema,model} = require("mongoose")

// creating schema
const courseName = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String
})

module.exports = model("course",courseName)