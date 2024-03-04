/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.getElementById("convert");
const inputNumber = document.getElementById("inputNumber");
let mtr = document.getElementById("mtr-con");
let ltr = document.getElementById("ltr-con");
let kilo = document.getElementById("kilo-con");

convert.addEventListener("click", function () {
    let mtrValue = 0;
    let feetValue = 0;
    let ltrValue = 0;
    let gallonValue = 0;
    let poundValue = 0;
    let kiloValue = 0;
    let number = inputNumber.value;
    mtrValue = (Number(number)*3.281).toFixed(3);
    feetValue = (Number(number)/3.281).toFixed(3);
    ltrValue = (Number(number)*0.264).toFixed(3);
    gallonValue = (Number(number)/0.264).toFixed(3);
    poundValue = (Number(number)*2.204).toFixed(3);
    kiloValue = (Number(number)/2.204).toFixed(3);
    
    mtr.textContent = `${number} meters = ${mtrValue} feet | ${number} feet = ${feetValue} meters`;
    ltr.textContent = `${number} liters = ${ltrValue} gallon | ${number} gallon = ${gallonValue} liters`;
    kilo.textContent = `${number} kilos = ${kiloValue} pound | ${number} pound = ${poundValue} kilo`;
});
