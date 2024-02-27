function toastBread() {
  return new Promise((resolve, reject) => {
    let wifeMode = 8;
    if (wifeMode >= 5) {
      resolve();
    } else {
      reject();
    }
  });
}
toastBread()
  .then(() => {
    console.log("Toast is ready");
  })
  .catch(() => {
    console.log("she is in bad mood");
  });
