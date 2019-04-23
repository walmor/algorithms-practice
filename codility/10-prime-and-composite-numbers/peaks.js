// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const peaksArray = countPeaks(A);
  const peaks = peaksArray[peaksArray.length - 1];

  for (let i = peaks; i > 1; i--) {
    if (A.length % i !== 0) continue;

    const blockSize = A.length / peaks;
    let blockStart = 0;

    while (blockStart + blockSize <= A.length) {
      const startCount = peaksArray[blockStart];
      const endCount = peaksArray[blockStart + blockSize];

      if (endCount - startCount === 0) break;

      blockStart += blockSize;
    }

    if (blockStart === A.length) return i;
  }

  return peaks;
}

function countPeaks(A) {
  const peaks = [0, 0];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(peaks[i] + 1);
    } else {
      peaks.push(peaks[i]);
    }
  }

  peaks.push(peaks[peaks.length - 1]);

  return peaks;
}

// console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
console.log(solution([1, 2, 3, 4, 5, 4, 5, 4]));
console.log(solution([1, 3, 2, 1]));
