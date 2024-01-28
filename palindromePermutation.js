const getObj = (str) => {
  let obj = {};
  for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;
  return obj;
};

const palindromePermutation = (str) => {
  str = str.replace(/ +/g, "");

  let obj = getObj(str);

  if (str.length % 2 === 1) {
    let counter = 0;
    //odd
    for (let i of str) {
      if (obj[i] % 2 === 1 || obj[i] === 1) counter++;
      if (counter > 1) return false;
    }
  } else {
    //even
    for (let i of str) {
      if (obj[i] % 2 !== 0) return false;
    }
  }
  return true;
};

console.log({ test: palindromePermutation("tact ca") });
