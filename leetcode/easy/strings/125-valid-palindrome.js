// https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return true;

  let str = s.trim().toLowerCase();
  str = str.replace(/\W/g, '');

  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('abc'));
console.log(isPalindrome('aba'));
console.log(isPalindrome(''));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' a,... b;;;,: a '));
console.log(isPalindrome('123'));
console.log(isPalindrome('   '));
console.log(isPalindrome(';;;;...'));
console.log(isPalindrome('121'));
