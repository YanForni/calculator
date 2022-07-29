const themeDefault = document.querySelector(".header__button1");
const themeLight = document.querySelector(".header__button2");
const themeDark = document.querySelector(".header__button3");

const header = document.querySelector(".header");
const headerButtons = document.querySelector(".header__buttons");
const body = document.querySelector(".body");
const screen = document.querySelector(".screen");
const screenH = document.querySelector(".screen__h");
const grid = document.querySelector(".grid");
const numpad = document.querySelectorAll(".numpad");
const colorButton = document.querySelectorAll(".color-button");
const equalButton = document.querySelector(".equal-button");

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

function adding(theme) {
  header.classList.add(`header--${theme}`);
  headerButtons.classList.add(`header__buttons--${theme}`);
  body.classList.add(`body--${theme}`);
  screen.classList.add(`screen--${theme}`);
  screenH.classList.add(`screen__h--${theme}`);
  grid.classList.add(`grid--${theme}`);
  equalButton.classList.add(`equal-button--${theme}`);
  numpad.forEach((button) => button.classList.add(`numpad--${theme}`));
  colorButton.forEach((button) => button.classList.add(`color-button--${theme}`));
}

function removing(theme) {
  header.classList.remove(`header--${theme}`);
  headerButtons.classList.remove(`header__buttons--${theme}`);
  body.classList.remove(`body--${theme}`);
  screen.classList.remove(`screen--${theme}`);
  screenH.classList.remove(`screen__h--${theme}`);
  grid.classList.remove(`grid--${theme}`);
  equalButton.classList.remove(`equal-button--${theme}`);
  numpad.forEach((button) => button.classList.remove(`numpad--${theme}`));
  colorButton.forEach((button) => button.classList.remove(`color-button--${theme}`));
}

themeDefault.addEventListener("click", () => {
  themeDefault.classList.remove("header__button1--inactive");
  themeDefault.classList.add("header__button1--active");
  themeLight.classList.remove("header__button2--active");
  themeLight.classList.add("header__button2--inactive");
  themeDark.classList.remove("header__button3--active");
  themeDark.classList.add("header__button3--inactive");

  adding(1)
  removing(2)
  removing(3)
});

themeLight.addEventListener("click", () => {
  themeDefault.classList.remove("header__button1--active");
  themeDefault.classList.add("header__button1--inactive");
  themeLight.classList.remove("header__button2--inactive");
  themeLight.classList.add("header__button2--active");
  themeDark.classList.remove("header__button3--active");
  themeDark.classList.add("header__button3--inactive");

  adding(2)
  removing(1)
  removing(3)
});

themeDark.addEventListener("click", () => {
  themeDefault.classList.remove("header__button1--active");
  themeDefault.classList.add("header__button1--inactive");
  themeLight.classList.remove("header__button2--active");
  themeLight.classList.add("header__button2--inactive");
  themeDark.classList.remove("header__button3--inactive");
  themeDark.classList.add("header__button3--active");

  adding(3)
  removing(1)
  removing(2)
});

/*===================================Calculator============================================*/

function print(someString) {
  let something = String(someString);
  something = something.replaceAll(".", ",");
  console.log(something);
  screenH.innerText = `${something}`;
}

let firstNumber = "";
let secondNumber = "";
let operator;

numbers.forEach((button) => {
  button.addEventListener("click", (x) => {
    number(x.target.dataset.value);
  });
});

function number(x) {
    if (firstNumber === result && operator == undefined) {
        reset();
    }
    if (operator == undefined) {
        firstNumber += x;
        print(firstNumber);
    } else {
        secondNumber += x;
    print(secondNumber);
  }
}

operators.forEach((button) => {
    button.addEventListener("click", (op) => {
      operation(op.target.dataset.value);
    });
});

function operation(y) {
    if (operator != undefined) {
    equal();
    result = "";
    operator = y;
  } else {
    operator = y;
    print(operator);
  }
}

function dot() {
  if (firstNumber === result && operator == undefined) {
    reset();
  }
  let firstNumDot, secondNumDot, firstString, secondString;
  firstString = String(firstNumber)
  secondString = String(secondNumber)
  firstNumDot = !firstString.includes(".");
  secondNumDot = !secondString.includes(".");
  if (operator == undefined && firstNumDot) {
    firstNumber += ".";
    print(firstNumber);
  } else if (operator != undefined && secondNumDot) {
    secondNumber += ".";
    print(secondNumber);
  } else if (operator == undefined) {
    print(firstNumber);
  } else {
    print(secondNumber);
  }
}

function reset() {
  operator = undefined;
  firstNumber = "";
  secondNumber = "";
  result = "";
  print(firstNumber);
}

function del() {
  let arrayString;
  if (secondNumber != "") {
    arrayString = Array.from(secondNumber);
    arrayString.pop();
    secondNumber = String(arrayString).replaceAll(",", "");
    print(secondNumber);
  } else if (operator != undefined) {
    operator = undefined;
    print(firstNumber);
  } else if (operator == undefined) {
    arrayString = Array.from(firstNumber);
    arrayString.pop();
    firstNumber = String(arrayString).replaceAll(",", "");
    print(firstNumber);
  }
}

let result;

function equal() {
  if (firstNumber == "." || firstNumber == "") {
    firstNumber = 0;
  }
  firstNumber = Number(firstNumber);
  if (secondNumber == "." || secondNumber == "") {
    secondNumber = 0;
  }
  secondNumber = Number(secondNumber);
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      break;
  }
  secondNumber = "";
  firstNumber = result;
  operator = undefined;
  print(result);
}
