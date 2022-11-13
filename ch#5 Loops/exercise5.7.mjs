/*In this exercise, we will experiment with looping over objects and
internal arrays. */

let students={
    name: "ali haider",
    city: "sahiwal",
    country: "pakistan"
};

for (const prop in students) {
    console.log(prop, students[prop]);
    }

    //access array elements using for loop
let studentArr=["hamza","toronto","canada"];
for (let i = 0; i < studentArr.length; i++) {
       console.log(i, studentArr[i]);
}

//access array elements using for in loop

for (const element in studentArr) {
    console.log(element, studentArr[element]);
    }
