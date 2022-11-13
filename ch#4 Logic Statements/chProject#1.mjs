/*Evaluating a number game
Ask the user to enter a number and check whether it's greater than,
equal to, or less than a dynamic number value in your code. Output
the result to the user.  */

import PromptSync from "prompt-sync";
const prompt=PromptSync();

let number=Number(prompt("please enter any number "));

if (number >= 25) {
    console.log(`your number "${number}" is greater than 25`);
}else
    {
        console.log(`your number "${number}" is less than 25`);
    }