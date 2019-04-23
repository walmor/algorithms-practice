// Silly mistake that gave 50% score. That CANNOT HAPPEN.
// If no element is missing in the middle, the last element is missing.
// 20 min

function solution(A) {
  for (let i = 0; i < A.length; i++) {
    let n = Math.abs(A[i]);
    if (n - 1 < A.length) {
      A[n - 1] = -A[n - 1];
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) return i + 1;
  }

  return A.length + 1;
}

// console.log(solution([2, 3, 1, 5]));
// console.log(solution([1, 2, 3, 4, 6, 7]));
// console.log(solution([1, 3, 4]));
// console.log(solution([3, 1]));
// console.log(solution([1, 4, 2]));
console.log(solution([1, 2]));
console.log(solution([]));

console.log(solution([1, 3, 2, 4, 5, 6, 7]));
