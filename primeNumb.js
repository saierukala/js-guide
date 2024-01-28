function PrimeNum(n) {
  if (n < 2) {
    return `${n} is not a prime number`;
  }

  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return `${n} is not a prime number`;
    }
  }
  return `${n} is a prime number`;
}

console.log(PrimeNum(10));
