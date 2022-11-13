//Looping over objects by converting to an array
let car ={
    make: "Audi",
    model: "A5",
    color: "Black",
    options: "power"
};
// array keys and loop over the objects
let arrayKey=Object.keys(car);
console.log(arrayKey);
for (const key of Object.keys(car) ) {
console.log(key);
}

// array Values and loop over the objects
let arrayValue=Object.values(car);
console.log(arrayValue);
for (const value of Object.values(car)) {
console.log(value);
}

//You can loop over these arrays in the same way you loop over any array

let arrKeys = Object.keys(car);
for(let i = 0; i < arrKeys.length; i++) {
console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}

//More interesting is how to loop over both arrays at the same time using the for of loop

let arrayEntries= Object.entries(car);
console.log(arrayEntries);

for (const [key,val] of Object.entries(car) ) {
console.log(key, ":", val);

}