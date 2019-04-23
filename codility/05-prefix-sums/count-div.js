// For me was hard to find the correct O(1).
// 75% of correcteness, 100% of performance = score = 87%
// 1 failed edge case = [0, 0, X] = zero is divible by any number
// 45 minutes

function solution(A, B, K) {
  if (K > B) return A === 0 ? 1 : 0;

  let l = A;
  let r = B;

  if (A % K !== 0) {
    l = Math.floor(A / K) * K + K;
  }

  if (B % K !== 0) {
    r = Math.floor(B / K) * K;
  }

  return Math.floor((r - l) / K) + 1;
}

// console.log(solution(6, 12, 2));
// console.log(solution(7, 12, 2));
// console.log(solution(6, 11, 2));
// console.log(solution(7, 11, 2));

// console.log(solution(3, 9, 3));
// console.log(solution(3, 8, 3));
// console.log(solution(0, 3, 3));
// console.log(solution(3, 3, 3));
console.log(solution(1, 3, 5));
// console.log(solution(1, 1000, 3));
// console.log(solution(3, 999, 3));
// console.log(solution(6, 12, 12));
console.log(solution(0, 10, 11));
// console.log(solution(3, 9, 3));
