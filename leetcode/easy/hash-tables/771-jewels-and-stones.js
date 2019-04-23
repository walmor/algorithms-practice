// https://leetcode.com/problems/jewels-and-stones

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const map = {};
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    map[S[i]] = (map[S[i]] || 0) + 1;
  }

  for (let i = 0; i < J.length; i++) {
    if (map[J[i]]) {
      count += map[J[i]];
    }
  }

  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
console.log(numJewelsInStones('abcD', 'aaaabbbccc'));
console.log(numJewelsInStones('', 'fafa'));
console.log(numJewelsInStones('ABC', 'ABC'));
console.log(numJewelsInStones('ABC', 'ABC'));
