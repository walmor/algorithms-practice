/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  const buckets = [];

  for (num in map) {
    const freq = map[num];

    if (buckets[freq] === undefined) {
      buckets[freq] = [];
    }

    buckets[freq].push(parseInt(num));
  }

  const answer = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    for (let j = 0; buckets[i] && j < buckets[i].length; j++) {
      answer.push(buckets[i][j]);
      if (answer.length === k) return answer;
    }
  }

  return answer;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 1));
