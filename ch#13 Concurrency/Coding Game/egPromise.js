function job(data) {
    return new Promise((resolve, reject) => {
      if (isNaN(data)) {
        reject("error");
      } else if (!(data % 2 == 0)) {
        setTimeout(() => {
          resolve("odd");
        }, 1000);
      } else {
        setTimeout(() => {
          reject("even");
        }, 2000);
      }
    });
  }
  job("alihaider")
    .then((para) => {
      console.log(para);
    })
    .catch((val) => {
      console.log(val);
    });
  job(20)
    .then((para) => {
      console.log(para);
    })
    .catch((val) => {
      console.log(val);
    });
  job(37)
    .then((para) => {
      console.log(para);
    })
    .catch((val) => {
      console.log(val);
    });
  
  // job("alihaider").then(
  //   function success(data) {
  //     console.log(data);
  //   },
  //   function error(data) {
  //     console.error(data);
  //   }
  // );