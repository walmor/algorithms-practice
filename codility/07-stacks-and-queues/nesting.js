// Too easy. 10 minutes

function solution(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (char === '(') {
      count++;
    } else {
      count--;
      if (count < 0) return 0;
    }
  }
  return count === 0 ? 1 : 0;
}

console.log(solution('()'));
console.log(solution(')('));
console.log(solution('(()(())())'));
console.log(solution('())'));
console.log(solution('()('));
console.log(solution('()()'));
console.log(solution('(()())'));
console.log(solution('(())())'));
console.log(solution('(((())))'));
console.log(solution(')()('));
console.log(solution(''));
console.log(solution('(()()()()()'));
console.log(solution('(()()()()())'));
