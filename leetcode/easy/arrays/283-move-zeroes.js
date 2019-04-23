// https://leetcode.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j = Math.max(i, j);
      while (nums[j] === 0 && j < nums.length) j++;
      if (j === nums.length) break;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 1, 0, 0, 0]));
console.log(moveZeroes([0, 0, 0, 1, 2]));
console.log(moveZeroes([1, 2, 3, 4, 5]));
console.log(moveZeroes([0, 0, 0, 0]));
console.log(moveZeroes([0, 1, 0, 2]));
console.log(moveZeroes([1, 0]));
console.log(moveZeroes([1, 0, 1]));
