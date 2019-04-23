// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNeg = x < 0;

  const str = Math.abs(x).toString(10);
  let strReversed = '';

  if (str.length === 1) return x;

  for (let i = 0; i < str.length; i++) {
    strReversed = str[i] + strReversed;
  }

  let reversed = parseInt(strReversed, 10);

  if (Number.isNaN(reversed)) return 0;

  if (isNeg) reversed = -reversed;

  if (reversed > 0 && reversed > 2 ** 31 - 1) return 0;
  if (reversed < 0 && reversed < -(2 ** 31)) return 0;

  return reversed;
};

var reverse2 = function(x) {
  let rev = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = Math.trunc(x / 10);
    rev = rev * 10 + pop;
    console.log(rev, pop, x);
  }

  if (rev > 0 && rev > 2 ** 31 - 1) return 0;
  if (rev < 0 && rev < -(2 ** 31)) return 0;

  return rev;
};

console.log(reverse2(-123));
// console.log(reverse(-123));
// console.log(reverse(120));
// console.log(reverse(0));
// console.log(reverse(2147483648));
// console.log(reverse(-2147483648));
// console.log(reverse(-1));
