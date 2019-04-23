// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  while ((p.val < root.val && q.val < root.val) || (p.val > root.val && q.val > root.val)) {
    root = p.val < root.val ? root.left : root.right;
  }

  return root;
};

console.log(lowestCommonAncestor(arrToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), { val: 2 }, { val: 8 }).val);
console.log(lowestCommonAncestor(arrToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), { val: 3 }, { val: 5 }).val);
console.log(lowestCommonAncestor(arrToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), { val: 2 }, { val: 8 }).val);
console.log(lowestCommonAncestor(arrToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), { val: 0 }, { val: 9 }).val);
console.log(lowestCommonAncestor(arrToTree([1, 0]), { val: 0 }, { val: 1 }).val);
