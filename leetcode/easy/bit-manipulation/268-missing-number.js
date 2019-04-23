/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  let actualSum = 0;
  for (let num of nums) actualSum += num;
  return expectedSum - actualSum;
};

console.log(missingNumber([0]));
console.log(missingNumber([3]));
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 8, 4, 2, 3, 5, 7, 0, 1]));
