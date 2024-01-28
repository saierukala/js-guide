function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimesInRange(a, b) {
  const primes = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Example usage:
const startRange = 10;
const endRange = 50;
const primeNumbersInRange = findPrimesInRange(startRange, endRange);

console.log(`Prime numbers between ${startRange} and ${endRange}:`);
console.log(primeNumbersInRange);
