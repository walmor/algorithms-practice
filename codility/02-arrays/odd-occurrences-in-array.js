// Easy, because I already knew that one.
// 8 min.
function solution(A) {
  let number = 0;

  for (let i = 0; i < A.length; i++) {
    number ^= A[i];
  }

  return number;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([1, 2, 1, 2, 3, 4, 4]));
console.log(solution([8, 1, 8]));
console.log(solution([7]));
