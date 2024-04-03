/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let str1Arr = str1.toUpperCase().split("").sort();
    let str2Arr = str2.toUpperCase().split("").sort();

    if (str1Arr.length !== str2Arr.length) {
        return false;
    } else {
        for (let i = 0; i < str1Arr.length; i++) {
            if (str1Arr[i] !== str2Arr[i]) {
                return false;
            }
        }
        return true;
    }
}

// isAnagram("Hello sdfd", "Hello dfds");

module.exports = isAnagram;
