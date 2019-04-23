// Pretty easy. 7 minutes.

function solution(A) {
  let maxSum = A[0];
  let currSum = A[0];

  for (let i = 1; i < A.length; i++) {
    currSum = Math.max(currSum + A[i], A[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

console.log(solution([3, 2, -6, 4, 0]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([-1, -2, -3, -4, -5]));
console.log(solution([10]));
