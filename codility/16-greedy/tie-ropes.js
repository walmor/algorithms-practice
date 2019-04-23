// Pretty easy.
// 20 minutes

function solution(K, A) {
  let ropes = 0;
  let length = 0;

  for (let i = 0; i < A.length; i++) {
    length += A[i];

    if (length >= K) {
      ropes++;
      length = 0;
    }
  }

  return ropes;
}

console.log(solution(4, [1, 2, 3, 4, 1, 1, 3]));
console.log(solution(4, [3]));
console.log(solution(4, [4, 4, 5, 4]));
