// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  const prefix = [
    {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    }
  ];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    const counter = { ...prefix[i] };
    counter[char]++;
    prefix.push(counter);
  }

  const ans = [];
  const map = ['A', 'C', 'G', 'T'];

  for (let i = 0; i < P.length; i++) {
    const start = P[i];
    const end = Q[i] + 1;

    const startCounter = prefix[start];
    const endCounter = prefix[end];

    for (let j = 0; j < map.length; j++) {
      if (endCounter[map[j]] - startCounter[map[j]] > 0) {
        ans.push(j + 1);
        break;
      }
    }
  }

  return ans;
}

console.log(solution('CAGCCTA', [2, 5, 0, 0, 6], [4, 5, 6, 0, 6]));
console.log(solution('AAACCC', [0, 3], [2, 5]));
console.log(solution('A', [0], [0]));
console.log(solution('ACGGTCATTACGGGAACTT', [2, 5, 0, 11, 6], [4, 5, 18, 13, 6]));
