/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Normalize the string: lower case, remove non-alphanumeric characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare the normalized string with its reverse
  return normalizedStr === normalizedStr.split("").reverse().join("");
}

module.exports = isPalindrome;
