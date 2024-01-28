const chunk = ((arr, n) => {
  const chunked = [];

  // Loop through each element in the input array
  for (let elem of arr) {
    // Get the last chunk in the chunked array
    let last = chunked[chunked.length - 1];

    // Check if there is no last chunk or if the last chunk has reached the desired size (n)
    if (!last || last.length === n) {
      // If true, create a new chunk with the current element
      chunked.push([elem]);
    } else {
      // Otherwise, add the current element to the last chunk
      last.push(elem);
    }
  }

  // Return the array of chunks
  return chunked;
})([1, 4, 12, 3, 2, 6, -9], 2);

// Print the resulting array of chunks to the console
console.log(chunk);
