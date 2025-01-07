// var data="value";
// data=1
// data=true
// data=[1,2,3,4]
// data={key:1}
// console.log(data);
// //
/*
string 

*/
// var itsString="hello there"

// console.log(itsString.length  );



// console.log(itsString.trim());
// itsString=itsString.trim()

// console.log(itsString.length  );

// console.log(itsString.lastIndexOf('l'))
// console.log("str"+"1");
// var newVar=123
// console.log(typeof   ""+newVar);
// console.log( typeof ${newVar});

// var newVar1=`rkrjfhjghf
// fjgsdkjfgksjdgf
// skjfhsdhjgfshdg  ${newVar}`
// console.log(newVar1);





//numbers
// var numHolder=123.45
// // console.log(Number.parseInt(numHolder));
// // var strHolder="123"
// // console.log(typeof Number(strHolder));
// // console.log(typeof +strHolder);

// //math
// // var intValue=123.4
// // console.log(Number.parseInt(Math.random()*100))
// // console.log(Math.abs(-123));
// // console.log(Math.sqrt(9));
// // Math.cbrt

// var booleanVar=false
// console.log(booleanVar);

// //undefined

// var dataType;
// console.log(dataType);

// //Null
// var dataType=null


//array

// var arrayVariable=[1,"str",{obj:1}]
// arrayVariable.shift()
// console.log(arrayVariable);


// var dataVar="hello"
// //olleh
// dataVar=dataVar.split("")
// dataVar=dataVar.reverse()
// dataVar=dataVar.join("")
// console.log(dataVar);

// for(declaration,condition,inc/dec)

// for(var i=5;i>0;i--){//0,1,2,3,4,5
// console.log(i);
// }

//while
// do{
//     console.log("hello")
// }while(false)

// var data=["apple","orange","pineapple","mango"].forEach
// ((i,k)=>{
//     console.log(k,i);

// })
//conditional statement
// var i=12

// if(i==2){
//     console.log("block 1 passed");

// }
// else if(i==3){
//     console.log("block 2 passed");

// }
// else if(i==10){
//     console.log("yes" + 10);

// }
// else{
//     console.log("nothing caught");

// }



// if(character=='a')
//     console.log("yes");
// else if(character=='e')
//     console.log("yes");
// else if(character=='i')
//     console.log("yes");
// else if(character=='o')
//         console.log("yes");
// else if(character=='u')
//     console.log("yes");
// else 
//     console.log("no");
// var character = prompt("enter the value :")
// character=character??"b"

//     switch (character) {
//         case 'a':
//         case 'e':   
//         case 'i':   
//         case 'o':   
//         case 'u':  
//         console.log('yes');
//          break;
//         default:
//             console.log("no");
    
//     }
var samplevar='v';


samplevar=samplevar=='a'?true:samplevar=='b'?true:false;

// var varname=condi?true:false;

// console.log(samplevar);

// var val=10

// function hello(){

//     console.log(val);
// }


// hello()

// console.log(eval(1+2-3+"7"));

//function _name(){}
// function sayHello(){
//     console.log("hello there");
    
// }
// sayHello()
// function multiple(value,value1)
// {

//   return value*value1
    
// }




// var answer=multiple(2,8,12)
// function multiple(value,value1,value2)
// {

//   return value*value1*value2
    
// }
// console.log(answer);

// console.log(check);

// var check=10;

// var check="string"
// console.log(check);
// let check1=10;
// let check1=20;
// console.log(check1);



// const varName=24
// varName=36
// console.log(varName);

//let /const varName=(parameter)=>{return}

// const addValue=(v1,v2)=>v1+v2

// console.log(

//     addValue(1,2)
// );

// const addElements = (myArray) => {
//     let sum = 0
//     myArray.forEach(i => {
//         sum += i
//     })
//     return sum
// }

// console.log( addElements([1, 2, 3, 4, 5]))

// console.log(answer);



// let compute=arr.map(i=>i+1)
// console.log(compute);
// console.log(arr);
// let compute=arr.filter(i=>i%2==0)
// console.log(compute);
// let compute =arr.some(i=>i<5)
// console.log(compute);

let testObj={name:"jhon",age:23};

// console.log(testObj.name);
// let {name:mo,age}=testObj
// console.log(mo,age);
let arr1=[1, 2, 3, 4, 5]

// let arr2=[...arr1,6,7]
// console.log(arr2);
// function rest(...value){

// }
const testObj1={name:"john",age:21}
Object.freeze(testObj1)
testObj1.name="doe"

console.log(testObj1);
