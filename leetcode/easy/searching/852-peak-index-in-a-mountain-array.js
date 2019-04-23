/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  return peakIndexInMountainArrayRec(A, 0, A.length - 1);
};

function peakIndexInMountainArrayRec(array, s, e) {
  const m = s + Math.floor((e - s) / 2);

  if (array[m - 1] < array[m] && array[m] > array[m + 1]) {
    return m;
  } else if (array[m - 1] > array[m]) {
    return peakIndexInMountainArrayRec(array, s, m);
  } else {
    return peakIndexInMountainArrayRec(array, m, e);
  }
}

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 5, 4, 3, 2, 1]));
console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 0]));
console.log(peakIndexInMountainArray([0, 1, 2, 3, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 1, 4, 3, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 3, 2]));
console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 5, 2]));
console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6]));
