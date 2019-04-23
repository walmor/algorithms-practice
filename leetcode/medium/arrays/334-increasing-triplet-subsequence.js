/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet([10, 12, 1, 2, 3]));
console.log(increasingTriplet([5, 4, 3, 2, 4, 5]));
console.log(increasingTriplet([6, 5, 4, 3, 2, 1]));
console.log(increasingTriplet([10, 11, 12, 1, 13]));
console.log(increasingTriplet([5, 6, 2, 3, 6]));
console.log(increasingTriplet([5, 6, 4, 3, 2, 3, 7]));
console.log(increasingTriplet([1, 5, 0, 2, 3]));
console.log(increasingTriplet([1, 1, 3, 2, 2]));
