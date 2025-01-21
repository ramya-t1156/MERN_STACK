// 1 . Functions

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
const add = function(a, b) {
    return a + b;
};
// // same
// const add = function add2(a, b) {
//     return a + b;
// };
console.log(add(5, 3)); // Output: 8

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // Output: 12

// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE executed!");
})(); // Output: IIFE executed!

(() => console.log("Arrow IIFE executed!"))(); // Output: Arrow IIFE executed!

// Anonymous Functions
setTimeout(function () {
    console.log("Anonymous function executed after 1 second.");
}, 1000);

// Higher-Order Functions
// Functions that accept other functions as arguments or return them.
function calculate(a,b,operation){
    return operation(a,b);
}
const result2 = calculate(4,5,(a,b)=>a+b);
console.log(result2)

// Recursive Functions
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Default Parameters
function greet(name = "Guest"){
    return `Hello , ${name}!`
}
console.log(greet())

// Rest Parameters
// Handle multiple arguments as an array.
function sum(...numbers){
    // if no parameters passed than it return 0
    return numbers.reduce((acc,num)=>(acc+num),0)
}
console.log(sum(1,2,3,4))
console.log(sum())

// Closure
// A function that retains access to its outer scope even when the outer function has finished executing.
function counter(){
    let count = 0;
    return(
        function(){
            count++
            return count
        }
    )
}
const a = counter()
console.log(a()) // 1
console.log(a()) // 2

const obj = {
    value : 10,
    dp : function(){
        console.log(this.value)
    },
    dp2 : ()=>{
        console.log(this.value)
    },
};
obj.dp();
obj.dp2();

// map
const nums = [1,2,3,4]
const sq = nums.map((x)=>x*x)
console.log(sq)


// Asynchronous Callback Example
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("Processing data...");
});
// Output:
// Fetching data...
// (after 2 seconds)
// Data fetched!
// Processing data...

function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6


// Using Spread to Pass Arguments
function multiply2(a, b, c) {
    return a * b * c;
}
const nums2 = [2, 3, 4];
console.log(multiply2(...nums2)); // Output: 24

// Using Rest to Collect Arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// A closure in JavaScript is a feature where an inner function has 
// access to the variables and scope of its outer function, 
// even after the outer function has finished executing. Closures are created 
// when a function is defined inside another function and references variables from the outer function.

function outer(a){
    return function inner(b){
        return a+b
    }
}
const a1 = outer(5)
console.log(a1(6))

// Example with Arrow Functions:
const createAdder = (x) => (y) => x + y;
const add5 = createAdder(5);
console.log(add5(10)); // Output: 15

