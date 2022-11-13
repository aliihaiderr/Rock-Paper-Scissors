/*Practice exercise 3.1
    1. Create an array to use as your shopping list with 3 items: "Milk,"
    "Bread," and "Apples."
    2. Check your list length in the console.
    3. Update "Bread" to "Bananas."
    4. Output your entire list to the console. */


let shoppingList=["Milk","Bread","Apples"];

let arrayLen= shoppingList.length;
console.log("The lengthof Array:",arrayLen);
shoppingList[1]= "Bananas";
console.log(shoppingList);