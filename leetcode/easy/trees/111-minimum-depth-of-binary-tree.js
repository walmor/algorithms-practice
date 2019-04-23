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
var minDepth = function(root) {
  if (!root) return 0;

  let depth = 0;

  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);

  if (root.left && root.right) {
    depth = Math.min(leftDepth, rightDepth);
  } else if (root.left) {
    depth = leftDepth;
  } else if (root.right) {
    depth = rightDepth;
  }

  return depth + 1;
};

const root = {
  val: 1,
  left: {
    val: 2
  }
};

console.log(minDepth(root));
