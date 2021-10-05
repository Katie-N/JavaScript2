// Katie Nordberg
// 10/4/2021

let userNumber;

document.getElementById("calculate").addEventListener("click", assignValues);

function assignValues () {
  userNumber = parseInt(document.getElementById("num").value);
  add();
  subtract();
  multiply();
  divide();
}

function add () {
  // initial value
  let currentEquation = "1 + " + userNumber + " = " + (1 + userNumber) + "<br>";
  for (let i = 2; i < 10; i++) {
    currentEquation += i + " + " + userNumber + " = " + (i + userNumber) + "<br>";
  }
  document.getElementById("addition").innerHTML = currentEquation;
}

function subtract () {
  // initial value
  let currentEquation = "1 - " + userNumber + " = " + (1 - userNumber) + "<br>";

  let i = 2;
  while (i < 10) {
    currentEquation += i + " - " + userNumber + " = " + (i - userNumber) + "<br>";
    i++;
  }
  document.getElementById("subtraction").innerHTML = currentEquation;
}

function multiply () {
  // initial value
  let currentEquation = "1 * " + userNumber + " = " + (1 * userNumber) + "<br>";

  let i = 2;
   do {
    currentEquation += i + " * " + userNumber + " = " + (i * userNumber) + "<br>";
    i++;
  } while (i < 10)
  document.getElementById("multiplication").innerHTML = currentEquation;
}

function divide () {
  // initial value
  let currentEquation = "1 / " + userNumber + " = " + (1 / userNumber).toFixed(2) + "<br>";
  for (let i = 2; i < 10; i++) {
    currentEquation += i + " / " + userNumber + " = " + (i / userNumber).toFixed(2) + "<br>";
  }
  document.getElementById("division").innerHTML = currentEquation;
}
