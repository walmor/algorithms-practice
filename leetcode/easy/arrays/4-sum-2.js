// https://leetcode.com/problems/sum-2

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const mapAB = {};
  const mapCD = {};

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      mapAB[A[i] + B[j]] = (mapAB[A[i] + B[j]] || 0) + 1;
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      mapCD[C[i] + D[j]] = (mapCD[C[i] + D[j]] || 0) + 1;
    }
  }

  let count = 0;

  for (numAB in mapAB) {
    if (mapCD[-numAB]) {
      count += mapAB[numAB] * mapCD[-numAB];
    }
  }

  console.log(mapAB);
  console.log(mapCD);

  return count;
};

console.log(fourSumCount([1, 2, 0], [-2, -1, 0], [-1, 2, 0], [0, 2, 0]));
