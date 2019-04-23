/**
 * @param {number[]} nums
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) return -1;
  return searchRec(nums, target, 0, nums.length - 1);
};

function searchRec(nums, target, s, e) {
  if (s > e) return -1;

  const mid = s + Math.floor((e - s) / 2);

  if (nums[mid] === target) return mid;

  if (target > nums[mid]) {
    if (target > nums[e] && nums[mid] < nums[s]) {
      // go left
      e = mid - 1;
    } else {
      // go right
      s = mid + 1;
    }
  } else {
    if (target < nums[s] && nums[mid] > nums[e]) {
      // go right
      s = mid + 1;
    } else {
      // go left
      e = mid - 1;
    }
  }

  return searchRec(nums, target, s, e);
}

for (let i = 1; i <= 8; i++) {
  console.log(search([6, 7, 8, 1, 2, 3, 4, 5], i));
}

for (let i = 1; i <= 8; i++) {
  console.log(search([4, 5, 6, 7, 8, 1, 2, 3], i));
}
