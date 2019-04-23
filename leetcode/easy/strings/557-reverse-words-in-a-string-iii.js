// https://leetcode.com/problems/reverse-words-in-a-string-iii

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = s.trim().split(' ');
  const ans = [];

  for (let i = 0; i < words.length; i++) {
    ans.push(reverseString(words[i]));
  }

  return ans.join(' ');
};

function reverseString(s) {
  let output = '';

  for (let i = 0; i < s.length; i++) {
    output = s[i] + output;
  }

  return output;
}

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords(' contest '));
