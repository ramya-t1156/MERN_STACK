// it will store to the local host untill we delete

// // for incrementing the value in local storage
// function refreshCount(){
//     console.log(localStorage.getItem("getBack"));
//     let a = localStorage.getItem("getBack");
//     a++;
//     localStorage.setItem("getBack",a);
// }
// refreshCount();

let val = localStorage.getItem("getCount")?localStorage.getItem("getCount"):0;
console.log(val);
localStorage.setItem("getCount",++val);
