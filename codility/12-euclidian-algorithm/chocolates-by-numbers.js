// My first solution worked but with 50% performance.
// It was necessary to use lcm and gdc, which would be quite hard to come up with
// without previous knowledge and some hint. The hint could be the O(log(N + M))
// 18 min

// function solution(N, M) {
//   const eatenChocs = {};
//   let count = 0;
//   let index = 0;

//   while (eatenChocs[index] === undefined) {
//     count++;
//     eatenChocs[index] = true;
//     index = (index + M) % N;
//   }

//   return count;
// }

function solution(N, M) {
  return lcm(N, M) / M;
}

function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(solution(10, 4));
console.log(solution(1, 5));
console.log(solution(2, 5));
console.log(solution(10, 3));
