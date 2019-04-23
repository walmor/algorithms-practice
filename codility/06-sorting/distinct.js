// Too easy. 10 minutes.

function solution(A) {
  const set = {};

  for (let i = 0; i < A.length; i++) {
    set[A[i]] = true;
  }

  return Object.keys(set).length;
}

console.log(solution([2, 1, 1, 2, 3, 1]));
console.log(solution([1]));
console.log(solution([-1, -2, 1, 2]));
console.log(solution([0]));
console.log(solution([0, 0, 0, 0, 0]));
console.log(solution([-1, -1, -1, -2, -2]));
console.log(solution([]));

let arr = [];

// for (let i = 0; i < 100000; i++) {
//   const n = Math.floor(Math.random() * 100);
//   console.log(n);
//   arr.push(n);
// }

// console.log(solution(arr));
