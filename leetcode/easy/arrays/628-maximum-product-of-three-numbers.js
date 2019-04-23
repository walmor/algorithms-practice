// https://leetcode.com/problems/maximum-product-of-three-numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  const max = [1, 1, 1];
  const min = [1, 1];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max[0]) {
      max[2] = max[1];
      max[1] = max[0];
      max[0] = num;
    } else if (num > max[1]) {
      max[2] = max[1];
      max[1] = num;
    } else if (num > max[2]) {
      max[2] = num;
    }

    if (num < min[0]) {
      min[1] = min[0];
      min[0] = num;
    } else if (num < min[1]) {
      min[1] = num;
    }
  }

  return Math.max(max[0] * max[1] * max[2], max[0] * min[0] * min[1]);
};

console.log(maximumProduct([1, 2, -3, -4]));
console.log(maximumProduct([-9, -12, -3, -8, 2, 6]));
