/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;

  while (l <= r) {
    if (s[l] !== s[r]) {
      return isPalindrome(s, l, r - 1) || isPalindrome(s, l + 1, r);
    } else {
      l++;
      r--;
    }
  }

  return true;
};

function isPalindrome(s, l, r) {
  while (l <= r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

// console.log(validPalindrome('abcba'));
// console.log(validPalindrome('abcca'));
// console.log(validPalindrome('accba'));
// console.log(validPalindrome('aba'));
// console.log(validPalindrome('abca'));
console.log(
  validPalindrome(
    'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga'
  )
);
