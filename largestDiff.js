function largestDifference(arr) {
  let min = arr[0];
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min == arr[i];
    } else {
      const diff = arr[i] - min;
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
}

const arr = [2, 3, 4, 5, 6, 7];
const result = largestDifference(arr);

console.log(result);
