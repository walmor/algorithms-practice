/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;

  const values = [1];
  let longest = 1;

  for (let i = 1; i < nums.length; i++) {
    let max = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, values[j] + 1);
      }
    }
    values[i] = max;
    longest = Math.max(longest, max);
  }

  return longest;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]));
console.log(lengthOfLIS([2, 3, 10, 11, 4, 5, 6]));
console.log(lengthOfLIS([10, 11, 2, 3, 12, 13, 14]));
console.log(lengthOfLIS([5, 6, 7, 15, 16, 8, 9, 10, 2, 3, 11, 12, 13]));
