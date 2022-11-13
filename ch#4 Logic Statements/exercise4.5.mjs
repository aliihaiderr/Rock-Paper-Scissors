/*1. Create a variable called prize and use a prompt to ask the user
to set the value by selecting a number between 0 and 10
2. Convert the prompt response to a number data type
3. Create a variable to use for the output message containing the
value " My Selection: "
4. Using the switch statement (and creativity), provide a response
back regarding a prize that is awarded depending on what
number is selected
5. Use the switch break to add combined results for prizes
6. Output the message back to the user by concatenating your
prize variable strings and the output message string  */

import PromptSync from "prompt-sync";
const prompt=PromptSync();

let prize=Number(prompt("select a number between 1 and 5 to get a Prize "));
let outputMessage=`My Selection is: ${prize} `;
let yourPrize;
switch(prize){
    case 1:        //here we are not use break because we combine both prizes
    case 2:
        yourPrize="you win a Audi A5 & cash $0.1 Million";
        break;
    case 3:
        yourPrize="you win a Yamaha R6";
        break;
    case 4:
    case 5:
        yourPrize="you win Honda Civic & cash Rs 1 Million";
        break;
}

console.log(`${outputMessage} and congratulations ${yourPrize}`);