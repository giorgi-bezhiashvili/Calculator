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
    localStorage.setItem("eqiation" , calculation) //add in local stoaage
 }
const removeLastButton = document.getElementById("removeLast");

//get value from localstorage and if it does't exist get empty string
text.innerText = localStorage.getItem("eqiation") || " "


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        text.innerText=calculation
        localStorage.setItem("eqiation" , calculation)

    });

});

//equal button
equal.addEventListener("click" , ()=>{
    equalfun()
})


//to work on keyboard
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
    }else if (key === "Backspace") {
    calculation = calculation.slice(0, -1); // Remove the last character
    text.innerText = calculation || "Numbers"; // Update the display
    localStorage.setItem("eqiation", calculation); // Update local storage
  }
    
})
removeLastButton.addEventListener("click", () => {
    if (calculation.length > 0) {
      calculation = calculation.slice(0, -1);
      text.innerText = calculation || "Numbers"; 
      localStorage.setItem("eqiation", calculation); 
    }
  });
