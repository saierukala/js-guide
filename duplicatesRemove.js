function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 3, 6, 1];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log(arrayWithoutDuplicates);
