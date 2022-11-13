let output="";
let skipNumber=7;

for (let i = 1; i <= 10; i++) {
    if (i === skipNumber ) {
        continue;
    } 
    output += i;
}
console.log(output);

// using break
let outcome="";
let skipNum=7;
for (let i = 1; i <= 10; i++) {
    if (i === skipNum ) {
        break;
    } 
    outcome += i;
}
console.log(outcome);