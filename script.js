let display = document.getElementById("display");
let memory = 0;

button.innerHtml+=btn;
function clearDisplay() {
    display.innerText = "0";
}

function Number(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function Operator(operator) {
    display.innerText += " " + operator + " ";
}

function Dot() {
    if (!display.innerText.includes(".")) {
        display.innerText += ".";
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

function memoryClear() {
    memory = 0;
}

function memoryAdd() {
    memory += parseFloat(display.innerText);
}

function memorySubtract() {
    memory -= parseFloat(display.innerText);
}