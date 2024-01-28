
function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Example usage:
const inputString = "Hello, World!";
const result = countCharacterOccurrences(inputString);

console.log(result);
