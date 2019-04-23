// It seens easy but it can catch you if you don't pay attention to edge cases;
// such as 1 and perfect square roots.
// 25 minutes.

function solution(N) {
  if (N === 1) return 1;

  let factorsCount = 2;

  for (let i = 2; i * i <= N; i++) {
    if (N % i === 0) factorsCount += 2;
    if (i * i === N) factorsCount--;
  }

  return factorsCount;
}

console.log(solution(5));
console.log(solution(7));
console.log(solution(8));
console.log(solution(11));
console.log(solution(13));
console.log(solution(15));
console.log(solution(30));
console.log(solution(25));
console.log(solution(16));
console.log(solution(9));
console.log(solution(10));
console.log(solution(60));
console.log(solution(73));
console.log(solution(23));
console.log(solution(24));
console.log(solution(1));
console.log(solution(2));
