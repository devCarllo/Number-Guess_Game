"use strict";
const randomNumber = Math.ceil(Math.random() * 100);
let countGuess = 0;

const result = () => {
  const userNumber = prompt("Enter a number between 1 and 100");

  if (userNumber === null || userNumber === "") return;

  if (countGuess > 9) {
    console.log("You could not guess the number");
    return;
  }

  const validNumber = numberValidation(userNumber);

  if (validNumber) {
    console.log(validNumber);
    return result();
  }
  userGuess(+userNumber);
};

const userGuess = (guess) => {
  countGuess++;
  if (guess === randomNumber) {
    console.log("The Random Number is: ", randomNumber);
    console.log("You Enter True Number");
  } else if (guess > randomNumber) {
    console.log("You Enter Larger Number");
    result();
  } else {
    console.log("You Enter Smaller Number");
    result();
  }
};

const numberValidation = (value) => {
  if (isNaN(value) || +value > 100 || +value < 0)
    return "The value entered is not valid";
};
result();
