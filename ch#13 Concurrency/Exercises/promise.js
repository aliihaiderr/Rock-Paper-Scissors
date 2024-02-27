let promise = new Promise((resolve, reject) => {
  let num = 25;
  if (num >= 15) {
    resolve(num);
  } else {
    reject("Too small number");
  }
});
promise
  .then((val) => {
    console.log("Number is in defined criteria",val);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
