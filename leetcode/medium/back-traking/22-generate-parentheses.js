/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const set = [];
  generateRec(n, '(', 1, 0, set);
  return set;
};

function generateRec(n, curr, open, closed, set) {
  if (curr.length === n * 2) {
    set.push(curr);
    return;
  }

  if (open < n) {
    generateRec(n, curr + '(', open + 1, closed, set);
  }

  if (open > closed || curr[curr.length - 1] === '(') {
    generateRec(n, curr + ')', open, closed + 1, set);
  }
}

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
