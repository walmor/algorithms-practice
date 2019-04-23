/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  const trie = new Trie();

  buildTrie(trie, nums);

  let max = 0;

  for (let num of nums) {
    let numMaxXOR = findNumMaxXOR(trie, num);
    max = Math.max(max, numMaxXOR);
  }

  return max;
};

function buildTrie(trie, nums) {
  for (let num of nums) {
    const bits = [];
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1;
      bits.push(bit);
    }
    trie.add(bits);
  }
}

function findNumMaxXOR(trie, num) {
  let node = trie.root;
  let numMaxXOR = 0;

  for (let i = 31; i >= 0; i--) {
    const bit = (num >> i) & 1;

    if (node.children[bit ^ 1] !== undefined) {
      node = node.children[bit ^ 1];
      numMaxXOR |= 1 << i;
    } else {
      node = node.children[bit];
    }
  }

  return numMaxXOR;
}

class Trie {
  constructor() {
    this.root = { children: {} };
  }

  add(word) {
    let node = this.root;
    for (let char of word) {
      if (node.children[char] === undefined) {
        node.children[char] = { children: {} };
      }

      node = node.children[char];
    }
  }
}

console.log(findMaximumXOR([3, 2]));
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));
console.log(findMaximumXOR([3, 10, 5, 25, 26, 2, 8]));
console.log(findMaximumXOR([31, 32, 33, 34, 35]));
