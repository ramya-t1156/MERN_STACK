var data = 7;
console.log(data);
//inline comments
/* multiline comments */

// type of variable 
//string 
var str = " I am Ramya ";
console.log("Name is " + str)
console.log(typeof str);
//string manipulations
console.log(str.length)

//based on space it will split the the string
//output : ['I', 'am', 'Ramya']
console.log(" ")
console.log(str.split(""))

//remove unusable white spaces
console.log(str.trim())
console.log(str.trim().length)

str = str.trim()

// to select one character
console.log(str.charAt(0))

// to search an charcter
console.log(str.indexOf('a'))
// to search from last
console.log(str.lastIndexOf('a'))

// concat two things
console.log("str"+1)

// convert int to string
var newVar = 123
console.log(newVar.toString())
// string type
console.log(typeof newVar.toString())
console.log(typeof ""+str)
// number type
console.log(typeof newVar+"")
// string type
console.log(typeof `${newVar}`)

// literal
// $ (literal) 
var newVar2 = `Hello hi how are you ${newVar}`;
console.log(newVar2)


// Numbers
var numHolder = 123.45;
console.log(Number.parseInt(numHolder));

var strHolder = "123";
console.log(typeof Number(strHolder));
console.log(typeof +strHolder);

// MATH
//round
var intVal = 123.45
// 123
console.log(Math.round(intVal))
intVal = 123.6
//124
console.log(Math.round(intVal))
// ceil
//124
console.log(Math.ceil(intVal))
// floor
//123
console.log(Math.floor(intVal))
//power
console.log(Math.pow(2,3))
//min
console.log(Math.min(1,6,5,7))
//max
console.log(Math.max(1,5,7))
//some random value
// bw 100
console.log(Math.random()*100)
//abs
console.log(Math.abs(-99.05))
//sqrt
console.log(Math.sqrt(4))
//cbrt
console.log(Math.cbrt(27))

//Boolean
var boolVal = true;
console.log(boolVal)

//undefined
var dataType;
console.log(dataType)

//null
var a = null;
console.log(a);

//array
var arrVar = [1,3,'Ramya',true,{obj:1}];
console.log(arrVar);
console.log(arrVar[2]);
// pushing of elements
arrVar.push("7");
console.log(arrVar);
// removing elements
// 7 will be removed
arrVar.pop()
console.log(arrVar);
// unshift - used to add an element at the 0th index
arrVar.unshift(10);
console.log(arrVar);
//shift - remove 0th index element
arrVar.shift();
console.log(arrVar);

// to Reverse an String
var str2 = "hello";
str2 =str2.split("");
str2 = str2.reverse();
// using join method to join the elements in an array
str2 = str2.join("");
console.log(str2)

// Interation in Java Script
//for loop
for(var i = 0;i<str2.length;i++){
    console.log(str2.charAt(i));
}
console.log("--------");
for(var j = 4;j>=0;j--){
    console.log(j);
}
console.log("--------");

//while loop
var k = 0 ;
while(k<5){
    console.log(++k);
}
console.log("--------");
k = 4;
while(k>=0){
    console.log(k--);
}
console.log("--------");

//do while
k = 0;
do{
    console.log(str2.charAt(k++));
}while(k<str2.length);
console.log("--------");

// for each loop
var item;
arrVar.forEach(item=>{
    console.log(item)
});
console.log("--------");

console.log("For each");
["apple","orange","hello"].forEach(item=>{
    console.log(item)
});
console.log("--------");

console.log("For each with index");
["apple","orange","hello"].forEach((item,k)=>{
    console.log(k,item)
});
console.log("--------");

// Conditional statements
i = 2;
if(0){
    console.log(arrVar);
}
else if(i==2){
    console.log("2")
}
else{
    console.log(false)
}

// vowel or consonant
var char = 'a';
//using if-else
if(char=='a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
    console.log(char + " is vowel");
}
else{
    console.log(char + " is consonant");
}
//using switch
switch(char){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(char + " is vowel");
        break;
    default:
        console.log(char + " is consonant")
}


// Reading input from the user 
// var name = prompt("Enter the value : ");
// console.log("Entered name is "+ name);

// ?? - used to check whether it is null or not
/*
The ?? operator in JavaScript is called the nullish coalescing operator. It is used to provide a default value 
when the left-hand operand is null or undefined. 
If the left-hand operand is any value other than null or undefined, it will be used instead.
*/
let temp = null;
var c = temp??"c";
console.log(c);

// == string 5 equal to num5
// === string 5 not equal to num 5
console.log('5'==5)//true
console.log('5'===5)//false

//ternary operator
var exp = 7>10?7:7<10?10:0;
console.log(exp);

// can access chg
if(1){
    var chg = 2;
}
console.log(chg);//2
//csn't access
// function a(){
//     var cs = 10;
// }
// console.log(cs);//error

// eval (consider string 7 as number 7)
console.log(eval(1+2-3+"7"))

// if number then true
console.log(!isNaN("12"))//true
console.log(isNaN("123"))//false
console.log(isNaN("a"))//true


// functions
/* 
types
->parameterized
->non-parameterized
function overloading
*/
function add(num){
    return num+10;
}
function mul(...args){
    return args[1]*2;
}
console.log(add(10));
console.log(mul(2,7));

// Hoisting in JavaScript
/*
Hoisting in JavaScript is a built-in behavior that moves the declarations of functions,
variables, classes, or imports to the top of their scope before the code is executed
*/
console.log(sub(5))
function sub(num){
    return 10-5;
}

console.log(maha);//undefined
var maha = 10;
console.log(maha);
// drawback
var maha = 12;
console.log(maha);

// New ways of declarations
/*

var - it can allow to redeclare same var again
let - let doesn't allow duplicate variable names
const - once the values are declared we can't modified

*/
let aa = 10;
// console.log(aa);
// let aa = 15; // lead to an Error


//Arrow Functions
/* syntax
let/const varName= (parameter)=>
{
    return 
}
*/

const addValue=(v1,v2)=>{
    return v1+v2;
}
console.log(addValue(1,2));

// Add elements in Array
const addElements = (num)=>{
    var total = 0;
    num.forEach(z=>{
        total += z;
    })
    return total;
}
console.log(addElements([2,5,6,3]))

// map function - used to apply and specific conditions to each elements in the array
let arr = [1,2,3,2];
let add2 = arr.map((i)=>(i+2));
console.log(add2);

//filter - returns the array elements which satisfies the given criteria
let gt3 = arr.filter(i=>i>=3);
console.log(gt3);
// to find/filter odd numbers
let odd = arr.filter(i=>i%2==1);
console.log(odd);

// Higher Order Functions
/*
Every Function - every() method executes a function for each array element
return true if the function returns true for all the array elements
*/
let gt2 = arr.every(i=>i>2);
console.log(gt2)
// some - if any one is true
let is3 = arr.some(i=>i>=3);
console.log(is3);

// Dict
let testObj = {name :"Ramya",age : 17};
//console.log(testObj.names);undefined
// destructuring
// let {name,age} = testObj;
// console.log(name,age);//Ramya 17
let {name:mo,age} = testObj;
console.log(mo,age);

//Array copy
//var arr2 = arr; // arr
var arr2 = [...arr,2,3];//[1, 2, 3, 2, 2, 3]
var arr3 = arr.concat(1);//[1, 2, 3, 2, 1]
console.log(arr3);

// function for unkonown no.of.Arguments
/*
function _name(){
    return;
}
*/
function mul(...args){
    return args[1]*2;
}
console.log(mul(2,7));

// constant
const az = 10;
// az = 5; // Uncaught TypeError: Assignment to constant variable.
console.log(az);



// STRING FUNCTIONS
// String Example
const str = "  Hello, JavaScript World!  ";

// Character Access
console.log(str.charAt(0));           // ' ' (first character)
console.log(str.charCodeAt(0));       // 32 (Unicode of space)
console.log(str[7]);                  // 'J'

// Searching
console.log(str.indexOf("JavaScript"));  // 9 (first occurrence)
console.log(str.lastIndexOf("o"));       // 22 (last occurrence)
console.log(str.includes("World"));      // true
console.log(str.startsWith("  H"));      // true
console.log(str.endsWith("!  "));        // true

// Extracting Substrings
console.log(str.slice(2, 7));            // 'Hello'
console.log(str.substring(2, 7));        // 'Hello'
console.log(str.substr(9, 10));          // 'JavaScript' (deprecated)

// Case Conversion
console.log(str.toLowerCase());          // '  hello, javascript world!  '
console.log(str.toUpperCase());          // '  HELLO, JAVASCRIPT WORLD!  '

// String Modification
console.log(str.trim());                 // 'Hello, JavaScript World!'
console.log(str.trimStart());            // 'Hello, JavaScript World!  '
console.log(str.trimEnd());              // '  Hello, JavaScript World!'
console.log(str.padStart(35, "-"));      // '-----  Hello, JavaScript World!  '
console.log(str.padEnd(35, "-"));        // '  Hello, JavaScript World!-----'
console.log(str.repeat(2));              // '  Hello, JavaScript World!    Hello, JavaScript World!  '

// Replacing
console.log(str.replace("World", "Universe"));  // '  Hello, JavaScript Universe!  '
console.log(str.replaceAll(" ", "-"));          // '--Hello,-JavaScript-World!--'

// Splitting and Joining
const splitString = str.trim().split(" ");
console.log(splitString);                // ['Hello,', 'JavaScript', 'World!']

// Comparison
console.log("a".localeCompare("b"));     // -1 (a < b in lexicographic order)



// ARRAY FUNCTIONS
// Array Example
const arr5 = [1, 2, 3, 4, 5, 3];

// Adding and Removing
arr.push(6);                    // Adds to the end
console.log(arr5);               // [1, 2, 3, 4, 5, 3, 6]

arr.pop();                      // Removes last element
console.log(arr5);               // [1, 2, 3, 4, 5, 3]

arr.unshift(0);                 // Adds to the beginning
console.log(arr5);               // [0, 1, 2, 3, 4, 5, 3]

arr.shift();                    // Removes first element
console.log(arr5);               // [1, 2, 3, 4, 5, 3]

// Accessing
console.log(arr5[0]);            // 1
console.log(arr5.at(-1));        // 3 (last element)

// Searching
console.log(arr5.indexOf(3));    // 2 (first occurrence)
console.log(arr5.lastIndexOf(3));// 5 (last occurrence)
console.log(arr5.includes(4));   // true

// Filtering and Finding
const filtered = arr5.filter(num => num > 3);
console.log(filtered);          // [4, 5]

const firstMatch = arr5.find(num => num > 3);
console.log(firstMatch);        // 4

const firstIndex = arr5.findIndex(num => num > 3);
console.log(firstIndex);        // 3

// Iterating
arr5.forEach(num => console.log(num * 2)); // Logs: 2, 4, 6, 8, 10, 6

// Mapping
const mapped = arr5.map(num => num * 2);
console.log(mapped);            // [2, 4, 6, 8, 10, 6]

// Reducing
const sum = arr5.reduce((total, num) => total + num, 0);
console.log(sum);               // 18

// Sorting and Reversing
const unsortedArr = [3, 1, 4, 2];
unsortedArr.sort();             // Sorts as strings by default
console.log(unsortedArr);       // [1, 2, 3, 4]

unsortedArr.reverse();
console.log(unsortedArr);       // [4, 3, 2, 1]

// Joining and Splitting
const joined = arr.join("-");
console.log(joined);            // '1-2-3-4-5-3'

// Flattening
const nestedArr = [1, [2, 3], [4, [5]]];
console.log(nestedArr.flat());  // [1, 2, 3, 4, [5]]
console.log(nestedArr.flat(2)); // [1, 2, 3, 4, 5]

// Testing
console.log(arr5.every(num => num > 0));  // true (all numbers > 0)
console.log(arr5.some(num => num > 4));  // true (at least one number > 4)

