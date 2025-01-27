let link = document.getElementById("link")
console.log(link)

let btn = document.getElementById("btn")
console.log(btn)

let toDisplay = document.getElementById("qrCode")
console.log(toDisplay)

btn.addEventListener("click",(e)=>{
    // to prevent default behaviour
    e.preventDefault()
    if(link.value){
        getQRCode()
    }
    else{
        console.log("Enter the link")
    }
    // console.log("button clicked")
})

// // async - because we are going to get the API responce
// async function getQRCode(){
//     // await - waits for server response
//     let response = await fetch("http://localhost:2000/qr",{
//         method : "POST",
//         headers : {
//             "Content-Type" : "application/json"
//         },
//         body : JSON.stringify({data : link.value})
//     })
//     response = await response.json()
//     console.log(response)
//     toDisplay.innerHTML = "";
//     let img = document.createElement("img")
//     img.src = response
//     toDisplay.append(img)
// }



async function getQRCode(){
    // await - waits for server response
    let response = await fetch(`http://localhost:2000/qr?link=${link.value}`)
    response = await response.json()
    console.log(response)
    toDisplay.innerHTML = "";
    let img = document.createElement("img")
    img.src = response
    toDisplay.append(img)
}