// Too easy.
// I spent 20 minutes, but just to make sure I wasn't misundertading anything.

function solution(A) {
  let pairs = 0;
  let ones = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 1) {
      ones++;
    } else {
      pairs += ones;
      if (pairs > 1000000000) return -1;
    }
  }

  return pairs;
}

console.log(solution([0, 1, 0, 1, 1]));
console.log(solution([0, 1, 0, 0, 0]));
console.log(solution([1, 0, 0, 0, 0]));
console.log(solution([0, 0, 0, 0, 1]));
console.log(solution([0, 0, 0, 0, 0]));
console.log(solution([1, 1, 1, 1]));
console.log(solution([0, 1, 1, 1]));
console.log(solution([1]));

// console.log(solution([0]));
// console.log(solution([1]));

// const arr = [];
// for (let i = 0; i < 100000; i++) {
//   arr.push(i % 2 === 0 ? 1 : 0);
// }

// console.log(solution(arr));
