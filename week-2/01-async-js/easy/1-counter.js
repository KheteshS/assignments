let counter = 0;

const counterUsingSetInterval = setInterval(() => {
  counter++;
  console.log("Counter:", counter);
}, 1000);
