// https://leetcode.com/problems/intersection-of-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < nums1.length; i++) {
    map1[nums1[i]] = true;
  }

  for (let i = 0; i < nums2.length; i++) {
    map2[nums2[i]] = true;
  }

  const intersec = [];

  for (num in map1) {
    if (map2[num]) {
      intersec.push(parseInt(num, 10));
    }
  }

  return intersec;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(intersection([0, 1], [2, 3]));
console.log(intersection([-1, -2, -2, -1], [-2, -2]));
console.log(intersection([-1, -2, -2, -3], [-2, -2, 3]));
