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
    localStorage.setItem("eqiation" , calculation) //add in localstorage
 }
const removeLastButton = document.getElementById("removeLast");




//get from localstoarage and if it not exists get empty string
text.innerText = localStorage.getItem("eqiation") || " "


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        text.innerText=calculation
        localStorage.setItem("eqiation" , calculation)

    });

});

//function for equal button
equal.addEventListener("click" , ()=>{
    equalfun()
})

//calculator on keyboard
document.body.addEventListener("keydown", (event) => {
    const key = event.key;
  
    if (key === "Enter") {
      equalfun();
    } else if (key === "c") {
      calculation = "";
      text.innerText = "Numbers";
    } else if ("0123456789+-*/().".includes(key)) {
      calculation += key;
      text.innerText = calculation;
    } else if (key === "Backspace") {
      calculation = calculation.toString(); // Ensure calculation is a string
      calculation = calculation.slice(0, -1); // Remove the last character
      text.innerText = calculation || "Numbers"; // Update the display
      localStorage.setItem("eqiation", calculation); // Update local storage
    }
  });
  
removeLastButton.addEventListener("click", () => {
    if (calculation.length > 0) {
      calculation = calculation.slice(0, -1); // Remove the last character
      text.innerText = calculation || "Numbers"; 
      localStorage.setItem("eqiation", calculation); 
    }
  });
