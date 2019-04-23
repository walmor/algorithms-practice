// Pretty easy. Classical one. 7 minutes

function solution(A) {
  let minPriceSoFar = A[0];
  let maxProfit = 0;

  for (let i = 1; i < A.length; i++) {
    maxProfit = Math.max(maxProfit, A[i] - minPriceSoFar);
    minPriceSoFar = Math.min(minPriceSoFar, A[i]);
  }

  return maxProfit;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([6, 5, 4, 3, 2, 1]));
console.log(solution([3, 5, 2, 5, 1, 1]));
