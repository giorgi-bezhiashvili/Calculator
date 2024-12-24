let calculation = localStorage.getItem("eqiation") || ""
let text = document.getElementById("text")
let buttons = document.querySelectorAll("#btn");
let equal = document.getElementById("equal")

text.innerText = localStorage.getItem("eqiation") || " "


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        text.innerText=calculation
        localStorage.setItem("eqiation" , calculation)

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
    localStorage.setItem("eqiation" , calculation)
 
})

