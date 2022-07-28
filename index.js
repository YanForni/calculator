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
const colorButton = document.querySelectorAll('.color-button')
const equalButton = document.querySelector('.equal-button')

themeDefault.addEventListener('click', () => {
    themeDefault.classList.remove('header__button1--inactive')
    themeDefault.classList.add('header__button1--active')
    themeLight.classList.remove('header__button2--active')
    themeLight.classList.add('header__button2--inactive')
    themeDark.classList.remove('header__button3--active')
    themeDark.classList.add('header__button3--inactive')

    header.classList.remove('header--2')
    header.classList.remove('header--3')
    headerButtons.classList.remove('header__buttons--2')
    headerButtons.classList.remove('header__buttons--3')
    body.classList.remove('body--3')
    body.classList.remove('body--2')
    screen.classList.remove('screen--2')
    screen.classList.remove('screen--3')
    screenH.classList.remove('screen__h--2')
    screenH.classList.remove('screen__h--3')
    grid.classList.remove('grid--2')
    grid.classList.remove('grid--3')
    equalButton.classList.remove('equal-button--2')
    equalButton.classList.remove('equal-button--3')
    numpad.forEach(button => button.classList.remove('numpad--2'))
    numpad.forEach(button => button.classList.remove('numpad--3'))
    colorButton.forEach(button => button.classList.remove('color-button--2'))
    colorButton.forEach(button => button.classList.remove('color-button--3'))
    
    header.classList.add('header--1')
    headerButtons.classList.add('header__buttons--1')
    body.classList.add('body--1')
    screen.classList.add('screen--1')
    screenH.classList.add('screen__h--1')
    grid.classList.add('grid--1')
    equalButton.classList.add('equal-button--1')
    numpad.forEach(button => button.classList.add('numpad--1'))
    colorButton.forEach(button => button.classList.add('color-button--1'))
});

themeLight.addEventListener('click', () => {
    themeDefault.classList.remove('header__button1--active')
    themeDefault.classList.add('header__button1--inactive')
    themeLight.classList.remove('header__button2--inactive')
    themeLight.classList.add('header__button2--active')
    themeDark.classList.remove('header__button3--active')
    themeDark.classList.add('header__button3--inactive')

    header.classList.remove('header--1')
    header.classList.remove('header--3')
    headerButtons.classList.remove('header__buttons--1')
    headerButtons.classList.remove('header__buttons--3')
    body.classList.remove('body--1')
    body.classList.remove('body--3')
    screen.classList.remove('screen--1')
    screen.classList.remove('screen--3')
    screenH.classList.remove('screen__h--1')
    screenH.classList.remove('screen__h--3')
    grid.classList.remove('grid--1')
    grid.classList.remove('grid--3')
    equalButton.classList.remove('equal-button--1')
    equalButton.classList.remove('equal-button--3')
    numpad.forEach(button => button.classList.remove('numpad--1'))
    numpad.forEach(button => button.classList.remove('numpad--3'))
    colorButton.forEach(button => button.classList.remove('color-button--1'))
    colorButton.forEach(button => button.classList.remove('color-button--3'))

    header.classList.add('header--2')
    headerButtons.classList.add('header__buttons--2')
    body.classList.add('body--2')
    screen.classList.add('screen--2')
    screenH.classList.add('screen__h--2')
    grid.classList.add('grid--2')
    numpad.forEach(button => button.classList.add('numpad--2'))
    equalButton.classList.add('equal-button--2')
    colorButton.forEach(button => button.classList.add('color-button--2'))
});

themeDark.addEventListener('click', () => {
    themeDefault.classList.remove('header__button1--active')
    themeDefault.classList.add('header__button1--inactive')
    themeLight.classList.remove('header__button2--active')
    themeLight.classList.add('header__button2--inactive')
    themeDark.classList.remove('header__button3--inactive')
    themeDark.classList.add('header__button3--active')

    header.classList.remove('header--2')
    header.classList.remove('header--1')
    headerButtons.classList.remove('header__buttons--2')
    headerButtons.classList.remove('header__buttons--1')
    body.classList.remove('body--1')
    body.classList.remove('body--2')
    screen.classList.remove('screen--2')
    screen.classList.remove('screen--1')
    screenH.classList.remove('screen__h--2')
    screenH.classList.remove('screen__h--1')
    grid.classList.remove('grid--2')
    grid.classList.remove('grid--1')
    equalButton.classList.remove('equal-button--2')
    equalButton.classList.remove('equal-button--1')
    numpad.forEach(button => button.classList.remove('numpad--2'))
    numpad.forEach(button => button.classList.remove('numpad--1'))
    colorButton.forEach(button => button.classList.remove('color-button--2'))
    colorButton.forEach(button => button.classList.remove('color-button--1'))
    
    header.classList.add('header--3')
    headerButtons.classList.add('header__buttons--3')
    body.classList.add('body--3')
    screen.classList.add('screen--3')
    screenH.classList.add('screen__h--3')
    grid.classList.add('grid--3')
    equalButton.classList.add('equal-button--3')
    numpad.forEach(button => button.classList.add('numpad--3'))
    colorButton.forEach(button => button.classList.add('color-button--3'))
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
    screenH.innerText = `${someString}`
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
    operator = undefined
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

