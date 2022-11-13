/*  Math multiplication table
In this project, you will create a math multiplication table using
loops. You can do this using your own creativity or by following
some of the following suggested steps  */

let tableArr=[];
let value=5;

for (let i = 0; i < value; i++) {
    const temp =[]; 
    for (let j = 0; j < value; j++) {
        temp.push(i*j);
    }
    tableArr.push(temp);
}
console.log(tableArr);