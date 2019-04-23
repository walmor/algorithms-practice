// Too easy.
// 8 min. Just to be sure that I wasn't missing anything
function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

console.log(solution(10, 85, 30));
console.log(solution(10, 10, 30));
console.log(solution(10, 11, 1));
console.log(solution(1, 1, 1));
console.log(solution(1, 5, 3));
console.log(solution(1, 6, 2));
