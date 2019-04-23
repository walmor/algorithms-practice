// https://leetcode.com/problems/pascals-triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const ans = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      ans.push([1]);
      continue;
    }

    const row = [1];
    const prev = ans[i - 1];

    for (let j = 0; j < prev.length - 1; j++) {
      row.push(prev[j] + prev[j + 1]);
    }

    row.push(1);
    ans.push(row);
  }

  return ans;
};

console.log(generate(10));
