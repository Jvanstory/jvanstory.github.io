let displayValue = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    resultDisplayed = false;
    updateDisplay();
}

function calculate() {
    try {
        const sanitizedInput = sanitizeInput(displayValue);
        const result = evaluateExpression(sanitizedInput);
        displayValue = result.toString();
        resultDisplayed = true;
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        resultDisplayed = true;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function sanitizeInput(input) {
    const allowedCharactersRegex = /[0-9+\-*/.]/g;
    return input.match(allowedCharactersRegex).join('');
}

function evaluateExpression(input) {
    const operators = ['+', '-', '*', '/'];
    const operatorRegex = new RegExp(`[${operators.join('')}]`);
    const parts = input.split(operatorRegex);

    if (parts.length !== 2) {
        throw new Error('Invalid expression');
    }

    const operator = input.match(operatorRegex)[0];
    const [num1, num2] = parts.map(parseFloat);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Division by zero');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('equals').addEventListener('click', function () {
        calculate();
    });
});
