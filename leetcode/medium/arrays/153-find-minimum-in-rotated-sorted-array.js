/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!nums.length) return null;
  return searchRec(nums, 0, nums.length - 1);
};

function searchRec(nums, s, e) {
  if (s >= e) return nums[0];

  const mid = s + Math.floor((e - s) / 2);

  if (nums[mid] > nums[mid + 1]) {
    return nums[mid + 1];
  } else if (nums[mid] > nums[0]) {
    return searchRec(nums, mid + 1, e);
  } else {
    return searchRec(nums, s, mid);
  }
}

// console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(findMin([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(findMin([7, 8, 1, 2, 3, 4, 5, 6]));
// console.log(findMin([6, 7, 8, 1, 2, 3, 4, 5]));
// console.log(findMin([5, 6, 7, 8, 1, 2, 3, 4]));
// console.log(findMin([4, 5, 6, 7, 8, 1, 2, 3]));
// console.log(findMin([3, 4, 5, 6, 7, 8, 1, 2]));
// console.log(findMin([2, 3, 4, 5, 6, 7, 8, 1]));

// console.log(findMin([1, 2, 3, 4, 5, 6, 7]));
// console.log(findMin([7, 1, 2, 3, 4, 5, 6]));
// console.log(findMin([5, 7, 1, 2, 3, 4, 5]));
// console.log(findMin([5, 6, 7, 1, 2, 3, 4]));
// console.log(findMin([4, 5, 6, 7, 1, 2, 3]));
// console.log(findMin([3, 4, 5, 6, 7, 1, 2]));
// console.log(findMin([2, 3, 4, 5, 6, 7, 1]));
// console.log(findMin([2, 3, 4, 5, 6, 7, 1]));

console.log(findMin([2, 3]));
console.log(findMin([2, 1]));
console.log(findMin([3]));
console.log(findMin([]));

// console.log(findMin([6, 7, 8, 1, 2, 3, 4, 5]));
