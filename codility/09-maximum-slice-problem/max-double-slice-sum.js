// It was hard. I could not find the solution.
// The trick was to keep arrays with the max sum from start to end and vice versa.

function solution(A) {
  const maxStartingHere = [0];
  const maxEndingHere = [0];
  let maxSum = 0;
  let len = A.length;

  for (let i = len - 2; i > 0; i--) {
    maxSum = Math.max(0, A[i] + maxSum);
    maxStartingHere[i] = maxSum;
  }

  maxStartingHere.push(0);

  maxSum = 0;

  for (let i = 1; i < len - 1; i++) {
    maxSum = Math.max(0, A[i] + maxSum);
    maxEndingHere[i] = maxSum;
  }

  maxEndingHere.push(0);

  console.log(A);
  console.log(maxEndingHere);
  console.log(maxStartingHere);

  let maxDoubleSlice = 0;

  for (let i = 0; i < len - 2; i++) {
    maxDoubleSlice = Math.max(maxDoubleSlice, maxEndingHere[i] + maxStartingHere[i + 2]);
  }

  return maxDoubleSlice;
}

// console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]));
// console.log(solution([3, -2, -3, -5, 10, 2]));
// console.log(solution([2, 2, 3, -10, 10, 2]));
// console.log(solution([3, 2, 3, -10, -5, -1, 2]));
// console.log(solution([3, 4, 3, -10, -5, 40, 50, 2]));
// console.log(solution([1, 4, 3, 1, 5, 4, 2]));
console.log(solution([6, 1, 5, 6, 4, 2, 9, 4]));
