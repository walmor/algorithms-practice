// I had already done this on LeetCode
// 25 minutes, just because I was playing around with somethings.

function solution(A) {
  const maxsi = Number.MAX_SAFE_INTEGER;
  const minsi = Number.MIN_SAFE_INTEGER;

  let min = [maxsi, maxsi];
  let max = [minsi, minsi, minsi];

  for (let i = 0; i < A.length; i++) {
    let num = A[i];

    if (num < min[0]) {
      min[1] = min[0];
      min[0] = num;
    } else if (num < min[1]) {
      min[1] = num;
    }

    if (num > max[0]) {
      max[2] = max[1];
      max[1] = max[0];
      max[0] = num;
    } else if (num > max[1]) {
      max[2] = max[1];
      max[1] = num;
    } else if (num > max[2]) {
      max[2] = num;
    }
  }

  return Math.max(max[0] * max[1] * max[2], min[0] * min[1] * max[0]);
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([0, 0, 0]));
console.log(solution([-1, 2, -2]));
console.log(solution([-1, 2, -2, 3]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 4, 9, -10, -30, 4, 2]));
console.log(solution([1, -2, -2, -9, -10, -30, -4, -2]));
