/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char] === undefined) {
      map[char] = { count: 1, idx: i };
    } else {
      map[char].count++;
    }
  }

  let min = -1;

  for (char in map) {
    if (map[char].count > 1) continue;

    if (min === -1 || map[char].idx < min) {
      min = map[char].idx;
    }
  }

  return min;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
