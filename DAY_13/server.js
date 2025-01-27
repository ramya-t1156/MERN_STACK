const express = require("express")
const app = express()
const qrcode = require("qrcode")
const path = require("path")
// to create an static
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())

app.get("/app",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"))
})

// for getting qr
app.post("/qr",async (req,res)=>{
    let link = req.body.data
    let genQr = await qrcode.toDataURL(link)
    res.json(genQr)
})

app.get("/qr",async(req,res)=>{
    // req.query.link
    let link = req.query.link
    let genQr = await qrcode.toDataURL(link)
    res.json(genQr)
})

app.listen(2000,()=>{
    console.log("http://localhost:2000")
})
