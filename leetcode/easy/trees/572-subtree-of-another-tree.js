/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  let issub = compare(s, t);
  if (issub) return true;

  if (s.left) issub = isSubtree(s.left, t);
  if (issub) return true;

  if (s.right) issub = isSubtree(s.right, t);
  return issub;
};

function compare(s, t) {
  if (!s && !t) return true;
  if (!s || !t) return false;
  if (s.val !== t.val) return false;

  let issub = compare(s.left, t.left);

  if (!issub) return false;

  return compare(s.right, t.right);
}

// [3, 4, 5, 1, 2, null, null, null, null, 0]
