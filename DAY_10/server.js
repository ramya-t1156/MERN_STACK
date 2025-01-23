// // ROUTING IN JSON

// // 23-01-2025

// const http = require("http")
// const fs = require("fs")

// const jsonData = fs.readFile("server.html","utf-8",(err,data)=>{});
// const htmlst1=fs.readFileSync("home.html","utf-8")
// // creating a server
// // if there is no response - so the browser loading 
// const server = http.createServer((req,res)=>{
   
//     let path=req.url
//     if(path=="/home" || path=="/"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(htmlst1);
//     }
//     else if(path=="/contact"){
//         res.end("contact")
//     }
//     else if(path=="/about"){
//         res.end("about")
//     }
//     else if(path=="/products"){
//         res.end("products")
//     }
//     else{
//         res.end("404")
//     }
//         // function for write a header , (200 - response done(okay) , object)
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(jsonData)
//     })
//     server.listen(3000,()=>{console.log("http://localhost:3000/")})




// accesing another server - in local network
    /*  
        (ensure both the servers are connected with same wifi)
        1 . we have to get the ip address and port number of that server (ex - http://172.31.92.37:3000/ ) 
            here , 172.31.92.37 - IP address , port number - 3000
    */



// Dynammic routing
const http = require("http")
const fs = require("fs")
const path = require("path")
const url = require("url")

// raed the template file in template folder
const data = fs.readFileSync(path.join(__dirname,"template","template.html"),"utf-8");
const data1 = fs.readFileSync(path.join(__dirname,"template","product.html"),"utf-8");

// for parsing json data 
// JSON.parse - we changed this to JavaScript Object
const jsonData = JSON.parse(fs.readFileSync("product.json","utf8"));
let productHtmlArray = jsonData.map((prod)=>{
    let output = data1.replace("{{%IMAGES%}}",prod.productImage);
    output = output.replace("{{%NAME%}}",prod.name);
    output = output.replace("{{%MODELNAME%}}",prod.modeName);
    output = output.replace("{{%MODELNUMBER%}}",prod.modelNumber);
    output = output.replace("{{%SIZE%}}",prod.size);
    output = output.replace("{{%CAMERA%}}",prod.camera);
    output = output.replace("{{%PRICE%}}",prod.price);
    output = output.replace("{{%COLOR%}}",prod.color);
    output = output.replace("{{%DESCRIPTION%}}",prod.Description);
    output = output.replace("{{%ID%}}",prod.id);
    return output
})
productHtmlArray= productHtmlArray.join(",")

function renderProduct(prod){
    let output = data1.replace("{{%IMAGES%}}",prod.productImage);
    output = output.replace("{{%NAME%}}",prod.name);
    output = output.replace("{{%MODELNAME%}}",prod.modeName);
    output = output.replace("{{%MODELNUMBER%}}",prod.modelNumber);
    output = output.replace("{{%SIZE%}}",prod.size);
    output = output.replace("{{%CAMERA%}}",prod.camera);
    output = output.replace("{{%PRICE%}}",prod.price);
    output = output.replace("{{%COLOR%}}",prod.color);
    output = output.replace("{{%DESCRIPTION%}}",prod.Description);
    output = output.replace("{{%ID%}}",prod.id);
    return output
}

// console.log(typeof productHtmlArray) // object
const server = http.createServer((req,res)=>{
    
    let path = req.url
    path = path.toLowerCase();

    let {query,pathname}= url.parse(req.url,true)
    pathname = pathname.toLowerCase()

    if(path==="/home" ){
        // Replace the content {{%CONTENT%}} - ginger tag
        res.end(data.replace("{{%CONTENT%}}","You are at home"))
    }
    else if(path==="/about"){
        res.end(data.replace("{{%CONTENT%}}","You are at About"))
    }
    else if(path==="/contact"){
        res.end(data.replace("{{%CONTENT%}}","You are at Contact"))
    }
    else if(pathname==="/products"){
        console.log(path.indexOf("/Products"));
        if(query.id){
            let findOne = jsonData.find((item)=>item.id==query.id);
            res.end(data.replace("{{%CONTENT%}}",renderProduct(findOne)))
        }
        else{
            res.end(data.replace("{{%CONTENT%}}","You are at Product" + productHtmlArray))
        }
    }
    else{
        res.end("404")
    }
})
server.listen(3000,()=>{console.log("server started")})
