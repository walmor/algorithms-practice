/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let zeros = 0;
  let ones = 0;
  let max = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      zeros++;
    } else {
      ones++;
      max = Math.max(max, Math.ceil(zeros / ones));
      ones = 1;
      zeros = 0;
    }
  }

  if (zeros > 0) {
    max = Math.max(max, Math.ceil(zeros / ones));
  }

  return max;
};

console.log(maxDistToClosest([1, 0]));
console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([0, 0, 0, 1]));
console.log(maxDistToClosest([0, 0, 0, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0, 0, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0, 0, 0, 0]));
