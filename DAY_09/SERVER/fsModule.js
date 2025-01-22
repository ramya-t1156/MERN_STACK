// fs module - File System module

const fs = require("fs")

// // if the file not exists it will create an new file
// // paramets - (filename,data)
// fs.writeFile("sample.txt","craete a file using fs",(err)=>{})
// // (err)=>{} - callback for handle the error
// // instead of appending it created an new file and add the following content alone
// // it overrides the exixted data
// fs.writeFile("sample.txt","new data added",(err)=>{})

// // for appending the content
// fs.appendFile("sample.txt","append data",(err)=>{})
// // for appending at a next line
// fs.appendFile("sample.txt","\nnew line",(err)=>{})

// // Reading file
// // data - stores in file contents
// fs.readFile("sample.txt",(err,data)=>{
//     console.log(data.toString())
// })
// // another method
// fs.readFile("sample.txt","utf8",(err,data)=>{
//     console.log(data)
// })

// // delete file 
// // unlink - it will delete the file
// fs.unlink("sample.txt",()=>{})

// handling error
// try {
//     fs.readFile("sample.tt","utf8",(err,data)=>{
//         if(err) throw err
//         console.log(data)
//     })    
// } catch (error) {
//     console.log(error.message)
// }

// process.on("uncaughtException",(err)=>{
//     console.log(err.message)
// }) // ENOENT: no such file or directory, open 'C:\Users\HP\Documents\SERVER\sample.tt'

// // creating an directory(folder)
// fs.mkdir("folder",(err)=>{});

// // to remove directory
// fs.rmdir("folder",(err)=>{})

// // EVENT LOOP - this is the asynchronous behaviour of js
// // here , main thread - line 62(console.log("Hello Everyone - outside")) , and 
// // the function call 56 goes to background(beacuse the time taken by this statement in largest) by the server so , it will run secondly
// // to read from sample2.txt
// // the fileRead operation happens in background
// fs.readFile("sample2.txt",(err,data)=>{
//     console.log(data.toString())
// })

// // it will print before the file content
// // beacuse , the fileRead operation happens in background
// console.log("Hello Everyone - outside")

// // to make this synchronous(sequential)
// const fileData = fs.readFileSync("sample2.txt","utf-8")
// console.log(fileData)
// console.log("outside")

// // another method - CALLBACK HELL
// fs.writeFile("sample3.txt","Hello this is sample3",()=>{
//     fs.appendFile("sample3.txt","\nappended text",()=>{
//         fs.readFile("sample3.txt","utf-8",(err,data)=>{
//             console.log(data)
//         })
//     })
// })

// another method using Sync
const a = fs.writeFileSync("sample4.txt","sample 4");
fs.appendFileSync("sample4.txt","appended");
const data4 = fs.readFileSync("sample4.txt","utf-8");
console.log(data4)
