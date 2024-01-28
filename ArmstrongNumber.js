function isArmstrongNumber(number) {
  const numString = number.toString();
  const numDigits = numString.length;
  let sum = 0;

  for (let digit of numString) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === number;
}

// Example usage:
const number = 153;
if (isArmstrongNumber(number)) {
  console.log(`${number} is an Armstrong number.`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}
