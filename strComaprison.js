const strComparison = (str) => {
  // If the input string is empty, return it as is
  if (str.length === 0) {
    return str;
  }

  let compressed = "";
  let count = 1;

  // Iterate through the characters of the input string
  for (let i = 0; i < str.length; i++) {
    // If the current character is the same as the next one, increment the count
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // If the current character is different from the next one,
      // append the current character and its count to the compressed string
      compressed += str[i] + count;
      count = 1; // Reset count for the new character
    }
  }

  // Return the compressed string if it is shorter than the original, otherwise, return the original string
  return compressed.length < str.length ? compressed : str;
};

// Test the function with the input "aabcccccaaa" and log the result to the console
console.log(strComparison("aabcccccaaa"));
