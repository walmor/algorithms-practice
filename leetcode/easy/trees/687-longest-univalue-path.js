const { arrToTree } = require('../../utils/leetcode-arr-to-tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  const max = { val: 0 };
  traverse(root, null, max);
  return max.val;
};

function traverse(root, prev, max) {
  if (!root) return -1;

  let leftCount = traverse(root.left, root.val, max);
  let rightCount = traverse(root.right, root.val, max);

  max.val = Math.max(max.val, leftCount + rightCount + 2);

  if (root.val !== prev) return -1;

  return Math.max(leftCount, rightCount) + 1;
}

console.log(longestUnivaluePath(arrToTree([5, 4, 5, 1, 1, null, 5])));
console.log(longestUnivaluePath(arrToTree([1, 4, 5, 4, 4, null, 5])));
console.log(longestUnivaluePath(arrToTree([1, 1, 1, 1, null, 1])));
console.log(longestUnivaluePath(arrToTree([5, 5, null, 5, null, 5, 5, null, null, 5])));
console.log(longestUnivaluePath(arrToTree([5, 5, null, 5, 5, 5, null, null, null, 5])));
console.log(longestUnivaluePath(arrToTree([1, 2, 2, 2, 2, 2, 2, 2])));
console.log(longestUnivaluePath(arrToTree([1])));
console.log(longestUnivaluePath(arrToTree([])));
