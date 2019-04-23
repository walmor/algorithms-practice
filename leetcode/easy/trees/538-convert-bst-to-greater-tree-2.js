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
};

function convertBSTRec(root, sum) {
  if (!root) return;

  convertBSTRec(root.right, sum);

  sum.val += root.val;
  root.val = sum.val;

  convertBSTRec(root.left, sum);
}

const tree = arrToBT([5, 3, 8, 2, 4, 7, 9, 1, null, null, null, 6]);

console.log(btToArr(tree));
convertBST(tree);
console.log(btToArr(tree));

function arrToBT(arr, i = 0) {
  if (i >= arr.length || arr[i] === null) return null;

  return {
    val: arr[i],
    left: arrToBT(arr, i * 2 + 1),
    right: arrToBT(arr, i * 2 + 2)
  };
}

function btToArr(node, arr = [], i = 0) {
  if (!node) {
    return;
  }

  arr[i] = node.val;
  btToArr(node.left, arr, i * 2 + 1);
  btToArr(node.right, arr, i * 2 + 2);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      arr[i] = null;
    }
  }

  return arr;
}

// console.log(btToArr(arrToBT([5, 3, 8, 2, 4, 7, 9, 1, null, null, null, 6])));
