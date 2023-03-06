//creates a string to input the numbers
let equation = "";
      
//adds the button's value that was pressed to the string in equation and displays it
function display(number) {
    equation += number;
    document.getElementById('numbers').innerHTML = equation;
}
      
//replaces the current string in equations with a blank one
function clearNumbers() {
    equation = "";
    document.getElementById('numbers').innerHTML = equation;
}
      
//takes the inputed buttons that are in the display/equation and evaluates the equation using eval()
function calculate() {
    let result = eval(equation);
    document.getElementById('numbers').innerHTML = result;
    equation = result;
}