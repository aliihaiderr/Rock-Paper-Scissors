function breakFast(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${item},is ready.`);
    }, 2000);
  });
}

async function order(item) {
  let order = await breakFast(item);
  console.log(order);
}

order("egg fry");
order("paratha");
order("tea");
