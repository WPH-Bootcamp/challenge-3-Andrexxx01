"use strict";

let prompt = require("prompt-sync")();

//User Input Handling

let getValidNumberInput = function (promptMessage) {
  let num;
  do {
    num = prompt(promptMessage);
    if (isNaN(num) || num.trim() === "") {
      console.log(`That's not a valid number ! Please enter a valid number.`);
    }
  } while (isNaN(num) || num.trim() === "");
  return Number(num);
};

let getValidOperatorInput = function (promptMessage) {
  let operator;
  const validOperator = ["+", "-", "*", "/", "%", "**"];
  do {
    operator = prompt(promptMessage);
    if (!validOperator.includes(operator)) {
      console.log(
        `Invalid Operator! Please enter a valid operator (+, -, *, /, % or **).`
      );
    }
  } while (!validOperator.includes(operator));
  return operator;
};

//Basic Arithmetic Operation

const add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) {
    console.log(`Error: Division by zero!`);
  } else {
    return a / b;
  }
};

const modulo = function (a, b) {
  return a % b;
};

const power = function (a, b) {
  return a ** b;
};

//Main Calculator Logic

let calculatorProcess = true;
while (calculatorProcess) {
  console.log(`
 __________
| ________ |
||12345678||
|""""""""""|
|[M|#|C][-]|
|[7|8|9][+]|
|[4|5|6][x]|
|[1|2|3][%]|
|[.|O|:][=]|
"----------"`);
  console.log(`Welcome to the Calculator App!`);
  let num1 = getValidNumberInput("Enter the first number:");
  let num2 = getValidNumberInput("Enter the second number:");
  let operator1 = getValidOperatorInput(
    "Choose your Operator (+, -, *, /, %, **)"
  );
  let result;
  switch (operator1) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = substract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      console.log(`Invalid operator`);
      break;
  }

  //Data Type Analysis  & Conditional Output

  console.log(`The Result: ${result}`);

  if (typeof result === "number") {
    let analysis = "";

    // Check if the number is positive, negative, or zero

    analysis += result > 0 ? "Positive" : result < 0 ? "Negative" : "Zero";

    // Check if the number is an integer or float

    analysis += result % 1 === 0 ? " and Integer" : " and Floating-point";

    // Use ternary operator to check if it's even or odd

    analysis +=
      result % 2 === 0 ? " and Even" : result % 1 !== 0 ? "" : " and Odd";

    console.log(`Analysis: ${analysis}`);
  } else if (typeof result === "string") {
    // Handle string results (such as error messages)

    console.log(`Error: ${result}`);
  } else {
    // Handle undefined or null results

    console.log(`Result is undefined or null, something went wrong!`);
  }

  // Ask if the user wants to perform another calculation

  const continueCalculation = prompt(
    "Do you want to perform another calculation? (yes/no)"
  ).toLowerCase();
  if (continueCalculation === "no") {
    console.log("Thank you for using the calculator!");
    break; // Exit the loop if the user says 'no'
  }
}
