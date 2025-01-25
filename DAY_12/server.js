const app = require("./app")

let port = process.env.PORT;

app.listen(port || 3000,()=>{
    console.log("http://270.0.0.1:3000")
})