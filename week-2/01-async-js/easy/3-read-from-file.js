const fs = require("fs");

// Read contents of a file and print to console
fs.readFile(".\\example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File contents:");
  console.log(data);

  // Simulate an expensive operation
  const startTime = Date.now();
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  console.log("Sum of numbers:", sum);

  const endTime = Date.now();
  console.log(
    "Time taken for the expensive operation:",
    endTime - startTime,
    "ms"
  );
});
