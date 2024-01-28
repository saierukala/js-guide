const uniqueStr = (str) => {
  let obj = {};

  // Count the occurrences of each character in the string
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }

  // Check if any character occurs more than once
  for (let i in obj) {
    if (obj[i] > 1) {
      return false; // If any character is not unique, return false
    }
  }

  return true; // If all characters are unique, return true
};

// Test the function with the input "abcd" and log the result to the console
console.log(uniqueStr("abcd"));
