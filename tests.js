const sum = (a,b) => a + b;

function sum2(x,y){
    return x+y
}
console.log(sum(3,7))
console.log(sum2(7,2))


/*#############################*/


const prompt = require("prompt-sync")({sigint: true});

let name  = prompt("Enter your name: ");

console.log("Hello ", Number(name))

console.log(typeof parseInt(name))