// The trick doing the product (or sum) from start to end and vice versa.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = [1];
  const len = nums.length;

  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = len - 1; i >= 0; i--) {
    output[i] *= right;
    right *= nums[i];
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([5]));
