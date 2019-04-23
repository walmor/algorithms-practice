// https://leetcode.com/problems/most-common-word

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const bannedMap = {};
  const countMap = {};

  for (let i = 0; i < banned.length; i++) {
    bannedMap[banned[i].toLowerCase()] = true;
  }

  const words = paragraph.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
      .toLowerCase()
      .replace(/\W*/g, '')
      .trim();

    if (bannedMap[word]) continue;

    countMap[word] = (countMap[word] || 0) + 1;
  }

  let max = -1;
  let mcw = '';

  console.log(countMap);

  for (let word in countMap) {
    if (countMap[word] > max) {
      max = countMap[word];
      mcw = word;
    }
  }

  return mcw;
};

console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']));
