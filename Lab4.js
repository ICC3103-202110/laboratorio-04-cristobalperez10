const prompt = require("prompt-sync")({sigint: true});

function view(counter){
    return "Count: " + counter
    + "\n(+) (-)"
    + "\nWhat would you do? "
}

function update(msg,counter){
    if(msg == "+"){return counter + 1}
    if(msg == "-"){return counter - 1}
    else{return counter}
}

function app(counter){
    while(true){
        const currentView = view(counter)
        console.clear()
        console.log(currentView)
        const msg  = prompt("Enter + or -: ")
        counter = update(msg,counter)
    }
}

app(0)


