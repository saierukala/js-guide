function secondSmallest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[1];
}

// Example usage:
const arr = [5, 3, 1, 7, 2, 4, 6];
const result = secondSmallest(arr);
console.log("Second smallest element:", result);
