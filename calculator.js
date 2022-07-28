let firstNumber =[]
let secondNumber =[]
let operator

function zero() {
    if (operator == undefined) {
        firstNumber.push(0)
    } else {
        secondNumber.push(0)
    }
}
function one() {
    if (operator == undefined) {
        firstNumber.push(1)
    } else {
        secondNumber.push(1)
    }
}
function two() {
    if (operator == undefined) {
        firstNumber.push(2)
    } else {
        secondNumber.push(2)
    }
}
function three() {
    if (operator == undefined) {
        firstNumber.push(3)
    } else {
        secondNumber.push(3)
    }
}
function four() {
    if (operator == undefined) {
        firstNumber.push(4)
    } else {
        secondNumber.push(4)
    }
}
function five() {
    if (operator == undefined) {
        firstNumber.push(5)
    } else {
        secondNumber.push(5)
    }
}
function six() {
    if (operator == undefined) {
        firstNumber.push(6)
    } else {
        secondNumber.push(6)
    }
}
function seven() {
    if (operator == undefined) {
        firstNumber.push(7)
    } else {
        secondNumber.push(7)
    }
}
function eight() {
    if (operator == undefined) {
        firstNumber.push(8)
    } else {
        secondNumber.push(8)
    }
}
function nine() {
    if (operator == undefined) {
        firstNumber.push(9)
    } else {
        secondNumber.push(9)
    }
}
function dot() {
    if (operator == undefined) {
        firstNumber.push('.')
    } else {
        secondNumber.push('.')
    }
}


function multiply() {
    operator = '*'
}
function divide() {
    operator = '/'
}
function minus() {
    operator = '-'
}
function plus() {
    operator = '+'
}

function equal() {
    let firstString
    firstString = String(firstNumber).replaceAll(",","")
    firstNumber = Number(firstString)
    let secondString
    secondString = String(secondNumber).replaceAll(",","")
    secondNumber = Number(secondString)
    let result 
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;        
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            break;
    }
    
}

