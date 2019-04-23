// https://leetcode.com/problems/to-lower-case

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }

    output += String.fromCharCode(charCode);
  }

  return output;
};

console.log(toLowerCase('aaaABCDEFGHIJKLMNOPQRSTUVWXYZ'));
