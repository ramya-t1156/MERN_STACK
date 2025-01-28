// import the mongoose package
const mongoose = require("mongoose")
// importing the model 
const cust = require("./schema")

// TRADITIONAL WAY
// to connect with db
async function db(){
    // to connect with mongoDB localhost
    // if customer database not exits means it will create a new one
    try {
        await mongoose.connect("mongodb://localhost:27017/customer")
        console.log("db connected");
    } catch (error) {
        console.log("error on connection db")
    } 

    // // TRADITIONAL WAY
    // // after creating an new customer data only the database will be displayed
    // const newCustomer = new cust({
    //     name : "Aura",
    //     age : 19,
    //     address : {
    //         state : "Tamilnadu",
    //         pincode : 642007
    //     },
    //     hobbies : ["reading" , "listening"]
    // })

    // // to save this customer DB
    // newCustomer.save()


    // // MODERN WAY
    // const newCustomer =await cust.create({
    //     name : "Alice",
    //     age : 23,
    //     email : "jhon1156@gmail.com",
    //     address : {
    //         pincode : 123456,
    //         state : "TN"
    //     },
    //     hobbies : ["reading" , "listening"]
    // })
    // console.log(newCustomer)

// const customerData = await cust.findById("67985bf57b425820d790f76e",{name:1,age:1});
// console.log(customerData);

// // using mongoDB query
// const customerData = await cust.find().where("name").equals("Aura").limit(1);
// console.log(customerData);


// // adding cutomer with friend
// const newCustomer =await cust.create({
//     name : "Mary",
//     age : 23,
//     email : "mary1156@gmail.com",
//     friend : "6798649372ec3139dffe4b74", // alice
//     address : {
//         pincode : 1256,
//         state : "TN"
//     },
//     hobbies : ["singing" , "listening"]
// })
// console.log(newCustomer)



// // to find the data
// const customerData = await cust.findById("679865353bc1b57d8c8df911");
// console.log(customerData);

// // populate - to find the friend
// const customerData = await cust.findById.populate("679865353bc1b57d8c8df911").populate("friend");
// console.log(customerData);

// // to update age
// const customerData = await cust.updateOne({name:"Mary"},{$set:{age:25}})
// // to update many
// const customerData = await cust.updateMany({name:"Mary"},{$set:{age:25}})

// same for delete


}
db()

