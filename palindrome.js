function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}

// Example usage:
const palindromeString = "racecar";
const nonPalindromeString = "hannah";

if (isPalindrome(palindromeString)) {
  console.log(`"${palindromeString}" is a palindrome.`);
} else {
  console.log(`"${palindromeString}" is not a palindrome.`);
}

// if (isPalindrome(nonPalindromeString)) {
//   console.log(`"${nonPalindromeString}" is a palindrome.`);
// } else {
//   console.log(`"${nonPalindromeString}" is not a palindrome.`);
// }
