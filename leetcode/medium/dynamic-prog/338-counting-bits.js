/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const ones = [0];

  for (let i = 1; i <= num; i++) {
    ones[i] = ones[i >> 1] + (i & 1);
  }

  return ones;
};

console.log(countBits(10));
