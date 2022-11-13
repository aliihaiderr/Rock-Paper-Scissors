/*  Miles-to-kilometers converter
    Create a variable that contains a value in miles, convert it to
    kilometers, and log the value in kilometers   */

import PromptSync from "prompt-sync";
const prompt=PromptSync();
// Conversion factor in Kilometers

let miles= prompt("Please Enter the Distance in Miles ");      // Get miles from user
let milesToKilometers= 1.60934;        //one mile to kilometer
let kilometers= miles * milesToKilometers;
// this formate print in console
let formate= `The distance of ${miles} Miles is equal to ${kilometers} Kilometers`; 
console.log(formate);

// Now we get kilometers and convert it to miles
let kilometer= prompt("Please Enter the Distance in Kilometers ");
let kilometerToMiles= 0.621371;    //one kilometer to one Mile
let milesDistance= kilometer * kilometerToMiles;

let sentence= `The distance of ${kilometer} Kilometers is equal to ${milesDistance} Miles`; 
console.log(sentence);
