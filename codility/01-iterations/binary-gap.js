// Easy, have already done that with string manipulation, and now I did with bit maipulation.
// 17 minutes testing a lot
function solution(N) {
  let countZeros = 0;
  let oneFound = false;
  let maxGap = 0;

  while (N) {
    const bit = N & 1;
    if (bit === 1) {
      if (oneFound) {
        maxGap = Math.max(maxGap, countZeros);
        countZeros = 0;
      } else {
        oneFound = true;
      }
    } else {
      if (oneFound) {
        countZeros++;
      }
    }

    N >>= 1;
  }

  return maxGap;
}

// console.log(solution(9)); // 2
// console.log(solution(529)); // 4
// console.log(solution(20)); // 1
// console.log(solution(15)); // 0
// console.log(solution(32)); // 0
// console.log(solution(1041)); // 5

console.log(solution(parseInt('11110', 2)));
