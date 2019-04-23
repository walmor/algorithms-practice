// https://leetcode.com/problems/implement-strstr

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[0]) continue;

    let found = true;

    for (let j = 1; j < needle.length; j++) {
      if (i + j > haystack.length - 1 || haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }

  return -1;
};

// console.log(strStr('', 'll'));
// console.log(strStr('', 'a'));
// console.log(strStr('hello', 'll'));
// console.log(strStr('hello', 'lll'));
// console.log(strStr('hello', 'h'));
// console.log(strStr('hello', 'e'));
// console.log(strStr('hello', 'l'));
// console.log(strStr('hello', 'o'));
// console.log(strStr('hello', 'hello'));
// console.log(strStr('haystack', 'stak'));
// console.log(strStr('haystack', 'cka'));
// console.log(strStr('haystack', 'haystack'));
// console.log(strStr('haystack', ''));

console.log(strStr('mississippi', 'issip'));
