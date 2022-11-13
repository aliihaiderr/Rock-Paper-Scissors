/*This exercise will construct an array as it loops through the
incrementing values of x. Once the array is done, this exercise also
will demonstrate several ways to output array contents.  */

let data=[];
for (let i = 0; i < 10; i++) {
    data.push(i + 1);
}
console.log(data);

for (let j = 0; j < data.length ; j++) {
    console.log(data[j]);
    
}

for (let num of data) {
    console.log(num);
}
