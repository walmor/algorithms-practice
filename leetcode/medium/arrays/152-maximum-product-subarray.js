/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }

  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
    min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);

    if (max > result) {
      result = max;
    }
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([2, 3, 0, 5, 6]));
