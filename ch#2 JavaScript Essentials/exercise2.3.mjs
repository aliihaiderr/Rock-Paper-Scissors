/*You can use prompt() to get the value for a and b. Write code to get
        the value from the user for a and b . Then square the values of both
        a and b before adding them together and finding the square root.
        Print your answer to the console.
         */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let a = prompt("Please enter the value of A : ");
let b = prompt("Please enter the value of B : ");

a = Number(a) ** 2;
b = Number(b) ** 2;

let hypotenuseVal = (a + b) ** 0.5;
console.log(hypotenuseVal);
