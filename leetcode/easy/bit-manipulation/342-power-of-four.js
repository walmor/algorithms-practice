// https://leetcode.com/problems/power-of-four

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return !(num & (num - 1)) && !!(0x55555555 & num);
};

console.log(isPowerOfFour(2));
console.log(isPowerOfFour(32));
console.log(isPowerOfFour(128));

console.log(isPowerOfFour(1));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(64));
console.log(isPowerOfFour(256));

/**
 * @param {number} num
 * @return {boolean}
 */
// var isPowerOfFour = function (num) {
//   const isPowerOfTwo = (num & (num - 1)) === 0;

//   if (!isPowerOfTwo) return false;

//   let countZeros = 0;

//   while (num !== 1) {
//     num >>>= 1;
//     countZeros++;
//   }

//   return countZeros % 2 == 0;
// };
