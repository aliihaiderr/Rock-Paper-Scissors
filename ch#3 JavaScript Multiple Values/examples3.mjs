let dog = { dogName: "German Labra", 
 weight: 2.4, 
 color: "white", 
 breed: "chihuahua", 
 age: 3, 
 burglarBiter: true
 };

 dog.color="Brown";
 dog["age"] = "2.5";

 let variable = "breed";    //here we use variables to manipulate object properties.
 dog[variable]= "German";
console.log(dog[variable]);
console.log(dog["age"]);
 console.log(dog);
