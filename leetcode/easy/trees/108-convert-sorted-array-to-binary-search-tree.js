/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return sortedArrayToBSTRec(nums, 0, nums.length - 1);
};

function sortedArrayToBSTRec(nums, s, e) {
  if (e < s) return null;

  const middle = s + Math.ceil((e - s) / 2);

  const node = new TreeNode(nums[middle]);

  node.left = sortedArrayToBSTRec(nums, s, middle - 1);
  node.right = sortedArrayToBSTRec(nums, middle + 1, e);

  return node;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
