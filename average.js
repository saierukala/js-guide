function calculateAverage(arr) {
  // Check if the array is not empty
  if (arr.length === 0) {
    return "Array is empty, cannot calculate average";
  }

  // Use the reduce function to calculate the sum of all elements in the array
  const sum = arr.reduce((total, num) => total + num, 0);

  // Calculate the average by dividing the sum by the number of elements
  const average = sum / arr.length;

  return average;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const averageResult = calculateAverage(numbers);
console.log("Average value:", averageResult);
