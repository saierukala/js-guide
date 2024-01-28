function reverseStr(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

let result = reverseStr("!greetings");
console.log(result);

const revStr = (str) => {
  let arr = str.split("").reverse().join("");
  return arr;
};

console.log(revStr("greetings!"));
