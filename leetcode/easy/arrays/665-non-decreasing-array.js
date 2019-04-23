// https://leetcode.com/problems/non-decreasing-array

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let found = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) continue;

    if (found) return false;

    found = true;

    if (i > 0 && i + 2 < nums.length) {
      if (nums[i] > nums[i + 2] && nums[i - 1] > nums[i + 1]) {
        return false;
      }
    }
  }

  return true;
};

// console.log(checkPossibility([4, 2, 3]));
// console.log(checkPossibility([4, 2, 1]));
// console.log(checkPossibility([1, 2, 3, 1, 2, 3]));
// console.log(checkPossibility([1, 2, 3, 1, 4, 5]));
// console.log(checkPossibility([1, 2]));
// console.log(checkPossibility([2, 3, 1]));
console.log(checkPossibility([-1, 4, 2, 3]));
