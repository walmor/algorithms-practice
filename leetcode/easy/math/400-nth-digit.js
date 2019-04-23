/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let len = 1;
  let count = 9;
  let start = 1;

  // 1. Find the length
  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  // 2. Find the number
  start += Math.floor((n - 1) / len);

  // 3. Find the position inside the number
  let s = start.toString();
  return parseInt(s[(n - 1) % len]);
};

console.log(findNthDigit(188));
