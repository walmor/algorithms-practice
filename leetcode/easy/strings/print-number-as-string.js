// https://leetcode.com/problems/number-as-string

function numberAsString(n) {
  let count = 0;
  let output = '';

  while (n > 0) {
    const digit = n % 10;
    n = Math.floor(n / 10);

    output = digit + output;

    if (n > 0 && ++count % 3 === 0) {
      output = ',' + output;
    }
  }

  return output;
}

console.log(numberAsString(1000000));
console.log(numberAsString(100));
console.log(numberAsString(1000));
console.log(numberAsString(999));
console.log(numberAsString(1000000000));
