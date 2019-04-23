// Fail. It was hard to figure out how to calc the number of subarrays and
// to understand tha I should restart the counter from the last non distinct number.
// But I did it after thinking about the problem without pressure.

function solution(M, A) {
  let count = 0;
  let set = {};
  let last = -1;

  for (let i = 0; i < A.length; i++) {
    if (set[A[i]] !== undefined) {
      last = Math.max(set[A[i]], last);
    }

    set[A[i]] = i;
    count += i - last;

    if (count > 1000000000) return 1000000000;
  }

  return count;
}

console.log(solution(6, [3, 4, 5, 5, 2]));
console.log(solution(6, [1, 1, 1, 4]));
console.log(solution(6, [1, 1, 1, 1]));
console.log(solution(6, [1, 2, 1, 2, 1, 2, 1, 2]));
console.log(solution(6, [1, 2, 2, 2, 1, 2, 3]));
console.log(solution(6, [1, 2, 4, 4, 1, 2, 4, 3]));
