/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let c = 0; c < cols - 1; c++) {
    let num = null;
    for (let r = 0; r < rows && c + r < cols; r++) {
      const value = matrix[r][c + r];
      if (num === null) {
        num = value;
      } else if (num !== value) {
        return false;
      }
    }
  }

  for (let rw = 1; rw < rows - 1; rw++) {
    let num = null;
    for (let cl = 0; cl < cols && rw + cl < rows; cl++) {
      const value = matrix[rw + cl][cl];
      if (num === null) {
        num = value;
      } else if (num !== value) {
        return false;
      }
    }
  }

  return true;
};

var isToeplitzMatrix2 = function(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r > 0 && c > 0 && matrix[r - 1][c - 1] !== matrix[r][c]) {
        return false;
      }
    }
  }

  return true;
};

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 1, 2, 3],
//   [9, 5, 1, 2]
// ];

// const matrix2 = [
//   [1, 2, 3, 4, 1],
//   [5, 1, 2, 3, 4],
//   [9, 5, 1, 2, 3],
//   [7, 9, 5, 1, 2]
// ];

// const matrix6 = [
//   [1, 2, 3, 4],
//   [5, 1, 2, 3],
//   [9, 5, 1, 2],
//   [7, 9, 5, 1],
//   [6, 7, 9, 5],
//   [1, 6, 7, 9]
// ];

// const matrix3 = [
//   [1, 2, 3, 4],
//   [5, 1, 2, 3],
//   [9, 5, 1, 6]
// ];

const matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]];
const matrix2 = [[1, 2, 3, 4, 1], [5, 1, 2, 3, 4], [9, 5, 1, 2, 3], [7, 9, 5, 1, 2]];
const empty = [[1]];
const matrix3 = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 6]];
const matrix4 = [[1, 2], [5, 1]];
const matrix5 = [[2, 2], [2, 2]];
const matrix6 = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2], [7, 9, 5, 1], [6, 7, 9, 5], [1, 6, 7, 9]];

/* prettier-ignore */
const matrix6 = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
  [7, 9, 5, 1],
  [6, 7, 9, 5],
  [1, 6, 7, 9]
];

const isToeplitzMat = isToeplitzMatrix2;

console.log(isToeplitzMat(matrix));
console.log(isToeplitzMat(matrix2));
console.log(isToeplitzMat(empty));
console.log(isToeplitzMat(matrix3));
console.log(isToeplitzMat(matrix4));
console.log(isToeplitzMat(matrix5));
console.log(isToeplitzMat(matrix6));
