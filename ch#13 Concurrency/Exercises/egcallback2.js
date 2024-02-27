function userLogin(email, pass, callback) {          //regular function
  setTimeout(() => {
    callback(email);
  }, 2000);
}

let userVideos = (email, cb) => {                 //arrow function
  setTimeout(() => {
    cb(["v1", "v2", "v3"]);
  }, 2000);
};

userLogin("alihaider@gmail.com", 1996, (email) => {
  console.log("user loggedin");
  userVideos(email, (videos) => {
    console.log(videos);
  });
});
