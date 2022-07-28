const themeDefault = document.querySelector('.header__button1') 
const themeLight = document.querySelector('.header__button2') 
const themeDark = document.querySelector('.header__button3') 

const header = document.querySelector('.header')
const headerButtons = document.querySelector('.header__buttons')
const body = document.querySelector('.body')
const screen = document.querySelector('.screen')
const screenH = document.querySelector(".screen__h")
const grid = document.querySelector('.grid')
const numpad = document.querySelectorAll('.numpad')
const colorButton = document.querySelector('.color-button')
const equalButton = document.querySelector('.equal-button')



themeLight.addEventListener('click', () => {
    themeLight.classList.toggle('header__button2--2')
    themeDefault.classList.toggle('header__button1--2')
    header.classList.toggle('header--2')
    headerButtons.classList.toggle('header__buttons--2')
    body.classList.toggle('body--2')
    screen.classList.toggle('screen--2')
    screenH.classList.toggle('screen__h--2')
    grid.classList.toggle('grid--2')
    equalButton.classList.toggle('equal-button--2')
    colorButton.classList.toggle('color-button--2') 
    numpad.forEach(button => button.classList.toggle('numpad--2'))

});

themeDark.addEventListener('click', () => {
    themeLight.classList.toggle('header__button2--1')
    themeDefault.classList.toggle('header__button1--2')
    themeDark.classList.toggle('header__button3--3')
    header.classList.toggle('header--3')
    headerButtons.classList.toggle('header__buttons--3')
    body.classList.toggle('body--3')
    screen.classList.toggle('screen--3')
    screenH.classList.toggle('screen__h--3')
    grid.classList.toggle('grid--3')
    equalButton.classList.toggle('equal-button--3')
    colorButton.forEach(button => button.classList.toggle('color-button--3')) 
    numpad.forEach(button => button.classList.toggle('numpad--3'))
});



/*===================================Calculator============================================*/

let firstNumber = ""
let secondNumber = ""
let operator

function print(someString){
    String(someString)
    // if ((someString.includes("."))==true) {
    //     someString.replaceAll(".",",")
    // }
    console.log(someString);
}

function zero() {
    if (operator == undefined) {
        firstNumber += '0'
        print(firstNumber)
    } else {
        secondNumber += '0'
        print(secondNumber)
    }
}
function one() {
    if (operator == undefined) {
        firstNumber += '1'
        print(firstNumber)
    } else {
        secondNumber += '1'
        print(secondNumber)
    }
}
function two() {
    if (operator == undefined) {
        firstNumber += '2'
        print(firstNumber)
    } else {
        secondNumber += '2'
        print(secondNumber)
    }
}
function three() {
    if (operator == undefined) {
        firstNumber += '3'
        print(firstNumber)
    } else {
        secondNumber += '3'
        print(secondNumber)
    }
}
function four() {
    if (operator == undefined) {
        firstNumber += '4'
        print(firstNumber)
    } else {
        secondNumber += '4'
        print(secondNumber)
    }
}
function five() {
    if (operator == undefined) {
        firstNumber += '5'
        print(firstNumber)
    } else {
        secondNumber += '5'
        print(secondNumber)
    }
}
function six() {
    if (operator == undefined) {
        firstNumber += '6'
        print(firstNumber)
    } else {
        secondNumber += '6'
        print(secondNumber)
    }
}
function seven() {
    if (operator == undefined) {
        firstNumber += '7'
        print(firstNumber)
    } else {
        secondNumber += '7'
        print(secondNumber)
    }
}
function eight() {
    if (operator == undefined) {
        firstNumber += '8'
        print(firstNumber)
    } else {
        secondNumber += '8'
        print(secondNumber)
    }
}
function nine() {
    if (operator == undefined) {
        firstNumber += '9'
        print(firstNumber)
    } else {
        secondNumber += '9'
        print(secondNumber)
    }
}
function dot() {
    if (operator == undefined) {
        firstNumber += '.'
        print(firstNumber)
    } else {
        secondNumber += '.'
        print(secondNumber)
    }
}


function multiply() {
    operator = '*'
    print(operator)
}
function divide() {
    operator = '/'
    print(operator)
}
function minus() {
    operator = '-'
    print(operator)
}
function plus() {
    operator = '+'
    print(operator)
}

function reset() {
    operator =""
    firstNumber = ""
    secondNumber = ""
    result = ""
    print(firstNumber)
}

function del() {
    let arrayString
    if (secondNumber != "") {
        arrayString = Array.from(secondNumber)
        arrayString.pop()
        secondNumber = (String(arrayString).replaceAll(",",""))
        print(secondNumber)
    } else if (operator != undefined)
    {
        operator = ""
        print(operator)
    } else {
        arrayString = Array.from(firstNumber)
        arrayString.pop()
        firstNumber = (String(arrayString).replaceAll(",",""))
        print(firstNumber)
    }
}


let result 
function equal() {
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
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
            break;}
    secondNumber = ""
    firstNumber = ""
    operator = undefined
    print(result)
}

