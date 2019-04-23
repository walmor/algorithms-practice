// For me it was not so easy.
// But did it in 50 minutes.

function solution(H) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < H.length; i++) {
    const height = H[i];

    if (!stack.length) {
      stack.push(height);
      continue;
    }

    let lastHeight = [stack[stack.length - 1]];

    while (stack.length && lastHeight > height) {
      stack.pop();
      count++;
      if (stack.length) {
        lastHeight = [stack[stack.length - 1]];
      } else {
        lastHeight = 0;
      }
    }

    if (lastHeight < height) {
      stack.push(height);
    }
  }

  return count + stack.length;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
console.log(solution([8, 8, 8]));
console.log(solution([1]));
console.log(solution([8, 4, 8, 4, 8]));
console.log(solution([3, 3, 3, 2, 2]));
console.log(solution([5, 4, 3, 2, 1]));
console.log(solution([8, 4, 8]));
console.log(solution([4, 8, 4]));
console.log(solution([1, 2, 3, 2, 1]));
