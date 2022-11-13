import randomInteger from 'random-int';
import PromptSync from 'prompt-sync';
// options are created in array
const choices=["Rock","Paper","Scissors"];
//console.log(choices.length);
// user choice
const promptMsg="Choose 0 for 'Rock' and 1 for 'Paper' and 2 for 'Scissors' ";
let outcome= "Ready to Play!";
//user input
const prompt=PromptSync();
const userInput=prompt(promptMsg);
const userChose=choices[userInput];
//console.log(userChose);
//computer choice
const computerChose=randomInteger(0,2);
const computerChoseName=choices[computerChose];
//console.log(computerChoseName); 
if(computerChoseName === userChose)
{
    outcome= "Tie";
}
else if(computerChoseName==="Rock" && userChose=== "Paper")
{
    outcome= "Player Wins";
}
else if(computerChoseName==="Rock" && userChose=== "Scissors")
{
    outcome= "Computer Wins";
}
else if(computerChoseName==="Paper" && userChose=== "Rock")
{
    outcome= "Computer Wins";
}
else if(computerChoseName==="Paper" && userChose=== "Scissors")
{
    outcome= "Player Wins";
}
else if(computerChoseName==="Scissors" && userChose=== "Rock")
{
    outcome= "Player Wins";
}
else if(computerChoseName==="Scissors" && userChose=== "Paper")
{
    outcome= "Computer Wins";
}
console.log("Player chooses: "+ userChose);
console.log("Computer chooses: "+ computerChoseName);
console.log(outcome);