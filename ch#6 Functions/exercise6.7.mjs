let start=10;
function countDown(val1){
    console.log(val1);
    if(val1 < 1){
        return;
    }else{
    return countDown(val1 - 1);
    }
  }
    countDown(start);

function countDown2(val2){
    console.log(val2);
    if(val2 > 0){
        val2--;
        return countDown2(val2)
    }
    return;
}
countDown2(start);