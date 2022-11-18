/*  This exercise will demonstrate how to use a callback function,
creating a way to pass a value from one function to another by
invoking a callback function. We will create a greeting callback using
a full name in a string.  */
function greet(fullName){
    console.log(`Welcom to the javaScript, ${fullName[0]} ${fullName[1]}`);
}

function greetings(username,callback){
    // Split the string into an array using the split() method
    //Send the full-name array to the greet() function created in the first step.
    let fullName=username.split(" ");
    callback(fullName);
}
    //Invoke the process of the callback function.
greetings("Ali Faisal",greet);