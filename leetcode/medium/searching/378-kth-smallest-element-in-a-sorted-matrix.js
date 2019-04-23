/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let lo = matrix[0][0];
  let hi = matrix[matrix.length - 1][matrix[0].length - 1] + 1; //[lo, hi)

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    let count = 0;
    let j = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++) {
      console.log('matrix[%d][%d]: %d', i, j, matrix[i][j]);

      while (j >= 0 && matrix[i][j] > mid) j--;
      count += j + 1;
    }

    console.log('lo: %d, hi: %d, mid: %d, count: %d', lo, hi, mid, count);

    if (count < k) lo = mid + 1;
    else hi = mid;
  }

  return lo;
};

// prettier-ignore
let matrix = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18]
];

// prettier-ignore
let matrix2 = [
  [1, 2],
  [2, 3]
];

// prettier-ignore
let matrix3 = [
  [1, 11, 21],
  [2, 12, 22],
  [3, 13, 23]
];

// for (let i = 1; i <= 9; i++) {
//   console.log(kthSmallest(matrix, i));
// }

// for (let i = 1; i <= 4; i++) {
//   console.log(kthSmallest(matrix2, i));
// }

for (let i = 9; i <= 9; i++) {
  console.log(kthSmallest(matrix3, i));
}
