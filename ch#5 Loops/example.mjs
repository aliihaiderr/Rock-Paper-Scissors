import PromptSync from 'prompt-sync';
const prompt=PromptSync();

// let i=1;
// let num= Number(prompt("please enter a number to print its table."));
// let result;
// while (i <= 10) {
//     result= num * i;
//     console.log(`${num} X ${i}= ${result}`);
//     i++; 
// }

// find name using while loop
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky","Ali","Haider"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//  if (someArray[0] === "Haider") {
//  console.log(`Found ${someArray[0]} `);
//  notFound = false;
//  } else {
//  someArray.shift();
//     }
// }

// Fabonachi Numbers Loops

// let num1=0;
// let num2=1;
// let temp;
// let fabonachiArray=[];
// while (fabonachiArray.length < 25) {
//     fabonachiArray.push(num1);
//     temp=num1+num2;
//     num1=num2;
//     num2=temp;
// }
// console.log(fabonachiArray);

// let userInput=prompt("if you want to play than press 1 to 3 ");
// while (userInput > 0 && userInput <=3 ) {
//     userInput=prompt("Want to Play again then press again between 1 to 3 ")
//     console.log(userInput);    
// }

// let number;
// do {
//  number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));


// for (let i = 1; i <=10; i++) {
//     console.log(i);
    
// }

// push values in array using for loop
// let array=[];
// for (let i = 1; i <= 50; i++) {
//     array.push(i);
// }
// console.log(array);

// adding only even value in array
// let evenArray=[];
// for (let i = 0; i<= 100; i+=2) {
//     evenArray.push(i);
// }
// console.log(evenArray);

// const myWork = [];
// for (let x = 1; x < 10; x++) {
//  let stat = x % 2 ? true : false;
//  let temp = {
//  name: `Lesson ${x}`, status: stat
//  };
//  myWork.push(temp);
// }
// console.log(myWork);

let arrOfArrays = [];
for (let i = 0; i < 3; i++){
 arrOfArrays.push([]);
 for (let j = 0; j < 7; j++) {
 arrOfArrays[i].push(j);
 }
}
console.table(arrOfArrays);

// Loops with Arrays
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  console.log(names[i]);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  names[i] = "hello " + names[i];
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i=0; i< names.length; i++)
// {
//     if(names[i].startsWith("M")){
//         delete names[i];
//         continue;
//     }
//     names[i] = "hello " + names[i]; 
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (const arrData of names) 
// {
//     console.log(arrData);    
// }

//Loops and Objects
// let car ={
//     make: "Audi",
//     model: "A5",
//     color: "Black",
//     options: "power"
// };

// for (const properties in car) {

//         console.log(car[properties]);
//     }