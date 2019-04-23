// I've got a little bit confused. But I did in 50 minutes. It was medium.

function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] <= A[i + 2]) continue;
    if (A[i] + A[i + 2] <= A[i + 1]) continue;
    if (A[i + 1] + A[i + 2] <= A[i]) continue;

    return 1;
  }

  return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1, 80]));
console.log(solution([-1, -2, 0, 4, 10, 10]));
console.log(solution([0, 0, 0, 0, 0, 0]));
console.log(solution([-1, -2, 0, 3]));
