// https://leetcode.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] === undefined) {
      map1[s[i]] = 0;
    } else {
      map1[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map2[t[i]] === undefined) {
      map2[t[i]] = 0;
    } else {
      map2[t[i]]++;
    }
  }

  for (const char in map1) {
    if (map2[char] !== map1[char]) return false;
  }

  return true;
};

// const sSorted = s
//   .trim()
//   .split('')
//   .sort()
//   .join('');

// const tSorted = t
//   .trim()
//   .split('')
//   .sort()
//   .join('');

// return sSorted === tSorted;

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('cat', 'rat'));
