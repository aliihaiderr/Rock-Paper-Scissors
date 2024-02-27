// setTimeout
setTimeout(()=>{
    console.log("hello from asynch");
},1000);
console.log("hello synchoronously");

//setInterval
let counter=0;
let timer=setInterval(()=>{
    console.log("Hello World");
    counter +=1;
    if (counter >= 5) {
        clearInterval(timer);
    }
},2000);


