// Easy.
// 25 minutes. Too much time to that task. I've got a little struggle with some indexes.

function solution(A, K) {
  if (!A || !A.length) return A;

  K = K % A.length;
  if (K === 0) return A;

  let rotated = [];

  for (let i = 0; i < A.length; i++) {
    let j = i + K;
    if (j >= A.length) j = j - A.length;
    rotated[j] = A[i];
  }

  return rotated;
}

console.log(solution([1, 2, 3], 1));
console.log(solution([1, 2, 3], 2));
console.log(solution([1, 2, 3], 3));
console.log(solution([1, 2, 3, 4, 5], 2));
console.log(solution([1, 2, 3, 4, 5], 16));
console.log(solution([1], 9));
console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4));
console.log(solution([], 4));
