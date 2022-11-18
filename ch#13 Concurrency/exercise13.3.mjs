/*  This exercise will demonstrate how to use await to wait on a Promise
inside an async function. Using await and async , create a counter
with timeout() , and increment a global counter value. */

let count=0;

function counter(val){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            count++;
            resolve(`x value:${val},and counter:${count},`);
        },2000)
    });
}

async function outcome(val){
    console.log(`ready: ${val} counter:${count}`)
    let globalCounter= await counter(val);
    console.log(globalCounter);
}
for (let i = 1; i < 4; i++) {
    outcome(i);
}