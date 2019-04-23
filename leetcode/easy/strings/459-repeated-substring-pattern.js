// https://leetcode.com/problems/repeated-substring-pattern

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s.length % (i + 1) !== 0) continue;

    const l = i + 1;
    const sub = s.substr(0, l);
    let issub = true;

    for (let j = l; j + l <= s.length; j += l) {
      if (sub !== s.substr(j, l)) {
        issub = false;
        break;
      }
    }

    if (issub) return true;
  }

  return false;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern2 = function(s) {
  if (!s) return false;
  return (s + s).substring(1, s.length + s.length - 1).indexOf(s) > -1;
};

const fnTest = repeatedSubstringPattern2;

console.log(fnTest(''));
console.log(fnTest('a'));
console.log(fnTest('abac'));
console.log(fnTest('ababab'));
console.log(fnTest('abcabcabcabc'));
console.log(fnTest('abcabcabc'));
console.log(fnTest('acaacaaca'));
console.log(fnTest('aaaaaa'));
console.log(fnTest('gojoajoag'));
