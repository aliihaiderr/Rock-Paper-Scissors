// We are going to create a program that will randomly describe an inputted name.

import PromptSync from "prompt-sync";
const prompt=PromptSync();

let array=["hello","hi","how are you","whatsUp"];

function userName(){
    let name=prompt("Please enter your name ");
    let value=Math.floor(Math.random()*array.length);
    console.log(array[value],name);
}

userName();