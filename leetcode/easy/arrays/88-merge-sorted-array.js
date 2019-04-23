/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let d = m + n - 1; d >= 0; d--) {
    if (n - 1 < 0 || nums1[m - 1] > nums2[n - 1]) {
      nums1[d] = nums1[m - 1];
      m--;
    } else {
      nums1[d] = nums2[n - 1];
      n--;
    }
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
