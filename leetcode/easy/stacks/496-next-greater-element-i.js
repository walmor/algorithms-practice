/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  const stack = [];
  const map = {};

  stack.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    while (stack.length && stack[stack.length - 1] < num) {
      map[stack.pop()] = num;
    }

    stack.push(num);
  }

  const result = [];

  for (let i = 0; i < findNums.length; i++) {
    if (map[findNums[i]] !== undefined) {
      result.push(map[findNums[i]]);
    } else {
      result.push(-1);
    }
  }

  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([2, 4], [4, 3, 2, 1]));
console.log(nextGreaterElement([1, 2, 5, 6], [1, 5, 2, 6]));
console.log(nextGreaterElement([10, 9, 7, 6, 8], [10, 9, 7, 6, 8, 5, 4, 11]));
console.log(nextGreaterElement([1], [1]));
