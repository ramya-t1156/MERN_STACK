const express = require("express")
const app = express()
const path = require("path")
const {engine} = require("express-handlebars")
// to make as static
// static middleware 
// it's going to return an middleware
app.use(express.static(path.join(__dirname,"public")))
app.engine("hbs",engine({extname : "hbs",defaultLayout : false}))
// to set engine - setting view engine as pug
app.set("view engine","hbs")

// get API
app.get("/home",(req,res)=>{
    // res.sendFile(path.join(__dirname , "views" , "index.html"))
    // by default template enginees look for view folder
    // go to index and crete index.pug
    let data = "Aura"
    let arr = [1,2,3,4,5]
    res.render("index",{data,arr})
})

app.get("/about",(req,res)=>{
    let arr = [1,2,3,4,5]
    res.render("about",{arr})
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.listen(3000,()=>{console.log("http://localhost:3000")})
