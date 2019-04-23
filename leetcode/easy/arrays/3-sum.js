// https://leetcode.com/problems/sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (k > j) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        while (j < k && nums[j] === nums[j - 1]) j++;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([1, 0, 1, 2, 1, -4]));
console.log(threeSum([1, 0, 1, 2, 2, -4]));
console.log(threeSum([-2, 0, 0, 2, 2]));
