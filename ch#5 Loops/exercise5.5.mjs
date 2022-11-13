let grid=[];
let cells=64;
let counter=0;
var row;
for (let i = 0; i <= cells+1 ; i++) {
    if (counter % 8 ==0) {
        if (row != undefined) {
            grid.push(row);
        }
        row=[];
    }
    counter++;
    let temp= counter;
    row.push(temp);
}
console.table(grid);
