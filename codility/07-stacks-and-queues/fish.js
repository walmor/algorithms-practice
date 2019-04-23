// It was medium for me. I took me 50 min. But I did.
// It was hard to undertand what I was suppose to do.

function solution(A, B) {
  const stack = [];
  let alive = new Array(A.length);
  alive.fill(1, 0, A.length);

  for (let i = 0; i < B.length; i++) {
    if (B[i] === 1) {
      stack.push(i);
    } else {
      if (stack.length === 0) continue;

      if (A[stack[stack.length - 1]] > A[i]) {
        alive[i] = 0;
      } else {
        alive[stack.pop()] = 0;
        i--;
      }
    }
  }

  return alive.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
console.log(solution([6, 3, 2, 1, 5], [1, 0, 0, 0, 0]));
console.log(solution([6, 3, 2, 1, 5], [0, 0, 0, 0, 0]));
console.log(solution([6, 3, 2, 1, 5], [1, 1, 1, 1, 1]));
console.log(solution([6, 3, 2, 1, 5], [1, 1, 0, 0, 0]));
console.log(solution([1, 2, 3, 4], [1, 1, 0, 0]));
console.log(solution([5], [0]));
