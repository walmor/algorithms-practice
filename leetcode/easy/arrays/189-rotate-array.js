/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (k == nums.length) return nums;
  if (k > nums.length) k = k % nums.length;

  invert(nums, 0, nums.length - 1);
  invert(nums, 0, k - 1);
  invert(nums, k, nums.length - 1);
  return nums;
};

function invert(nums, s, e) {
  while (s < e) {
    [nums[s], nums[e]] = [nums[e], nums[s]];
    s++;
    e--;
  }
  return nums;
}

// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 2));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 4));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 5));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 6));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 7));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 9));
