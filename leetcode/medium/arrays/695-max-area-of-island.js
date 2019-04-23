/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const counted = {};
  let max = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      max = Math.max(calcArea(grid, x, y, counted), max);
    }
  }

  return max;
};

function calcArea(grid, x, y, counted) {
  const key = `${x};${y}`;

  if (y < 0 || y > grid.length - 1) return 0;
  if (x < 0 || x > grid[0].length - 1) return 0;
  if (grid[y][x] === 0) return 0;
  if (counted[key]) return 0;

  counted[key] = true;

  let area = 1;

  area += calcArea(grid, x + 1, y, counted);
  area += calcArea(grid, x - 1, y, counted);
  area += calcArea(grid, x, y + 1, counted);
  area += calcArea(grid, x, y - 1, counted);

  return area;
}

// prettier-ignore
const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0]];

const grid2 = [[0, 0, 0, 0, 0, 0, 0, 0]];

console.log(maxAreaOfIsland(grid));
console.log(maxAreaOfIsland(grid2));
