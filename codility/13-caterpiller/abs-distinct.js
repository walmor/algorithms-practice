// Too easy, almost identical to "distinct" chanllenge, just including Math.abs
// 5 min

function solution(A) {
  const set = {};

  for (let i = 0; i < A.length; i++) {
    set[Math.abs(A[i])] = true;
  }

  return Object.keys(set).length;
}

console.log(solution([-5, -3, 1, 0, 3, 6]));
