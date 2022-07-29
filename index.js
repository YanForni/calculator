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

themeDefault.addEventListener("click", () => {
  themeDefault.classList.remove("header__button1--inactive");
  themeDefault.classList.add("header__button1--active");
  themeLight.classList.remove("header__button2--active");
  themeLight.classList.add("header__button2--inactive");
  themeDark.classList.remove("header__button3--active");
  themeDark.classList.add("header__button3--inactive");

  header.classList.remove("header--2");
  header.classList.remove("header--3");
  headerButtons.classList.remove("header__buttons--2");
  headerButtons.classList.remove("header__buttons--3");
  body.classList.remove("body--3");
  body.classList.remove("body--2");
  screen.classList.remove("screen--2");
  screen.classList.remove("screen--3");
  screenH.classList.remove("screen__h--2");
  screenH.classList.remove("screen__h--3");
  grid.classList.remove("grid--2");
  grid.classList.remove("grid--3");
  equalButton.classList.remove("equal-button--2");
  equalButton.classList.remove("equal-button--3");
  numpad.forEach((button) => button.classList.remove("numpad--2"));
  numpad.forEach((button) => button.classList.remove("numpad--3"));
  colorButton.forEach((button) => button.classList.remove("color-button--2"));
  colorButton.forEach((button) => button.classList.remove("color-button--3"));

  header.classList.add("header--1");
  headerButtons.classList.add("header__buttons--1");
  body.classList.add("body--1");
  screen.classList.add("screen--1");
  screenH.classList.add("screen__h--1");
  grid.classList.add("grid--1");
  equalButton.classList.add("equal-button--1");
  numpad.forEach((button) => button.classList.add("numpad--1"));
  colorButton.forEach((button) => button.classList.add("color-button--1"));
});

themeLight.addEventListener("click", () => {
  themeDefault.classList.remove("header__button1--active");
  themeDefault.classList.add("header__button1--inactive");
  themeLight.classList.remove("header__button2--inactive");
  themeLight.classList.add("header__button2--active");
  themeDark.classList.remove("header__button3--active");
  themeDark.classList.add("header__button3--inactive");

  header.classList.remove("header--1");
  header.classList.remove("header--3");
  headerButtons.classList.remove("header__buttons--1");
  headerButtons.classList.remove("header__buttons--3");
  body.classList.remove("body--1");
  body.classList.remove("body--3");
  screen.classList.remove("screen--1");
  screen.classList.remove("screen--3");
  screenH.classList.remove("screen__h--1");
  screenH.classList.remove("screen__h--3");
  grid.classList.remove("grid--1");
  grid.classList.remove("grid--3");
  equalButton.classList.remove("equal-button--1");
  equalButton.classList.remove("equal-button--3");
  numpad.forEach((button) => button.classList.remove("numpad--1"));
  numpad.forEach((button) => button.classList.remove("numpad--3"));
  colorButton.forEach((button) => button.classList.remove("color-button--1"));
  colorButton.forEach((button) => button.classList.remove("color-button--3"));

  header.classList.add("header--2");
  headerButtons.classList.add("header__buttons--2");
  body.classList.add("body--2");
  screen.classList.add("screen--2");
  screenH.classList.add("screen__h--2");
  grid.classList.add("grid--2");
  numpad.forEach((button) => button.classList.add("numpad--2"));
  equalButton.classList.add("equal-button--2");
  colorButton.forEach((button) => button.classList.add("color-button--2"));
});

themeDark.addEventListener("click", () => {
  themeDefault.classList.remove("header__button1--active");
  themeDefault.classList.add("header__button1--inactive");
  themeLight.classList.remove("header__button2--active");
  themeLight.classList.add("header__button2--inactive");
  themeDark.classList.remove("header__button3--inactive");
  themeDark.classList.add("header__button3--active");

  header.classList.remove("header--2");
  header.classList.remove("header--1");
  headerButtons.classList.remove("header__buttons--2");
  headerButtons.classList.remove("header__buttons--1");
  body.classList.remove("body--1");
  body.classList.remove("body--2");
  screen.classList.remove("screen--2");
  screen.classList.remove("screen--1");
  screenH.classList.remove("screen__h--2");
  screenH.classList.remove("screen__h--1");
  grid.classList.remove("grid--2");
  grid.classList.remove("grid--1");
  equalButton.classList.remove("equal-button--2");
  equalButton.classList.remove("equal-button--1");
  numpad.forEach((button) => button.classList.remove("numpad--2"));
  numpad.forEach((button) => button.classList.remove("numpad--1"));
  colorButton.forEach((button) => button.classList.remove("color-button--2"));
  colorButton.forEach((button) => button.classList.remove("color-button--1"));

  header.classList.add("header--3");
  headerButtons.classList.add("header__buttons--3");
  body.classList.add("body--3");
  screen.classList.add("screen--3");
  screenH.classList.add("screen__h--3");
  grid.classList.add("grid--3");
  equalButton.classList.add("equal-button--3");
  numpad.forEach((button) => button.classList.add("numpad--3"));
  colorButton.forEach((button) => button.classList.add("color-button--3"));
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
