const fs = require('fs');
const path = require('path');
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname,"..","model","product.json"),"utf-8"))

// to get products
const getProducts = (req, res) => {
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
}

// to get an product by id
const getProduct = (req,res)=>{
    console.log("Yes")
    let id = req.params.id*1;
    const data = jsonData.find((i)=>i.id===id)
    try {
        res.json({
            status:"success",
            data:data
        })
    } catch (error) {
        res.status(204).json({
            status : "failed"
        })
    }
}

// to add - post 
const addedProduct = (req,res)=>{
    const id = jsonData.length + 1
    // created new id and added
    const newProduct = {id:id,...req.body};
    // to push in jsonData
    jsonData.push(newProduct)
    console.log(jsonData)
    // to convert the JavaScript object into JSON format
    fs.writeFile(path.join(__dirname,"..","model","product.json"),JSON.stringify(jsonData),()=>{})
    res.json()
}

// to delete an product
const deletedProduct = (req,res)=>{
    // *1 - the string will be converted to number
    let id = req.params.id*1
    let deletedJson = jsonData.filter((i)=>(i.id!==id));
    fs.writeFile(path.join(__dirname,"..","model","product.json"),JSON.stringify(deletedJson),()=>{})
    res.status(204)
    res.json();
}

// PATCh - to update something in json file(an single element)
const updatedProduct = (req,res)=>{
    // to update the product count
    let id = req.params.id*1
    let updatedProd = jsonData.find((i)=>i.id==id)
    // find the index of that product in product.json
    let index = jsonData.indexOf(updatedProd)
    // to update the data
    // to change the count
    // to change the particular index Object.assign(target,value)
    jsonData[index] = Object.assign(updatedProd,req.body);
    fs.writeFileSync(path.join(__dirname,"..","model","product.json"),JSON.stringify(jsonData))
    console.log(jsonData[index])
    res.status(204).json({
        status : "success"
    })
}

// to PUT - update full product details
const updateProduct = (req,res)=>{
    let id = req.params.id*1
    let updateProd = jsonData.find((i)=>i.id===id)
    let index = jsonData.indexOf(updateProd)
    jsonData[index] = (req.body);
    fs.writeFileSync(path.join(__dirname,"..","model","product.json"),JSON.stringify(jsonData))
    
    res.status(200).json({
        status : "put updated"
    })
    console.log(jsonData[index])
}

const validate = (req,res,next)=>{
    let body = req.body
    let header = req.headers
    if(!header.Token==="pass"){
        return res.status(400).json({
            status : "fail",
            message : "unauthorized access"
        })
    }
    if(!body.name || !body.id || !body.count){
        return res.json({
            status : "fail",
            message : "bad request"
        })
    }
    next()
}

const idValidator = (req,res,next,value)=>{
    value = value*1
    const item = jsonData.find((i)=>(i.id===value))
    if(!item){
        return res.status(400).json({
            status : "failed",
            message : "no product found"
        })
    }
    next()
}

// Exporting module on common js
module.exports = {
    getProducts , getProduct , addedProduct , deletedProduct ,updatedProduct , updateProduct , validate , idValidator
}