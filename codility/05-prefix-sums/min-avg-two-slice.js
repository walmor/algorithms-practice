// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let minAvg = (A[0] + A[1]) / 2;
  let len = 1;
  let index = 0;
  let sum = A[0];
  let minIndex = 0;

  for (let i = 1; i < A.length; i++) {
    len++;
    sum += A[i];
    const avg = sum / len;

    if (avg < minAvg) {
      minAvg = avg;
      minIndex = index;
    }

    if (A[i] < A[i - 1]) {
      sum = A[i];
      len = 1;
      index = i;
    }
  }

  return minIndex;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));
console.log(solution([-4, -2, -2, -5, -1, -5, -8]));

console.log(solution([4, 1]));
console.log(solution([4, -1, 3]));
console.log(solution([4, -1, 3]));
console.log(solution([4, 4, 4, 4, 4]));
console.log(solution([4, 4, 1]));
console.log(solution([4, 4, 2, 4, 2]));
console.log(solution([6, 4, 4, 3, 10]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([5, 4, 3, 2, 1]));
console.log(solution([1, 2, -5, -4, 1, 2, -6, -7]));
console.log(solution([0, 0]));
console.log(solution([0, 0, 0, 0, 5, 4, 0, 0, 0]));
console.log(solution([-10, 20, 5, 4, 0, 0]));
