/*Friend checker game
    Ask the user to enter a name, using the switch statement to return a
    confirmation that the user is a friend if the name selected is known
    in the case statements. You can add a default response that you don't
    know the person if it's an unknown name. Output the result into the
    console. */
import PromptSync from "prompt-sync";
const prompt=PromptSync();

let friendName=prompt("please enter your friend name: ");
let msg;
switch (friendName) {
    case "ahmed":
    msg=`The person name '${friendName}' is your friend`;
    console.log(msg);
    break;

    case "hamza":
    msg=`The person name '${friendName}' is your friend`;
    console.log(msg);
    break;

    case "faisal":
    msg=`The person name '${friendName}' is your friend`;
    console.log(msg);
    break;

    default:
    msg=`The person name '${friendName}' is not your friend`;
    console.log(msg);
    break;
}