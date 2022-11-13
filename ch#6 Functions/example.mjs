// Arrow Function
// let addTwo= (a,b) => console.log(a+b);
// addTwo(5,2);

// arrow functions with single parameter
// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");

//built in methods with arrow functions
// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

//spread example

// let message=["hello","ali","haider"];
// let welcome=[... message];
// console.log(welcome);

//we can also use spread operator to send arguments to function call
// function addTwoNumbers(x, y) {
//     console.log(x + y); 
//    } 
//    let arr = [5, 9];
//    addTwoNumbers(...arr);

// let addTwoNum=(x,y)=>console.log(x+y);
// let array=[4, 12];
// addTwoNum(...array);

//if we are using multiline arrow functionthen use return or on single line return notrequired
// let addTwoNumbers = (x, y) => {
//     console.log("Adding...");
//     return x + y;
//    }
//    console.log(addTwoNumbers(12,3));


//Recursive Function

// function addTwoNum(add){
//     console.log(add);
//     if(add < 50){
//         addTwoNum(++add)
//     }
// }
// addTwoNum(2);

// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//     logRecursive(nr - 1);
//     } else {
//     console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
//    }
//    logRecursive(3);
   
   //Nested Function
//    function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
//     }
//    }
//    doOuterFunctionStuff(2);
   
   // inner variable not accessed by outer function
//    function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//     let z = 10;
//     }
//     console.log("Not accessible:", z);
//    }
//    doOuterFunctionStuff(2);
   
    // function doOuterFunctionStuff(nr) {
    //     doInnerFunctionStuff(nr);
    //     function doInnerFunctionStuff(x) {
    //     let z = 10;
    //     }
    // }
    // doInnerFunctionStuff(3);


    //CallBack Functions

    // let message=()=>{
    //     console.log("This function is used as a parameter");
    // };
    
    // function newMessage(callback){
    //     console.log("this is function");
    //     callback();
    // }

    // newMessage(message);

    // //setTimeOut method

    // let timeOut=()=>{
    //     console.log("hi, this message show after 2 second by using timeOut method");
    // };
    // setTimeout(timeOut,2000);
    // setInterval(timeOut, 1000);


   // self check quiz
   var addFive1 = function addFive1(num) {
    return num + 2;
    };
    let addFive2 = (num) => num + 2;
    console.log(addFive2(14));
