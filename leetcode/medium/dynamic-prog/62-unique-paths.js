/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const board = [];

  for (let i = 0; i < n; i++) {
    board.push([]);
  }

  board[0][0] = 1;

  const getValue = (x, y) => {
    if (x < 0 || y < 0) return 0;
    return board[y][x];
  };

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (x == 0 && y == 0) continue;
      board[y][x] = getValue(x, y - 1) + getValue(x - 1, y);
    }
  }

  return board[n - 1][m - 1];
};

// var uniquePaths = function(m, n) {
//   return uniquePathsRec(m - 1, n - 1, m, n);
// };

// function uniquePathsRec(x, y, m, n) {
//   if (x < 0 || y < 0) return 0;
//   if (x === 0 && y === 0) return 1;

//   return uniquePathsRec(x - 1, y, m, n) + uniquePathsRec(x, y - 1, m, n);
// }

// console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
