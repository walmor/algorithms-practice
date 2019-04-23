// A little bit harder. But ok.
// 25 minutes. 15 minutes to implement.

function solution(X, A) {
  const positionsFound = new Set();
  let sum = 0;
  const sumUpToX = (X * (X + 1)) / 2;

  for (let i = 0; i < A.length; i++) {
    if (positionsFound[A[i]]) continue;

    positionsFound[A[i]] = true;
    sum += A[i];
    // I could just verify the size of the map
    // if (Object.keys(positionsFound).length == X) return i;
    if (sum === sumUpToX) {
      return i;
    }
  }

  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(2, [1, 1, 1, 1, 1, 2]));
console.log(solution(2, [1, 1, 1, 1, 1, 1]));
console.log(solution(5, [1, 2, 5, 1, 2, 3, 4, 5]));
console.log(solution(5, [5, 4, 3, 2, 1]));
console.log(solution(2, [2, 1, 1, 1]));
console.log(solution(1, [1]));
console.log(solution(2, [2]));
console.log(solution(4, [1, 1, 1, 2, 2, 2, 3, 3, 3, 4]));
