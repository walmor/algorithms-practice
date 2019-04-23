// https://leetcode.com/problems/rotated-digits

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  const map = {
    '0': '0',
    '1': '1',
    '2': '5',
    '5': '2',
    '6': '9',
    '8': '8',
    '9': '6'
  };

  let count = 0;
  const ans = [];

  for (let i = 1; i <= N; i++) {
    if (isValid(map, i)) {
      ans.push(i);
      count++;
    }
  }

  console.log(ans);

  return count;
};

function isValid(map, n) {
  const s = n.toString();
  let rotated = '';

  for (let i = 0; i < s.length; i++) {
    const r = map[s[i]];
    if (r === undefined) return false;
    rotated += r;
  }

  return rotated !== s;
}

console.log(rotatedDigits(857));
