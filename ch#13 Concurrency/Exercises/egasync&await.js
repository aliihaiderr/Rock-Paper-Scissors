function toastBread(Mod) {
  return new Promise((resolve, reject) => {
    let wifeMode = Mod;
    setTimeout(() => {
      if (wifeMode >= 5) {
        resolve("Toast is Ready");
      } else {
        reject("Mod is not soo good");
      }
    }, 2000);
  });
}
function fryEgg(Mod) {
  return new Promise((resolve, reject) => {
    let wifeMode = Mod;
    setTimeout(() => {
      if (wifeMode >= 5) {
        resolve("Egg is Ready");
      } else {
        reject("Mod is not soo good");
      }
    }, 2000);
  });
}

async function results(rate) {
  //parameter get rating out of 10.
  try {
    let toastResult = await toastBread(rate);
    console.log(toastResult);
    let eggResult = await fryEgg(rate);
    console.log(eggResult);
  } catch (error) {
    console.log(error);
  }
}
results(8);
