const { arrToTree, treeToArr } = require('../../utils/leetcode-arr-to-tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;

  const node = new TreeNode();

  if (t1 && t2) {
    node.val = t1.val + t2.val;
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);
  } else if (t1) {
    node.val = t1.val;
    node.left = mergeTrees(t1.left, null);
    node.right = mergeTrees(t1.right, null);
  } else {
    node.val = t2.val;
    node.left = mergeTrees(null, t2.left);
    node.right = mergeTrees(null, t2.right);
  }

  return node;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const t1 = arrToTree([1, 3, 2, 5]);
const t2 = arrToTree([2, 1, 3, null, 4, null, 7]);
const result = mergeTrees(t1, t2);

console.log(treeToArr(result));
