// Easy. Quite similar to to PermCheck.
// 15 minutes.

function solution(A) {
  const set = {};

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) set[A[i]] = true;
  }

  for (let i = 1; i <= A.length; i++) {
    if (!set[i]) return i;
  }

  return A.length + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));

console.log(solution([-1]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([1, 2, 3, 4, 6]));
console.log(solution([1, 1, 1, 2, 2, 4, 4]));
