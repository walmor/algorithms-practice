// Easy.
// 20 min. I spent a lot of time thinking about possible edge cases.

function solution(A) {
  let left = A[0];
  let right = 0;

  for (let i = 1; i < A.length; i++) {
    right += A[i];
  }

  let minDiff = Math.abs(left - right);

  for (let i = 1; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    minDiff = Math.min(minDiff, Math.abs(left - right));
  }

  return minDiff;
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([-3, -3, -2, -4, -3]));
console.log(solution([2, 2, 2, 2]));
