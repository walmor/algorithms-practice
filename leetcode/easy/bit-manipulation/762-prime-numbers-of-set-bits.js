/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  const primes = getPrimes(31);
  const map = {};
  let count = 0;

  for (let i = L; i <= R; i++) {
    const bits = countBits(map, i);
    if (primes[bits]) count++;
  }

  return count;
};

function getPrimes(n) {
  const numbers = [];

  for (let p = 2; p * p <= n; p++) {
    if (numbers[p] === false) break;

    for (let i = p * 2; i <= n; i += p) {
      numbers[i] = false;
    }
  }

  const primes = {};

  for (let i = 2; i <= n; i++) {
    if (numbers[i] !== false) primes[i] = true;
  }

  return primes;
}

function countBits(map, n) {
  const number = n;
  let count = 0;

  if (map[n >> 1] !== undefined) {
    count = map[n >> 1] + (n & 1);
  } else {
    while (n) {
      count++;
      n &= n - 1;
    }
  }

  map[number] = count;
  return count;
}

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
console.log(countPrimeSetBits(1, 20));
console.log(countPrimeSetBits(842, 888));
