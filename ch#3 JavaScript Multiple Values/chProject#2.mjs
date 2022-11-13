/*  Company product catalog
    In this project, you will implement a data structure for a product
    catalog and create queries to retrieve data. */

//  1. Create an array to hold an inventory of store items.   
let inventory=[];

//  2. Create three items, each having the properties of name, model,cost, and quantity.
let microwave={
    name:"Microwave",
    model:"Gree",
    cost: 12000,
    quantity: 25
  };
let refrigerator={
    name:"Refrigerator",
    model:"Pel",
    cost: 78000,
    quantity: 7
  };
let ac= {
    name:"Airconditioner",
    model:"Kenwood",
    cost: 135000,
    quantity: 3
  };
/*  3. Add all three objects to the main array using an array method,
    and then log the inventory array to the console  */
  inventory.push(microwave,refrigerator,ac);
  let firstItem=inventory[0];
  let secondItem=inventory[1];
  let thirdItem=inventory[2];
  console.log(firstItem,secondItem,thirdItem);

//  4. Access the quantity element of your third item, and log it to the console.

let qty= inventory[2].quantity;
console.log(`The quantity left in 3rd category is ${qty}`);

//  5. Experiment by adding and accessing more elements within your data structure.

let address=[{
    city: "Sahiwal",
    zipCode: 57000,
    area: "Fraid Town"
},{
    city: "Lahore",
    zipCode: 59000,
    area: "Iqbal Town"
}];

let swlLocation= address[0].area;
let lhrLocation= address[1].area;
console.log(`The location of sahiwal office is ${swlLocation},and lahore office is ${lhrLocation}`);
