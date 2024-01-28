function getUniqueElements(arr) {
  return Array.from(new Set(arr));
}

// Example usage:
const inputArray = [1, 2, 3, 2, 4, 5, 3, 6, 1];
const uniqueElements = getUniqueElements(inputArray);

console.log(uniqueElements);
