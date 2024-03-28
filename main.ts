#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number- Done
// 2) User input for guessing number
// 3) Compare computer generated number with user input and show result

const randomNumber = Math.floor(Math.random() *6 + 1);
console.log("Welcome to Number Guessing Game:");
    const input = await inquirer.prompt([
        {
          name: "userGuessedNumber",
          type:  "number",
          message: "Please guess a number between 1-6:",
        }
    ]);
    console.log(input); 
    
if (input.userGuessedNumber === randomNumber){
    console.log("Congratulations! You have guessed right number.");
}else {
    console.log("Sorry! You guessed wrong number.");
}


