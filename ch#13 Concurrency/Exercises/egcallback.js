function toastBread(cb) {
  setTimeout(() => {
    //arrow function
    cb("Toast is done");
  }, 2000);
}
function makeFryEgg(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}
function tea(calback) {
  setTimeout(() => {
    calback();
  }, 2000);
}

toastBread((para) => {
  console.log(para);
  makeFryEgg(() => {
    console.log("Egg fried"); //both are true
    tea(() => {
      console.log("tea is ready");
    });
  });
}); // callback functions within callback,so it make callback hell.
