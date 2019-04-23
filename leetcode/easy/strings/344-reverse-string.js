/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let output = '';

  for (let i = 0; i < s.length; i++) {
    output = s[i] + output;
  }

  return output;
};

console.log(reverseString('abcde'));
console.log(reverseString('hello'));
