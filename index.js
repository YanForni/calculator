const themeDefault = document.querySelector('.header__button1') 
const themeLight = document.querySelector('.header__button2') 
const themeDark = document.querySelector('.header__button3') 

const header = document.querySelector('.header')
const headerButtons = document.querySelector('.header__buttons')
const body = document.querySelector('.body')
const screen = document.querySelector('.screen')
const screenH = document.querySelector(".screen__h")
const grid = document.querySelector('.grid')
const numpad = document.querySelector('.numpad')
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
    numpad.classList.toggle('numpad--2')
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
    numpad.classList.toggle('numpad--3')
    colorButton.classList.toggle('color-button--3') 
});

