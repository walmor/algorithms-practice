/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = [];

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];

    if (op === 'C') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (op === 'D') {
      if (stack.length > 0) {
        const points = stack[stack.length - 1] * 2;
        stack.push(points);
      }
    } else if (op === '+') {
      if (stack.length > 1) {
        const last = stack[stack.length - 1];
        const secLast = stack[stack.length - 2];

        const points = last + secLast;
        stack.push(points);
      }
    } else {
      const points = parseInt(op, 10);
      stack.push(points);
    }
  }

  return stack.reduce((acc, curr) => acc + curr, 0);
};

console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
