// function addTowNum(addition){
//     addition();
// }
// function addNumbers(){
//     let add=4+5;
//     console.log(add);
// }
// addTowNum(addNumbers);

function getResult(score, callback) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
      break;
  }
  callback(grade);
}

function result(grade) {
  switch (true) {
    case grade == "A":
      console.log(`Your grade is ${grade},keep it up `);
      break;
    case grade == "B":
      console.log(`Your grade is ${grade},good`);
      break;
    case grade == "C":
      console.log(`Your grade is ${grade},need hardwork`);
      break;
    case grade == "D":
      console.log(`Your grade is ${grade},focus on your study`);
      break;
    default:
      console.log(`what...!Your grade is ${grade}`);
      break;
  }
}
getResult(60, result);
