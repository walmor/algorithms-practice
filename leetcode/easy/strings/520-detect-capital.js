// https://leetcode.com/problems/detect-capital

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let capitalCount = 0;
  let lastCapitalIndex = -1;

  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      capitalCount++;
      lastCapitalIndex = i;
    }
  }

  if (capitalCount === 0) return true;
  if (capitalCount === word.length) return true;
  if (capitalCount === 1 && lastCapitalIndex === 0) return true;

  return false;
};

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('FlaG'));
console.log(detectCapitalUse('Google'));
console.log(detectCapitalUse('A'));
console.log(detectCapitalUse('aA'));
