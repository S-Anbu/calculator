import './style.css'

const outputScreen = document.getElementById("output-screen");
function display(input) {
    outputScreen.value += input;
}
function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch {
        alert('invalid input')
    }
}
function clear() {
    outputScreen.value = "";

}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}