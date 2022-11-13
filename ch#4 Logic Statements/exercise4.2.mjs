/*1. Create a prompt to ask the user's age
    2. Convert the response from the prompt to a number
    3. Declare a message variable that you will use to hold the console
    message for the user
    4. If the input age is equal to or greater than 21, set the message
    variable to confirm entry to a venue and the ability to purchase
    alcohol
    5. If the input age is equal to or greater than 19, set the message
    variable to confirm entry to the venue but deny the purchase of
    alcohol
    6. Provide a default else statement to set the message variable to
    deny entry if none are true
    7. Output the response message variable to the console */

import PromptSync from "prompt-sync";
const prompt=PromptSync();

let userAge=Number(prompt("Please enter your age."));
// console.log(age);
let msg;
if(userAge >= 21){
    msg="Congratulations,your entery is confirm and you can purchase any drink...enjoy";
    console.log(msg);
}
else if(userAge >= 19){
    msg="Your entery is confirm but you cannot purchase any drink. ";
    console.log(msg);
}else{
    msg="we are sorry...!you have no permission to the venue. ";
    console.log(msg);
}
// let age=15;                            //ternary operator
// let access = age < 18 ? "denied" : "allowed";
// console.log(access);