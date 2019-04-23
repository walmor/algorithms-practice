// Easy.
// 20 min. Did it in 10 minutes and spent 10 minutes thinking about possible flaws.

function solution(A) {
  const map = {};

  for (let i = 0; i < A.length; i++) {
    map[A[i]] = true;
  }

  for (let i = 1; i <= A.length; i++) {
    if (!map[i]) return 0;
  }

  return 1;
}

// console.log(solution([4, 1, 3, 2]));
// console.log(solution([4, 1, 3]));
// console.log(solution([3, 4]));
// console.log(solution([6, 2, 3, 4, 5, 1]));
// console.log(solution([6, 5, 4, 3, 2, 1]));

let arr = [];
for (let i = 1; i < 100000; i++) {
  arr.push(i + 1);
}

console.log(solution(arr));

// console.log(solution([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]));
