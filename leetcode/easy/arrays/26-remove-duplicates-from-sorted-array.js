/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 1;

  for (let i = 1; i < nums.length; i++) {
    nums[j] = nums[i];
    if (nums[j] !== nums[j - 1]) j++;
  }

  return { j, nums };
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 2, 3]));
console.log(removeDuplicates([1]));
