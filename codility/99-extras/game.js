function solution(A, B) {
  const set = {};

  for (let i = 0; i < A.length; i++) {
    set[Math.max(A[i], B[i])] = true;
  }

  for (let i = 1; i <= 100000; i++) {
    if (set[i] === undefined) {
      return i;
    }
  }

  return 100001;
}

console.log(solution([1, 2, 3, 4], [1, 3, 2, 3]));
console.log(solution([3, 2, 1, 6, 5], [4, 2, 1, 3, 3]));
console.log(solution([1, 2], [1, 2]));

const arr1 = [];
const arr2 = [];

for (let i = 1; i < 100000; i++) {
  arr1.push(i);
  arr2.push(i);
}

console.log(solution(arr1, arr2));
