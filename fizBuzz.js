function fizBuzz(n) {
  // Loop from 1 to (n-1)
  for (let i = 1; i < n; i++) {
    // Check if i is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizBuzz");
    } else if (i % 3 === 0) {
      // Check if i is divisible by 3
      console.log("Fiz");
    } else if (i % 5 === 0) {
      // Check if i is divisible by 5
      console.log("Buzz");
    } else {
      // If none of the above conditions are true, print the current value of i
      console.log(i);
    }
  }
}

// Call the function with n = 15
fizBuzz(17);
