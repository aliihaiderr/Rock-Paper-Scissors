/*  
    Set values for height in inches and weight in pounds,
    then convert the values to centimeters and kilos,outputting the result to the console.
    1 inch is equal to 2.54 cm
    2.2046 pounds is equal to 1 kilo
    Output the results. Then, calculate and log the BMI: this is equal to
    weight (in kilos) divided by squared height (in meters). Output the
    results to the console.
*/
import PromptSync from "prompt-sync";
const prompt=PromptSync();

let poundInKilo= 2.2046;       //1kg is eqaul to pound
let cmInInc= 2.54;           //1 inch is equal to cm
let incInMeter= 0.0254         // 1 inch in meter
let heightInInc= prompt("Please Enter Your Height in Inches ");
let weightInPound= prompt("Please Enter Your Weight in Pound ");

let heightInCM= heightInInc * cmInInc;  //167.640 Cm according to 66 inc
let weightInKilo= weightInPound / poundInKilo;  //69.8539 kg  according to my weight(154 pound) 
console.log(`Your Height In Centimeter is : ${heightInCM}`);
console.log(`Your Weight In KilloGrame is : ${weightInKilo}`);

let heightInmeter= incInMeter * heightInInc ;
let BMI= weightInKilo / (heightInmeter ** heightInmeter) ;
console.log(`Your Boday Mass Index is: ${BMI}`) ;

//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo
// let inches = 72;
// let pounds = 180;
// let weight = pounds / 2.2046; // in kilos
// let height = inches * 2.54; // height in centimetres
// console.log(weight, height);
// let bmi = weight/(height/100*height/100);
// console.log(bmi);


