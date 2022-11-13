//Create a recursive function

function recursion(num){
    console.log(num);
    if(num < 10){
        recursion(++num);
    }
}
recursion(3);