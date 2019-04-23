/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const sqrt = Math.floor(Math.sqrt(n));

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = sqrt; i >= 1; i--) {
    min = Math.min(min, numSquares(n - i ** 2) + 1);
  }

  return min;
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares1 = function(n) {
  const mins = [0, 1];

  for (let i = 2; i <= n; i++) {
    const sqrt = Math.floor(Math.sqrt(i));
    let min = Number.MAX_SAFE_INTEGER;

    for (let j = sqrt; j >= 1; j--) {
      min = Math.min(min, mins[i - j ** 2] + 1);
    }

    mins[i] = min;
  }

  return mins[n];
};

console.log(numSquares1(12));
console.log(numSquares1(13));
console.log(numSquares1(16));
console.log(numSquares1(25));
console.log(numSquares1(9));
console.log(numSquares1(4));
console.log(numSquares1(19));
