// Easy. 10 minutes.

function solution(S) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < S.length; i++) {
    if (map[S[i]]) {
      stack.push(map[S[i]]);
    } else if (stack.length && stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution(''));
console.log(solution('()'));
console.log(solution('[]'));
console.log(solution('{}'));
console.log(solution('({})'));
console.log(solution('[{}]'));
console.log(solution('[{}()]'));
console.log(solution('{[{}()]}'));
console.log(solution('{{{[[(())]]}}}'));
console.log(solution('[{}(]'));
console.log(solution('{{'));
console.log(solution('))'));
console.log(solution(')'));
console.log(solution('[}'));
