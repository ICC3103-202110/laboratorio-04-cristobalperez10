
const prompt = require("prompt-sync")({sigint: true});

let msg  = prompt("Enter + or -: ");

function view(counter){
    return "Count: " + counter
    + "\n(+) (-)" + "\n(q) for quit"
    + "\nWhat would you do? "
}

function update(msg,counter){
    if(msg == "+"){return counter + 1}
    if(msg == "-"){return counter - 1}
    else{return counter}
}


//console.log(view(4))
console.log(update(msg,50))


