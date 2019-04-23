/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(k) {
  if (k === 0) {
    return [1];
  }
  if (k === 1) {
    return [1, 1];
  }

  const prevRow = getRow(k - 1);

  const row = [1];

  for (let i = 0; i < prevRow.length - 1; i++) {
    row.push(prevRow[i] + prevRow[i + 1]);
  }

  row.push(1);

  return row;
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
console.log(getRow(6));
