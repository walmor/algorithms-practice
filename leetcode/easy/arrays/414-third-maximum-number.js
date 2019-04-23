// https://leetcode.com/problems/third-maximum-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > max) {
      max3 = max2;
      max2 = max;
      max = num;
    } else if (num > max2 && num < max) {
      max3 = max2;
      max2 = num;
    } else if (num > max3 && num < max2) {
      max3 = num;
    }
  }

  return max3 === Number.MIN_SAFE_INTEGER ? max : max3;
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 1, 1, 2, 2, 2, 4]));
console.log(thirdMax([1, 1, 1, 4]));
console.log(thirdMax([1, 1, 1, 4]));
console.log(thirdMax([]));
