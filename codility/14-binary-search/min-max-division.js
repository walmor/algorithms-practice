function solution(K, M, A) {
  let min = A[0];
  let max = A[0];

  for (let i = 1; i < A.length; i++) {
    min = Math.max(min, A[i]);
    max += A[i];
  }

  let result = max;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (isDivisible(mid, K - 1, A)) {
      max = mid - 1;
      result = mid;
    } else {
      min = mid + 1;
    }
  }

  return result;
}

function isDivisible(mid, k, A) {
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];

    if (sum > mid) {
      sum = A[i];
      k--;
    }

    if (k < 0) return false;
  }

  return true;
}

console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2]));
console.log(solution(3, 5, [2, 3, 1]));
