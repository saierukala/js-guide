const urlify = (str, n) => {
  let newStr = "";

  // Loop through the first 'n' characters of the input string
  for (let i = 0; i < n; i++) {
    // Check if the current character is a space
    if (str[i] === " ") {
      // If it is a space, append "%20" to the new string
      newStr += "%20";
    } else {
      // If it is not a space, append the character as it is to the new string
      newStr += str[i];
    }
  }

  // Return the URLified string
  return newStr;
};

// Test the function with the input string " john smith " and effective length 11
let string = " john smith ";
let result = urlify(string, 11);
console.log(result);
