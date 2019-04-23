/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  convertBSTRec(root, { val: 0 });
  return root;
};

function convertBSTRec(root, sum) {
  if (!root) return;

  convertBSTRec(root.right, sum);

  sum.val += root.val;
  root.val = sum.val;

  convertBSTRec(root.left, sum);
}

const tree = {
  val: 5,
  left: {
    val: 2
  },
  right: {
    val: 13
  }
};

console.log(convertBST(tree));
