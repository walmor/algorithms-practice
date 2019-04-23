// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  return searchInsertRec(nums, target, 0, nums.length - 1);
};

function searchInsertRec(nums, target, s, e) {
  if (s > e) return s;
  const middle = s + Math.floor((e - s) / 2);

  if (nums[middle] === target) return middle;

  if (target > nums[middle]) {
    return searchInsertRec(nums, target, middle + 1, e);
  } else {
    return searchInsertRec(nums, target, s, middle - 1);
  }
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
