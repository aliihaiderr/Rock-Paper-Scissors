//Rock Paper Scissors game
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
import randomInteger from 'random-int';
import PromptSync from 'prompt-sync';
const prompt=PromptSync();
let choices=["Rock","Paper","Scissors"];
const userMessage= "Press 0 for 'Rock',1 for 'Paper',& 2 for 'Scissors' ";
let result;
//user choice
let userChoice=Number(prompt(userMessage));
userChoice=choices[userChoice];
// console.log(userChoice);
//computer choice
let computerChoice= randomInteger(0,2);  //here we use node function randomInteger for random number
computerChoice=choices[computerChoice];
// console.log(computerChose);
if (userChoice === computerChoice) 
        {
            result="The Game is Tie";
        }
    else if (userChoice==="Rock" && computerChoice==="Scissors")
        {
            result="Player Win";
        }
    else if (userChoice==="Paper" && computerChoice==="Rock") 
        {
            result="Player Win";
        }
    else if (userChoice==="Scissors" && computerChoice==="Paper") 
        {
            result="Player Win";
        }
    else if (userChoice==="Scissors" && computerChoice==="Rock") 
        {
            result="Computer Win";
        }
    else if (userChoice==="Rock" && computerChoice==="Paper") 
        {
            result="Computer Win";
        }
    else if (userChoice==="Paper" && computerChoice==="Scissors") 
        {
            result="Computer Win";
        }
    console.log(`Player choses ${userChoice} & Computer choses ${computerChoice}`);
    console.log(result);