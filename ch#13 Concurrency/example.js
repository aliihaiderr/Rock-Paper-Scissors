//callback function

// function callback(addTwo){
//     addTwo();
// }
// function addition(){
//     let a=3;
//     let b=50;
//     console.log(a+b);
// }
// callback(addition);

//Callback use case choose gardes and show message
// function judge(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log(`You got an ${grade},"Amazing"`);
//       break;
//     case grade == "B":
//       console.log(`You got an ${grade},"Good"`);
//       break;
//     case grade == "C":
//       console.log(`You got an ${grade},"Alright...!"`);
//       break;
//     case grade == "D":
//       console.log(`You got an ${grade},"Need to focus on study"`);
//       break;
//     default:
//       console.log(`An ${grade},"What..!"`);
//       break;
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//       break;
//   }
//   callback(grade);
// }
// getGrade(70, judge);

//Promise Function

// let promise = new Promise((resolve, reject) => {
//   let x=82;
//   if (x > 10 ) {
//     resolve(x);
//   }else{
//     reject("Too Low");
//   }
// });
// promise.then((value)=>{
//   console.log("succes",value);
// });
// promise.catch((error)=>{
//   console.log("Error",error);
// })


//Chain Promise

let promise =new Promise((resolve, reject) => {
    resolve("success");
    // reject("Error");
}).then((val)=>{                          // .then is also a promise
    console.log(val);
    return "Welcome";
}).then((val)=>{                              
    console.log(val);
    return "to";
}).then((val)=>{
  console.log(val);
  return "javaScript"
}).then(val=>{
  console.log(val);
})
.catch((error)=>{
    console.log("This is in Catch",error);
})



