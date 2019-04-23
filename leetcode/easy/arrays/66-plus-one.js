// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;

    if (sum < 10) {
      digits[i] = sum;
      carry = 0;
      break;
    }

    digits[i] = Math.floor(sum % 10);
  }

  if (carry === 1) {
    digits.unshift(1);
  }

  return digits;
};

console.log(plusOne([1, 2, 3, 4]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([9, 9, 8]));
console.log(plusOne([1, 9, 9]));
