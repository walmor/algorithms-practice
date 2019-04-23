/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let layer = 0;
  const n = matrix.length;
  const layers = Math.floor(n / 2);

  while (layer < layers) {
    for (let col = layer; col < n - layer - 1; col++) {
      const temp = matrix[layer][col];

      matrix[layer][col] = matrix[n - col - 1][layer];
      matrix[n - col - 1][layer] = matrix[n - layer - 1][n - col - 1];
      matrix[n - layer - 1][n - col - 1] = matrix[col][n - layer - 1];
      matrix[col][n - layer - 1] = temp;
    }
    layer++;
  }

  return matrix;
};

// prettier-ignore
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// prettier-ignore
const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

// prettier-ignore
const matrix3 = [
  [1, 2],
  [3, 4]
];

// prettier-ignore
const matrix4 = [
  [1]
];

// prettier-ignore
const matrix5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

console.log(rotate(matrix1));
console.log(rotate(matrix2));
console.log(rotate(matrix3));
console.log(rotate(matrix4));
console.log(rotate(matrix5));
