const { arrToTree } = require('../../utils/leetcode-arr-to-tree');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let i = { val: 0 };
  return traverse(root, k, i);
};

function traverse(root, k, i) {
  if (!root) return null;

  let value = traverse(root.left, k, i);

  if (value !== null) return value;

  if (k === ++i.val) {
    return root.val;
  }

  return traverse(root.right, k, i);
}

console.log(kthSmallest(arrToTree([5, 3, 6, 2, 4, null, null, 1]), 3));
