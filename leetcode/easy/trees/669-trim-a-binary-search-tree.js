// https://leetcode.com/problems/trim-a-binary-search-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return root;

  if (root.val < L) return trimBST(root.right, L, R);
  if (root.val > R) return trimBST(root.left, L, R);

  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);

  return root;
};

const tree1 = {
  val: 1,
  left: {
    val: 0,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
};

const tree2 = {
  val: 3,
  left: {
    val: 0,
    left: null,
    right: {
      val: 2,
      left: {
        val: 1
      }
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
};

// console.log(trimBST(tree1, 1, 2));
console.log(trimBST(tree2, 1, 3));
