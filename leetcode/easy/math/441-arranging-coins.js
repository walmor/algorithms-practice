/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let usedCoins = 0;
  let coinsToBuildStep = 1;
  let steps = 0;

  while (usedCoins <= n) {
    usedCoins += coinsToBuildStep;
    coinsToBuildStep++;
    steps++;
  }

  return steps - 1;
};

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
};

console.log(arrangeCoins(0));
console.log(arrangeCoins(3));
console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(21));
