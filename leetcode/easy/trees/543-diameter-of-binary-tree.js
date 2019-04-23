// https://leetcode.com/problems/diameter-of-binary-tree

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
var diameterOfBinaryTree = function(root) {
  const max = { val: 0 };
  diameterOfBinaryTreeRec(root, max);
  return max.val;
};

function diameterOfBinaryTreeRec(root, max) {
  if (!root) return -1;

  const left = diameterOfBinaryTreeRec(root.left, max);
  const right = diameterOfBinaryTreeRec(root.right, max);

  max.val = Math.max(max.val, left + right + 2);

  return Math.max(left, right) + 1;
}
