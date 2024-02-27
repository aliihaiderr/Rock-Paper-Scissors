let toastBread = new Promise((resolve, reject) => {         //arrow function
  let wifeMode = 7; 
  if (wifeMode >= 5) {
    resolve("Toast is ready");
  } else {
    reject();
  }
})
  .then((e) => {
    console.log(e);
  })
  .catch(() => {
    console.log("she is in bad mood");
  });
