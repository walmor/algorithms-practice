// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;

  const map = createCharMap();

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = map[s[i]];

    if (char > 0) {
      stack.push(char);
    } else if (char < 0) {
      const last = stack.pop();
      if (last + char !== 0) return false;
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

function createCharMap() {
  const map = {};

  map['('] = 1;
  map[')'] = -1;

  map['['] = 2;
  map[']'] = -2;

  map['{'] = 3;
  map['}'] = -3;

  return map;
}

const cases = ['', '(', ')', ')(', '()[]{}', '()', '({})', '({}[])', '({])', '(]', '([)]', 'abc'];

for (const c of cases) {
  console.log('"%s" = %s', c, isValid(c));
}
