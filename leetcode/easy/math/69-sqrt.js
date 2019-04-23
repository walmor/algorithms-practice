// https://leetcode.com/problems/sqrt

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let r = x;
  while (r * r > x) {
    r = ((r + x / r) / 2) | 0;
    console.log('iteration r =', r);
  }
  return r;
};

// for (let i = 1; i <= 25; i++) {
//   console.log('sqrt(%d) = %d', i, mySqrt(i));
// }

console.log('sqrt(%d) = %d', 400, mySqrt(400));
