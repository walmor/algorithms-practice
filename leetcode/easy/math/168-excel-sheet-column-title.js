/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n <= 0) return '';

  let output = '';
  let r;

  do {
    r = n % 26;
    n = Math.floor(n / 26);

    if (r === 0) {
      r = 26;
      n -= 1;
    }

    output = String.fromCharCode(64 + r) + output;
  } while (n > 26);

  if (n > 0) {
    output = String.fromCharCode(64 + n) + output;
  }

  return output;
};

for (let i = 690; i < 720; i++) {
  console.log('dec: %d, ex: %s', i, convertToTitle(i));
}
