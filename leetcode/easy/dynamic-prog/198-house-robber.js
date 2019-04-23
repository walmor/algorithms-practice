/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // sol 1 - iterative
  let secLast = 0;
  let last = 0;

  for (let i = 0; i < nums.length; i++) {
    let max = Math.max(last, nums[i] + secLast);
    secLast = last;
    last = max;
  }

  return Math.max(secLast, last);

  // sol 2 - recursive
  // return maxRob(nums, nums.length - 1);
};

function maxRob(nums, hidx) {
  if (hidx < 0) return 0;
  if (hidx <= 1) return nums[hidx];

  return Math.max(maxRob(nums, hidx - 1), maxRob(nums, hidx - 2) + nums[hidx]);
}

console.log(rob([2, 5, 2, 1, 10]));
console.log();

console.log(rob([1, 2, 3, 1]));
console.log();

console.log(rob([2, 7, 9, 3, 1]));
console.log();

console.log(rob([10, 1, 10, 1, 10]));
console.log();

console.log(rob([]));
console.log();

console.log(rob([5]));
console.log();

console.log(rob([5, 6]));
console.log();

console.log(rob([5, 7, 1]));
console.log();

console.log(rob([5, 5, 1, 10, 10]));
console.log();
