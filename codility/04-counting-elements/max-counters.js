// Medium.
// Took me 10 minutes to find the optimal solution and 40 minutes to finish with lots of tests cases

function solution(N, A) {
  let map = {};
  const counters = [];
  let max = 0;
  let base = 0;

  for (let i = 0; i < A.length; i++) {
    let counter = A[i] - 1;
    if (counter >= N) {
      map = {};
      base += max;
      max = 0;
    } else {
      if (map[counter] === undefined) {
        map[counter] = 1;
      } else {
        map[counter]++;
      }
      max = Math.max(max, map[counter]);
    }
  }

  for (let i = 0; i < N; i++) {
    counters[i] = base + (map[i] || 0);
  }

  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(5, [3, 4, 4, 1, 1, 4, 4]));
console.log(solution(5, [1, 2, 3, 4, 5]));
console.log(solution(5, [3]));
console.log(solution(5, [3, 6]));
console.log(solution(5, [6, 3]));
console.log(solution(1, [1, 1, 2, 2, 2]));
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4, 7]));
console.log(solution(3, [7, 7, 7, 7, 7]));
console.log(solution(3, [1, 2, 3, 3, 4, 1, 1, 1]));
console.log(solution(4, [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 1, 4, 6, 2, 2, 8]));
console.log(solution(1, [1, 1, 2, 1, 2, 1]));
