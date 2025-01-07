//EXCEPTION HANDLING

// new Error("yes you are not allowed")

/*try{

}catch(e){

}*/

// // EVENT LISTENERS
// // single click
// let button1 = document.getElementById("button");
// button1.addEventListener("click",()=>{
//     alert("you have clicked a button");
// })

// //double click
// let button2 = document.getElementById("button");
// button2.addEventListener("dblclick",()=>{
//     alert("you have clicked a button two times");
// })

// // we have to give [0] because it is an class
// // if let parent = document.getElementsByClassName("div1") => throw an error
// let parent = document.getElementsByClassName("div1")[0];
// parent.addEventListener("click",()=>{
//     alert("you clicked the parent")
// })

// let child1 = document.getElementsByClassName("child1")[0];
// parent.addEventListener("click",()=>{
//     alert("you clicked the child1")
// })

// let child2 = document.getElementsByClassName("child2")[0];
// parent.addEventListener("click",()=>{
//     alert("you clicked the child2")
// })
// // here, if we run this then Event bubbling will occur 
// // ie. all events are accurs sequently without we click the childs


// //so, we have to give like the following 
// // e.stopPropagation()
// let parent = document.getElementsByClassName("div1")[0];
// parent.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     alert("you clicked the parent")
// })

// let child1 = document.getElementsByClassName("div2")[0];
// child1.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     alert("you clicked the child1")
// })

// let child2 = document.getElementsByClassName("div3")[0];
// // making anonymous function to function with name
// const event2 = (e)=>{
//     e.stopPropagation();
//     alert("you clicked the child2")
// }

// child2.addEventListener("click",event2);
// // remove event listener
// // to check remove
// const remove=()=>{
//     child2.removeEventListener("click",event2);
// }


//MOUSE EVENTS
// to add mouse events for the button
let m = document.getElementById("button");
m.addEventListener("mousedown",()=>{
    alert("mousedown event")
})
//mouseup/mousedown

// KEYBOARD EVENTS
const catchKeyboard = (e)=>{
    console.log(e.key)
}
window.addEventListener("keydown",catchKeyboard);
// window.addEventListener("keyup",catchKeyboard);

//e.preventDefault()
