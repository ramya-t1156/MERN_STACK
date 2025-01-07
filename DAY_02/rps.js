var ch = prompt("Choice (r/p/s) : ");
var ch2 = Math.floor(Math.random()*3);
var rem = ch2%3;//system's

switch(rem){
    case 0:
        ch2 = 'r';
        break;
    case 1:
        ch2 = 's';
        break;
    case 2:
        ch2 = 'p';
        break;
}
console.log("Your's choice : " + ch);
console.log("computer's choice : " + ch2);

if(ch==ch2){
    console.log("Draw");
}
else if((ch=='r' && ch2 == 's') ||(ch=='p' && ch2 == 'r') || (ch=='s' && ch2=='p')){
    console.log("You won")
}
else{
    console.log("you lost")
}
