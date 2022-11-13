/*  1. Create a Boolean value for an ID variable
    2. Using a ternary operator, create a message variable that will
    check whether their ID is valid and either allow a person into a
    venue or not
    3. Output the response to the console  */

    let id=true;          // if remove (!) then first condition run. 
    let access= !id ? "You are Allowed to venue":"You are not permitted to venue";  
    console.log(access);