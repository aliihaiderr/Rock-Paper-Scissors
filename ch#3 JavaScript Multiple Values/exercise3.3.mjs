/*Practice exercise 3.3
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console. */

let numbers=[1,2,3];
let nestedNumbers=[numbers,numbers,numbers];
console.log(nestedNumbers);
let value=nestedNumbers[1][2];
console.log(value);
