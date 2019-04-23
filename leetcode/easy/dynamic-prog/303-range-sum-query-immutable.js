// https://leetcode.com/problems/range-sum-query-immutable

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.sums = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sums.push(sum);
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i > j) return 0;
  if (i > this.nums.length) return 0;
  if (j > this.nums.length - 1) j = this.nums.length - 1;

  if (i === 0) return this.sums[j];

  return this.sums[j] - this.sums[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// [-2, 0, 3, -5, 2, -1]
// [-2, -2, 1, -4, -2, -3]
