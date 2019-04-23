/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let f1 = cost[0];
  let f2 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let curr = Math.min(f1, f2) + cost[i];
    f1 = f2;
    f2 = curr;
  }

  return Math.min(f1, f2);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
