/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();

  if (!ransomNote) return true;

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];
    if (map.has(letter)) {
      let count = map.get(letter) - 1;

      if (count === 0) {
        map.delete(letter);
        if (map.size === 0) return true;
      } else {
        map.set(letter, count);
      }
    }
  }

  return false;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('a', 'ab'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
