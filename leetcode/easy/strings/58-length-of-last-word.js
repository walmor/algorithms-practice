/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) return 0;

  s = s.trim();

  const lastSpaceIdx = s.lastIndexOf(' ');

  if (lastSpaceIdx == -1) return s.length;

  const lastWord = s.substr(lastSpaceIdx + 1);

  return lastWord.length;
};

console.log(lengthOfLastWord('Hello World A '));
console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('Hello'));
console.log(lengthOfLastWord(''));
console.log(lengthOfLastWord(null));
