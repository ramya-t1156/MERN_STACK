// console.log("Hello World")

// to read user input 
// modeule name = readline => conatins createInterface
const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// question - prompt 
// args - question , value
rl.question("Enter your name : " , (data)=>{
    console.log("hello " , data);
})