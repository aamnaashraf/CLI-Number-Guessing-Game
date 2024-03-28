#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1) Computer will generate a random number- Done
// 2) User input for guessing number
// 3) Compare computer generated number with user input and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game:");
const input = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    }
]);
console.log(input);
if (input.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You have guessed right number.");
}
else {
    console.log("Sorry! You guessed wrong number.");
}
