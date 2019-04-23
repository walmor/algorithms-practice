/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  return compare(root.left, root.right);
};

function compare(n1, n2) {
  if (!n1 && !n2) return true;
  if (!n1 || !n2) return false;
  if (n1.val !== n2.val) return false;

  let symmetric = compare(n1.left, n2.right);

  if (!symmetric) return false;

  return compare(n1.right, n2.left);
}
