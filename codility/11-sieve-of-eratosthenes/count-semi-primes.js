// Fail. Three problems:
// 1 - fail to understand how to do the diff using the "array of counts"
// 2 - fail do improve the generation of subprimes
// 3 - the sieve of erastosthenes had an error (it was copied)

function solution(N, P, Q) {
  const semiprimes = getSemiPrimes(N);

  const countOfSemiprimes = [0, 0, 0, 0];

  for (let i = 4; i <= N; i++) {
    countOfSemiprimes[i] = countOfSemiprimes[i - 1];
    if (semiprimes[i]) countOfSemiprimes[i]++;
  }

  const result = [];

  for (let i = 0; i < P.length; i++) {
    let start = countOfSemiprimes[P[i] - 1];
    let end = countOfSemiprimes[Q[i]];
    let r = end - start;

    result.push(r);
  }

  return result;
}

function getSemiPrimes(n) {
  const numbers = [];

  for (let p = 2; p * p <= n; p++) {
    if (numbers[p] === false) continue;

    for (let i = p * 2; i <= n; i += p) {
      numbers[i] = false;
    }
  }

  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (numbers[i] !== false) primes.push(i);
  }

  const semiprimes = {};

  for (let i = 0; primes[i] * primes[i] <= n; i++) {
    for (let j = i; j < primes.length; j++) {
      const semiprime = primes[i] * primes[j];
      if (semiprime > n) break;
      semiprimes[semiprime] = true;
    }
  }

  return semiprimes;
}

console.log(getSemiPrimes(60));
