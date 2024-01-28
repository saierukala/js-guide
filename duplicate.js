function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      // If the element is not already in uniqueArray, add it
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

// Example: Remove duplicates from an array
const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 1, 6, 7, 7, 8];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(`Array without duplicates:`, arrayWithoutDuplicates);
