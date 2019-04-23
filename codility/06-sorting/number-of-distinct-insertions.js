// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const discs = [];

  for (let i = 0; i < A.length; i++) {
    discs.push({
      start: i - A[i],
      end: i + A[i]
    });
  }

  discs.sort((a, b) => a.start - b.start);

  let count = 0;

  for (let i = 0; i < discs.length; i++) {
    for (let j = i + 1; j < discs.length; j++) {
      if (discs[j].start > discs[i].end) break;
      count++;
    }

    if (count > 10000000) return -1;
  }

  return count;
}

console.log(solution([1, 5, 2, 1, 4, 0]));
console.log(solution([0, 0, 0]));
console.log(solution([1, 1, 1]));
