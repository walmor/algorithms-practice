// https://leetcode.com/problems/power-of-three

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n <= 0) return false;

  while (n % 3 === 0) {
    n = Math.floor(n / 3);
  }

  return n === 1;
};

console.log(isPowerOfThree(1));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(8));
console.log(isPowerOfThree(10));
console.log(isPowerOfThree(11));
console.log(isPowerOfThree(12));
console.log(isPowerOfThree(15));
console.log(isPowerOfThree(18));
console.log(isPowerOfThree(-27));
