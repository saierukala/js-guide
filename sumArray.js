function sumArray(arr) {
  // Use the reduce function to accumulate the sum of all elements in the array
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log("Sum of the array elements:", result);
