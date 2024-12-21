let calculation = ""
let text = document.getElementById("text")
let buttons = document.querySelectorAll("#btn");
let equal = document.getElementById("equal")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        text.innerText=calculation
    });
});

equal.addEventListener("click" , ()=>{
    try {
        calculation= eval(calculation)
        text.innerText = calculation
    } catch (error) {
        text.innerText = "error"
        calculation = " "
    }
 
})

