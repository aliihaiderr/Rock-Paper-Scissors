function someThing(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // let num=15;
      if (num >= 15) {
        resolve(num);
      } else {
        reject("Number is too short");
      }
    }, 2000);
  });
}

async function number(num) {
  try {
    let Num = await someThing(num);
    console.log("Number is in criteria", Num);
  } catch (error) {
    console.log(error);
  }
}

number(15);
number(5);
