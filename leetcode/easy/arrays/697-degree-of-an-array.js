/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = {
        start: i,
        count: 1,
        end: i
      };
    } else {
      map[nums[i]].count++;
      map[nums[i]].end = i;
    }
  }

  let freq = [];
  let max = 0;

  for (n in map) {
    if (map[n].count > max) {
      freq = [parseInt(n)];
      max = map[n].count;
    } else if (map[n].count === max) {
      freq.push(parseInt(n));
    }
  }

  let min = nums.length;

  for (let i = 0; i < freq.length; i++) {
    min = Math.min(map[freq[i]].end - map[freq[i]].start + 1, min);
  }

  return min;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
console.log(findShortestSubArray([1, 2, 3, 4, 5, 6, 7]));
console.log(findShortestSubArray([1]));
console.log(findShortestSubArray([]));
console.log(findShortestSubArray([2, 5, 4, 3, 2, 1, 1]));
