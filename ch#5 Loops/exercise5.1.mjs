// /*In this exercise we will create a number guessing game that takes
// user input and replies based on how accurate the user's guess was.*/


import PromptSync from "prompt-sync";
const prompt=PromptSync();

let maxValue=5;
let randomNumber=Math.floor(Math.random()*maxValue)+1;
// console.log(randomNumber);

let status=false;

while (!status) {
    let userInput=Number(prompt(`please enter a number between 1 to ${maxValue} `));
    if (userInput === randomNumber) {
        status=true;
        console.log(`you won the game the number is ${randomNumber}`);
        
    }else if (userInput > randomNumber) {
        console.log("sorry your guess is too high");
    }else{
        console.log("your guess is too low");
    }   
}