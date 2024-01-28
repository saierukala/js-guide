function factorial(number) {
  if (number < 0) {
    return "Please enter non negative integer number";
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

let input = 5;
let r = factorial(input);
console.log(r);

// function factorial(number) {
//   if (number < 0) {
//     return "Please enter the non negative number";
//   }

//   result = 1;
//   let i = 2;

//   while (i <= number) {
//     result *= i;
//     i++;
//   }
//   return result;
// }

// let input = 5;
// let r = factorial(input);
// console.log(r);

// function factorial(n) {
//   // Base case: factorial of 0 or 1 is 1
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   // Recursive case: n! = n * (n-1)!
//   return n * factorial(n - 1);
// }

// // Example usage:
// const number = 5;
// const result = factorial(number);
// console.log(`The factorial of ${number} is: ${result}`);
