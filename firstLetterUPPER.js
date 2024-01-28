function capitalizeFirstLetter3(str) {
  const [firstLetter, ...rest] = str;
  return firstLetter.toUpperCase() + rest.join("");
}

// Example usage:
const originalString = "hello world";
const capitalizedString3 = capitalizeFirstLetter3(originalString);
console.log(capitalizedString3); // Output: "Hello world"


// function capitalizeFirstLetter2(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// // Example usage:
// const originalString = "hello world";
// const capitalizedString2 = capitalizeFirstLetter2(originalString);
// console.log(capitalizedString2); // Output: "Hello world"


// function capitalizeFirstLetter1(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// // Example usage:
// const originalString = "hello world";
// const capitalizedString1 = capitalizeFirstLetter1(originalString);
// console.log(capitalizedString1); // Output: "Hello world"
