/*  Modify the calculator that you made in Practice exercise 6.3 to return
added values instead of printing them. Then, call the function 10 or
more times in a loop, and store the results in an array. Once the loop
finishes, output the final array into the console.  */

// let num1=13;
// let num2=12;
// let operator= "-";

function calculator(a,b,op){
    if (op === "-") {
        return a-b;
    }else{
        return a+b;
    }
}
// console.log(calculator(num1,num2,operator));
let calculatorArray=[];
for (let i = 1; i <=10; i++) {
    let val1=i*5;
    let val2=i*i;
    let response = calculator(val1, val2, "+");
    calculatorArray.push(response);
}
console.log(calculatorArray);
