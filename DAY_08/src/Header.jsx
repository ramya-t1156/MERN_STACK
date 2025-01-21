// import React from 'react'

// function Header(){
//     // currying - embeded functions
//     // console.log("currying");
//     // function curry(a){
//     //     return (b)=>{
//     //         console.log(a+b);
//     //     }
//     // }
//     // curry(10)(20)
//     // return (
//     //     <div>

//     //     </div>
//     // )

//     // const curry = (a)=>(b)=>a+b;
//     // console.log(curry(10)(20))

//     // temp
//     // late literals = backtick(``)
//     // function greet(greeting,symbol){
//     //     return `${greeting} ${this.name} ${symbol}`;
//     // }
//     // // console.log(greet("Hello","@"))
//     // const user = {name:"Ramya"}
//     // console.log(greet.call(user,"hello","!"))

//     // destructuring
//     // // Create an Object
//     // const person = {
//     //     firstName: "John",
//     //     lastName: "Doe",
//     //     age: 50
//     // };
    
//     // // Destructuring
//     // let {firstName, lastName} = person;

//     const person2 = {
//         firstName : "Ramya",
//         lastName : "T",
//         fullName : function(){
//             return this.firstName + " " + this.lastName;
//         }
//     }

//     const person3 = {
//         firstName : "Raja",
//         lastName : "T"
//     }

//     let fullName = person2.fullName.bind(person3);
//     console.log(fullName());
//     return (
//         <div>

//         </div>
//     )
// }

// export default Header



// nithyasree

// import React from 'react'
// const Header = () => {
//   return (
//     <div> 
//         <header class="bg-primary text-white w-screen fixed-top  row ">
//         <h1 class="display-4 d-md-inline text-center  text-md-start col-12 col-md-6">My Blog</h1>
//         <ul class="list-inline   col-12 col-md-6 list-none d-flex justify-content-around justify-content-md-end gap-5 align-items-center mt-4 ">
//             <li class="list-inline-item "><a class="text-white text-decoration-none" href="#">Home</a></li>
//             <li class="list-inline-item "><a class="text-white text-decoration-none" href="#">About</a></li>
//             <li class="list-inline-item "><a class="text-white text-decoration-none" href="#">Contact</a></li>
//         </ul>
//     </header> 
//     </div>
//   )
// }

// export default Header;

import React from 'react'

function Header(){
    // console.log("currying");
    // function curry(a){
    //     return (b)=>{
    //         console.log(a+b);
    //     }
    // }
    // curry(10)(20)

    // const curry=(a)=>(b)=>a+b ;
    // console.log(curry(10)(40));

    // function greet(greeting , symbol)
    // {
    //     let {name,age} = this;
    //     console.log(name,age);
        

    //     return `${name} ${age} ${greeting} `
    // }

    // const user={name:"nithya",age:20}
    // let {name,age} = user ;
    // console.log(name,age);

    // console.log(greet.call(user,"hello","!"));

//     const person ={
//         firstname : "John",
//         lastname : "Doe",
//         fullname : function()
//         {
//             return this.firstname + " " + this.lastname ;
//         }
//    }

//    const member = {
//     firstname : "Nithya",
//     lastname : "Sree"
//    }

//      const user2 = person.fullname.bind(member)
//      console.log(user2());
     
//      const user3 = person.fullname.apply(member)
//      console.log(user3);
     
    return (
        <div>

        </div>
    )
}

export default Header ;