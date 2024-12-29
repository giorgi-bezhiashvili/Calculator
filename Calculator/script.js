//variables
let calculation = localStorage.getItem("eqiation") || ""
let text = document.getElementById("text")
let buttons = document.querySelectorAll("#btn");
let equal = document.getElementById("equal")
let equalfun = function(){
    try {
        calculation= eval(calculation)
        text.innerText = calculation
    } catch (error) {
        text.innerText = "error"
        calculation = " "
    }
    //save to localstorage
    localStorage.setItem("eqiation" , calculation)
 }

//get to local storage and if localstoage isn't there get empty string
text.innerText = localStorage.getItem("eqiation") || " "


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        text.innerText=calculation
        localStorage.setItem("eqiation" , calculation)

    });

});

//equal button function
equal.addEventListener("click" , ()=>{
    equalfun()
})

//Keyboard
document.body.addEventListener("keydown" , ()=>{
    
    const key = event.key
    if(event.key === "Enter"){
        equalfun()
    }
    if (event.key === "c") {
        calculation = ""
        text.innerText = "Numbers"
    }else if("1234567890+-*/.".includes(key)){
        calculation += key
        text.innerText = calculation
    }
    
})

