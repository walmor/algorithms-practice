// https://leetcode.com/problems/k-diff-pairs-in-an-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;

  const map = {};
  const pairs = {};

  for (let i = 0; i < nums.length; i++) {
    const diff1 = k + nums[i];
    const diff2 = nums[i] - k;

    if (map[diff1] !== undefined) {
      const arr = [diff1, nums[i]];
      arr.sort((a, b) => a - b);
      const key = arr.join(';');
      pairs[key] = true;
    }

    if (map[diff2] !== undefined) {
      const arr = [diff2, nums[i]];
      arr.sort((a, b) => a - b);
      const key = arr.join(';');
      pairs[key] = true;
    }

    map[nums[i]] = true;
  }

  return Object.keys(pairs).length;
};

// console.log(findPairs([3, 1, 4, 1, 5], 2));
// console.log(findPairs([1, 2, 3, 4, 5], 1));
// console.log(findPairs([1, 3, 1, 5, 4], 0));
// console.log(findPairs([1, 2, 3, 4, 5], -1));
// console.log(findPairs([1, 1, 1, 2, 1], 1));
console.log(findPairs([6, 3, 5, 7, 2, 3, 3, 8, 2, 4], 2));
