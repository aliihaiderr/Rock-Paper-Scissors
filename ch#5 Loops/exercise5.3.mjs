/*In this exercise we will use a for loop to create an array that holds
objects. Starting with creating a blank array, the block of code within
the loop will create an object that gets inserted into the array. */


let myWork=[];

for (let i = 1; i <= 10; i++) {
    let status= i % 2 ? true: false;
    let temp={name:`lesson${i}`, status:status}
    myWork.push(temp);
}
console.log(myWork);