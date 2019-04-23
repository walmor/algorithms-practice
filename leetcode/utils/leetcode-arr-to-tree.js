function arrToTree(arr) {
  if (!arr || !arr.length) return null;

  const root = { val: arr[0], left: null, right: null };
  const queue = [root];

  for (let i = 1; i < arr.length; i += 2) {
    const node = queue.shift();

    if (arr[i] !== null) {
      node.left = {
        val: arr[i],
        right: null,
        left: null
      };
      queue.push(node.left);
    }

    if (i + 1 < arr.length && arr[i + 1] !== null) {
      node.right = {
        val: arr[i + 1],
        right: null,
        left: null
      };
      queue.push(node.right);
    }
  }

  return root;
}

function treeToArr(node) {
  if (!node) return [];

  const queue = [];
  const arr = [];
  queue.push(node);

  while (queue.length) {
    const node = queue.shift();
    arr.push(node ? node.val : null);

    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  while (arr[arr.length - 1] === null) {
    arr.pop();
  }

  return arr;
}

module.exports = {
  arrToTree,
  treeToArr
};
