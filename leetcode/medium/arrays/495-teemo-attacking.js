/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let sum = 0;
  let currEnd = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const start = timeSeries[i];
    const end = start + duration;

    sum += start >= currEnd ? duration : end - currEnd;
    currEnd = end;
  }

  return sum;
};

console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2], 2));
console.log(findPoisonedDuration([1], 10));
console.log(findPoisonedDuration([1, 2, 3], 10));
console.log(findPoisonedDuration([0], 5));
console.log(findPoisonedDuration([1], 5));
console.log(findPoisonedDuration([], 5));
console.log(findPoisonedDuration([1, 5, 10, 15, 20], 3));
console.log(findPoisonedDuration([1, 1, 1, 1, 1], 4));
console.log(findPoisonedDuration([1, 1, 1, 1, 1], 0));
console.log(findPoisonedDuration([1, 5, 10, 15, 20], 0));

// 4
// 3
// 10
// 12
// 5
// 5
// 0
// 15
