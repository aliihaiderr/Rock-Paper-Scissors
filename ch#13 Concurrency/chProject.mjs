let password = ["malik", "haider", "latitude6430"];
function passChecker(pass) {
  return password.includes(pass);
}

function login() {
  return new Promise((resolve, reject) => {
    if (passChecker(password)) {
      resolve({
        status: true,
      });
    } else {
      reject({
        status: false,
      });
    }
  });
}
function checker(pass) {
  login(pass)
    .then((token) => {
      console.log("Approve:");
      console.log(token);
    })
    .catch((value) => {
      console.log("Reject:");
      console.log(value);
    });
}

checker("haider");

