// Pretty easy. 12 minutes.

function solution(N) {
  if (N < 1) return 0;

  let minPerimeter = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i * i <= N; i++) {
    if (N % i === 0) {
      const a = i;
      const b = N / i;
      const perimeter = 2 * (a + b);
      minPerimeter = Math.min(minPerimeter, perimeter);
    }
  }

  return minPerimeter;
}

console.log(solution(30));
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(1000000000));
