//Set timeout order

let one=()=>{console.log("one")};
let two=()=>{console.log("two")};

let three=()=>{
    console.log("Three")
    one();
    two();
};
let four=()=>{
    console.log("Four");
    setTimeout(one,0);
    three();
}
four();