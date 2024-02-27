function userLogin(email, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "alihaider@gmail.com" && pass === 1996) {
        resolve(email);
      } else {
        reject("Please correct your credentials");
      }
    }, 2000);
  });
}

function userVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        resolve(["v1", "v2", "v3"]);
      } else {
        reject("Provide valid email");
      }
    }, 2000);
  });
}

userLogin("alihaider@gmail.com", 1996)
  .then((e) => {
    console.log(e," / User Loggedin");
    return userVideos(e);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((j) => {
    console.log(j);
  });
