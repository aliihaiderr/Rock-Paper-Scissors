// here we  can use A regular function and Arrow function to do same tasks.
//it takes the element of the array as an input

let arr = [2,3,4,6,7,8,6,3,4,2];
let findValue = arr.find(function(e) { return e === 6});   //regular function passed as an argument
let findValue2 = arr.find(e => e === 10);               //Arrow function also passed as an argument
console.log(findValue, findValue2);   //6 and undefined
let findIndex = arr.indexOf(6);    
console.log(findIndex);        //3 index

let findIndex2 = arr.indexOf(2, 1);//here we define second argument 1 is index from where it start find.
console.log(findIndex2);        //output is 9 index
//last index of
let lastIndex= arr.lastIndexOf(4);
console.log(lastIndex);         //8 index

//sorting
 let sort=arr.sort();
 console.log(sort);
//reversing

let revers=arr.reverse();
console.log(revers);