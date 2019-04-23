// https://leetcode.com/problems/happy-number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const map = {};
  map[n] = true;

  while (n > 0) {
    let sum = 0;

    while (n > 0) {
      const d = n % 10;
      n = Math.floor(n / 10);
      sum += Math.pow(d, 2);
    }

    if (sum === 1) return true;
    if (map[sum] !== undefined) return false;

    map[sum] = true;
    n = sum;
  }
};

// console.log(isHappy(19));
console.log(isHappy(20));
console.log(isHappy(1));
