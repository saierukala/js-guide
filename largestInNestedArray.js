function findLargestElement(nestedArray) {
  let largestElement = Number.NEGATIVE_INFINITY;

  function checkAndUpdate(element) {
    if (Array.isArray(element)) {
      // If the element is an array, recursively check each item
      element.forEach(checkAndUpdate);
    } else {
      // If the element is a number, update the largestElement if necessary
      if (element > largestElement) {
        largestElement = element;
      }
    }
  }

  // Start checking and updating for each element in the nested array
  nestedArray.forEach(checkAndUpdate);

  return largestElement;
}

// Example usage:
const nestedArray = [
  [3, 7, 12],
  [1, 8, [10, 15], 6],
  [4, 9],
];

const result = findLargestElement(nestedArray);
console.log(`The largest element in the nested array is: ${result}`);
