/*In this exercise, we will create a basic counter that will increase a
dynamic variable by a consistent step value, up to an upper limit. */

let counter=0;          //sol 617
let step=5;

do {
    console.log(counter);
    counter +=step;
} while (counter <= 100);


// do while loop