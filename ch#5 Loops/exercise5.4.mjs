let myTable=[];
let rows= 4;
let columns= 7;
let counter= 0;

for (let i = 0; i < rows; i++) {
  let tempTable=[];    
  for (let j=0;  j < columns ; j++) {
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.table(myTable);