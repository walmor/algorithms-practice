/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  const map = {};

  for (let i = 0; i < height.length; i++) {
    map[height[i]] = i;
  }

  height.sort();

  for (let i = 0; i < height.length; i++) {
    const pos = map[height[i]];

    const area = height[i] * Math.max(height.length - 1 - pos, pos);

    console.log('position: ' + pos + ' height: ' + height[i] + ' area: ' + area);

    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

// console.log(maxArea([0, 0]));
// console.log(maxArea([1, 1]));
// console.log(maxArea([2, 2]));
console.log(maxArea([1, 3, 4]));
// console.log(maxArea([1, 1, 1, 5, 5]));
// console.log(maxArea([1, 1, 1, 4, 5]));
// console.log(maxArea([3, 1, 1, 4, 5]));
