// Easy. But took me a while to undertand the problem. A really convoluted description.
// 40 minutes

function solution(A, B) {
  if (A.length === 0) return 0;

  let minEnd = B[0];
  let count = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] > minEnd) {
      count++;
      minEnd = B[i];
    }
  }

  return count;
}

console.log(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]));
console.log(solution([1, 2, 4], [3, 5, 6]));
console.log(solution([1, 1, 1], [3, 3, 3]));
console.log(solution([1, 3, 5], [2, 4, 6]));
