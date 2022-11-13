/*  Use IIFE to create a few immediately invoked functions and observe
how the scope is affected.  */

let val="1000";
// create an IIFE function

(()=>{
 let val="2000";
 console.log(val);
})();

let result=(()=>{
    let val="Malik";
    return val;
})();

console.log(result);
console.log(val);

(function (val) {
    console.log(`My name is ${val}`);
   })("Ali");
