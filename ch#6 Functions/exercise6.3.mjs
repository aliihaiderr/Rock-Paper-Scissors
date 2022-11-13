/* Create a basic calculator that takes two numbers and one string
value indicating an operation. If the operation equals add, the two
numbers should be added. If the operation equals subtract, the two
numbers should be subtracted from one another. If there is no option
specified, the value of the option should be add .  */

let num1=13;
let num2=12;

let operator= "-";

function calculator(a,b,op){
    if (op === "-") {
        return a-b;
    }else{
        return a+b;
    }
}
console.log(calculator(num1,num2,operator));
