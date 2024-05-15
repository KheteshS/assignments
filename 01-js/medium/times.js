/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSum(n) {
  // Compute the sum from 1 to n using the arithmetic progression formula
  return (n * (n + 1)) / 2;
}

function calculateTime(n) {
  let startTime = new Date();
  let sum = calculateSum(n);
  let endTime = new Date();
  console.log(
    "Start time:",
    startTime,
    "End Time:",
    endTime,
    "Time Difference:",
    endTime - startTime,
    "Sum:",
    sum
  );
}

calculateTime(1000000000);
