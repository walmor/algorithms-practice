// https://leetcode.com/problems/path-sum-iii

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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  return pathSumRec(root, sum, 0, { '0': 1 });
};

function pathSumRec(root, target, currSum, map) {
  if (!root) return 0;

  currSum += root.val;

  let count = map[currSum - target] || 0;
  map[currSum] = (map[currSum] || 0) + 1;

  count += pathSumRec(root.left, target, currSum, map);
  count += pathSumRec(root.right, target, currSum, map);

  map[currSum]--;

  return count;
}

console.log(pathSum(arrToTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8));
