/*  In this exercise, you will create a counter that will output the values
in sequence using Promises. */

let promise= new Promise((resolve, reject) => {
    resolve("Start Counting");
}).then((val)=>{
    counter(val);
    return "one";
}).then((val)=>{
    counter(val);
    return "two";
}).then((val)=>{
    counter(val);
    return "three";
}).then((val)=>{
    counter(val);
})
let counter=(val)=>{
    console.log(val);
}