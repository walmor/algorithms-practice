function solution(T) {
  const result = new Array(T.length - 1);
  result.fill(0, 0, T.length - 1);

  const map = {};
  let capital = null;

  for (let i = 0; i < T.length; i++) {
    const key = T[i];

    if (i === key) {
      capital = i;
      continue;
    }

    if (map[key] === undefined) map[key] = [];
    map[key].push(i);
  }

  const queue = new Queue();

  const cities = map[capital].map(i => {
    return { num: i, level: 0 };
  });

  cities.forEach(c => queue.enqueue(c));

  let count = 0;
  let distance = 0;

  while (!queue.isEmpty()) {
    const city = queue.dequeue();

    if (city.level === distance) {
      count++;
    } else {
      result[distance] = count;
      count = 1;
      distance = city.level;
    }

    if (map[city.num]) {
      const cities = map[city.num].map(i => {
        return { num: i, level: city.level + 1 };
      });

      cities.forEach(c => queue.enqueue(c));
    }
  }

  result[distance] = count;

  return result;
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const item = { value };

    if (this.last) {
      this.last.next = item;
    }

    if (!this.first) {
      this.first = item;
    }

    this.last = item;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const value = this.first.value;
    this.first = this.first.next;
    if (!this.first) this.last = null;

    return value;
  }

  isEmpty() {
    return !this.first;
  }
}

console.log(solution([9, 1, 4, 9, 0, 4, 8, 9, 0, 1]));
console.log(solution([1, 1, 1]));
