// https://leetcode.com/problems/goat-latin

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  const words = S.split(' ');
  const newWords = [];
  const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (vowels.indexOf(words[i][0]) === -1) {
      word = word.substr(1) + word[0];
    }

    word += 'ma' + 'a'.repeat(i + 1);
    newWords.push(word);
  }

  return newWords.join(' ');
};

console.log(toGoatLatin('I speak Goat Latin'));
console.log(toGoatLatin('The quick brown fox jumped over the lazy dog'));
