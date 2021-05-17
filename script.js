/*Retrieving html elements.*/
const display = document.querySelector('.display');
const inputs = document.querySelector('.inputs');

/*Variables for numbers and operators.*/
let num1 = '';
let num2 = '';
let operator = '';

/*Let's do the math!*/
function add(a, b) {
    answer = a + b;
}

function subtract(a, b) {
    answer = a - b;
}

function multiply(a, b) {
    answer = a * b;
}

function divide(a, b) {
    answer = a / b;
}

/*Calculating the answer.*/
function calculate(equals) {
    switch(operator){
        case '+':
            add(Number(num1), Number(num2));
            break;
        case '-':
            subtract(Number(num1), Number(num2));
            break;
        case '*':
            multiply(Number(num1), Number(num2));
            break;
        case '/':
            divide(Number(num1), Number(num2));
            break;
    }
    if(equals === true){
        display.textContent = display.textContent + '=' + answer;
    }
}

/*Functions for when inputs are clicked*/
function click(target) {
    if(target === inputs) return;
    switch(target.textContent){
        case '1':
            numInput(target.textContent)
            break;
        case '2':
            numInput(target.textContent)
            break;
        case '3':
            numInput(target.textContent)
            break;
        case '4':
            numInput(target.textContent)
            break;
        case '5':
            numInput(target.textContent)
            break;
        case '6':
            numInput(target.textContent)
            break;            
        case '7':
            numInput(target.textContent)
            break;
        case '8':
            numInput(target.textContent)
            break;
        case '9':
            numInput(target.textContent)
            break;
        case '0':
            numInput(target.textContent)
            break;
        case '.':
            numInput(target.textContent)
            break;
        case '+':
            operatorInput(target.textContent)
            break;
        case '-':
            operatorInput(target.textContent)
            break;            
        case '*':
            operatorInput(target.textContent)
            break;
        case '/':
            operatorInput(target.textContent)
            break;
        case '=':
            calculate(true);
            break;
        case 'Clear':
            clear();
            break;            
    }
}

//If the input is a number.
function numInput(inputString){
    display.textContent = display.textContent + inputString;
    if(operator === ''){
        num1 = num1 + inputString;
    } else {
        num2 = num2 + inputString;
    }
}

//If the input is an operator.
function operatorInput(inputString){
    if (operator !== '' && num2 === '' || num1 === '') {
        return;
    } else if(operator !== '' && num2 !== '') {
        calculate(false);
        num1 = answer;
        num2 = '';
        operator = inputString;
        display.textContent = display.textContent + inputString;
    } else {
        operator = inputString;
        display.textContent = display.textContent + inputString;
    }
}

//Clearing the display and resetting values.
function clear() {
    display.textContent = '';

    num1 = '';
    num2 = '';
    operator = '';
    answer;
}


/*Event listener for inputs.*/
inputs.addEventListener('click', (e) => click(e.target));