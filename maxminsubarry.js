function findSubarraysBetweenMinMax(arr) {
  if (arr.length < 2) {
    // There should be at least two elements in the array
    return [];
  }

  // Step 1: Find the maximum and minimum elements
  let maxElement = Math.max(...arr);
  let minElement = Math.min(...arr);

  // Step 2: Find subarrays between max and min
  let startIndex = arr.indexOf(minElement);
  let endIndex = arr.indexOf(maxElement);

  if (startIndex === -1 || endIndex === -1) {
    // Max or min element not found
    return [];
  }

  // Adjust startIndex and endIndex to get the subarray between max and min
  if (startIndex > endIndex) {
    [startIndex, endIndex] = [endIndex, startIndex];
  }

  return arr.slice(startIndex + 1, endIndex);
}

// Example usage:
const array = [3, 1, 4, 6, 2, 8, 5, 7];
const subarrays = findSubarraysBetweenMinMax(array);
console.log("Subarrays between max and min:", subarrays);
