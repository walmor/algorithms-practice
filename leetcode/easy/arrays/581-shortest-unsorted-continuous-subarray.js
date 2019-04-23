// https://leetcode.com/problems/shortest-unsorted-continuous-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let stack = [];
  let l = nums.length;
  let r = 0;

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      l = Math.min(l, stack.pop());
    }
    stack.push(i);
  }

  stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      r = Math.max(r, stack.pop());
    }

    stack.push(i);
  }

  return r - l > 0 ? r - l + 1 : 0;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// console.log(findUnsortedSubarray([2, 4, 6, 5, 3, 7, 10, 12]));
// console.log(findUnsortedSubarray([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(findUnsortedSubarray([1]));
