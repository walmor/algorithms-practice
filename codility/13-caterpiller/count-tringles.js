// Easy because it was similar to the sample exercise of the lesson.
// 16 minutes.

function solution(A) {
  A.sort((a, b) => a - b);
  let result = 0;
  console.log(A);

  for (let x = 0; x < A.length; x++) {
    let z = x + 2;
    for (let y = x + 1; y < A.length; y++) {
      while (z < A.length && A[x] + A[y] > A[z]) z++;
      result += z - y - 1;
    }
  }

  return result;
}

console.log(solution([10, 2, 5, 1, 8, 12]));
