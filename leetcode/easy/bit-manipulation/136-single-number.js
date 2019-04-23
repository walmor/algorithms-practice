// https://leetcode.com/problems/single-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // let e = 0;
  // for (let num of nums) e ^= num;
  // return e;
  return nums.reduce((e, num) => e ^ num, 0);
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
