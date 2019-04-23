// https://leetcode.com/problems/maximum-average-subarray-i

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  if (k < nums.length) return 0;

  const sums = [0];

  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = nums[i] + sums[i];
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i <= nums.length - k; i++) {
    const avg = (sums[i + k] - sums[i]) / k;
    max = Math.max(avg, max);
    // console.log('max: %d, i: %d, i + k:', max, i, i + k);
  }

  return max;
};

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([-1, -2, -3, -4, -5, -6], 6));
console.log(findMaxAverage([-1, -2, -3, -4, -5, -6], 2));
