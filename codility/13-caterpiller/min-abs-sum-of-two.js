function solution(A) {
  A.sort((a, b) => a - b);

  let l = 0;
  let r = A.length - 1;
  let min = Number.MAX_SAFE_INTEGER;

  while (l <= r) {
    const absLeft = Math.abs(A[l]);
    const absRight = Math.abs(A[r]);

    min = Math.min(min, absLeft * 2, absRight * 2, Math.abs(A[l] + A[r]));

    if (absRight > absLeft) {
      r--;
    } else {
      l++;
    }
  }

  return min;
}

console.log(solution([-10, -8, 3, 4, 5]));
console.log(solution([1, 4, -3]));
console.log(solution([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([-1, -2, -3, -4, -5]));
console.log(solution([-5]));
console.log(solution([-14, -9, -5, 3, 4, 5, 10, 19, 21]));
