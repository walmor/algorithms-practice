// I've learn about the technique used below to find the the "leader" (the element that occurs more then n/2)
// Done in 13 min after knowing the technique. Could've be done with hashtable easily but with O(n) space, instead of O(1)

function solution(A) {
  let value = null;
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (count === 0) {
      value = A[i];
      count++;
    } else if (A[i] !== value) {
      count--;
    } else {
      count++;
    }
  }

  let index = -1;
  let n = 0;

  if (count > 0) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === value) {
        index = i;
        n++;
      }
    }
  }

  return n > A.length / 2 ? index : -1;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
console.log(solution([3, 4, 3, 2]));
console.log(solution([4, 4, 4, 3, 3, 3, 4]));
console.log(solution([]));
console.log(solution([4]));
console.log(solution([4, 4, 4]));
console.log(solution([3, 3, 1]));
