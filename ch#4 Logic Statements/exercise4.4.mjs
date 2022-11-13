    /* 
       In this exercise, we'll create a Magic 8-Ball random answer generator:
        1.The value is assigned by generating a random number 0-5, for
        6 possible results. You can increase this number as you add more results.
        2. Create a prompt that can get a string value input from a user
        that you can repeat back in the final output.
        3. Create 6 responses using the switch statement, each assigned to
        a different value from the random number generator.  
        4. Create a variable to hold the end response, which should be a
        sentence printed for the user. You can assign different string
        values for each case, assigning new values depending on the
        results from the random value.
        5. Output the user's original question, plus the randomly selected
        case response, to the console after the user enters their question. */
import PromptSync from "prompt-sync";
const prompt=PromptSync();

let userInput=prompt("Ask tasks to do: ");
let randomNumber= Math.random() * 6;
randomNumber=Math.floor(randomNumber)+1;
let msg;
// console.log(randomNumber);
switch(randomNumber){
    case 1:
        msg="Its morning,breakfast time";
        // console.log(msg);
        break;
    case 2:
        msg="its 8Am,going to office";
        // console.log(msg);
        break;
    case 3:
        msg="its 1Pm, lunch break in office";
        // console.log(msg);
        break;
    case 4:
        msg="its 3Pm, time to submitted work";
        // console.log(msg);
        break;
    case 5:
        msg="it's 4pm, collaborate your work with others";
        // console.log(msg);
        break;
    case 6:
        msg="it's 5Pm, time to go home";
        // console.log(msg);
        break;
}

let endResponse=`${userInput} & system genrated message for you is " ${msg} "`;
console.log(endResponse);
