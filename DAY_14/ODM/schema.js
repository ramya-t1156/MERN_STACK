const {Schema,model} = require("mongoose")

// to create an schema
const customerSchema = new Schema({
    name : String,
    // required property
    age : {
        type : Number,
        required : true,
        // setting minimum age
        min : 20,
        max : 100,
    },
    email : {
        type : String,
        required : true,
        minLength : 10,
        lowercase : true,
    },
    friend : {
        type : Schema.Types.ObjectId,
    },
    address : {
        state : String,
        pincode : Number
    },
    hobbies : [{type : String}] // string array
})
// to export the schema
// model(schemaName , schemaVariableName)
module.exports = model("customer" , customerSchema)