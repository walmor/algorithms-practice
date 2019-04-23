/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (const n of nums) {
    const val = Math.abs(n) - 1;
    if (nums[val] > 0) nums[val] *= -1;
  }

  const ret = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) ret.push(i + 1);
  }

  return ret;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
