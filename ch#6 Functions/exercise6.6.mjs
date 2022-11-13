/* A common problem that we can solve with recursion is calculating
the factorial. */

function factorial(num){
    if(num === 0){
        return 1;
    }else{
        return num*factorial(--num);
    }
}
console.log(factorial(3));


   