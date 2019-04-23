// https://leetcode.com/problems/letter-case-permutation

var letterCasePermutation = function(S) {
  const result = [];
  helper(S, 0, '', result);
  return result;
};

function helper(S, index, word, result) {
  if (S.length === word.length) {
    result.push(word);
    return;
  }

  helper(S, index + 1, word + S.charAt(index).toLowerCase(), result);

  if (S.charCodeAt(index) >= 65) {
    helper(S, index + 1, word + S.charAt(index).toUpperCase(), result);
  }
}

console.log(letterCasePermutation2('a1b2'));
console.log(letterCasePermutation2('3z4'));
console.log(letterCasePermutation2('12345'));
console.log(letterCasePermutation2('abcd'));
