/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue;
    if (i > 0 && flowerbed[i - 1] === 1) continue;
    if (i < flowerbed.length - 1 && flowerbed[i + 1] === 1) continue;

    flowerbed[i] = 1;
    n--;

    if (n === 0) break;
  }

  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1], 1));
console.log(canPlaceFlowers([0], 1));
console.log(canPlaceFlowers([1, 1, 1], 1));
console.log(canPlaceFlowers([0, 0, 0, 0, 0, 1, 0, 0], 0));
