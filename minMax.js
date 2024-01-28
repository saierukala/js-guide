function findMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}

// Example usage:
const numbersArray = [3, 1, 7, 9, 4, 2, 8];
const result = findMinMax(numbersArray);

console.log("Min:", result[0]);
console.log("Max:", result[1]);
