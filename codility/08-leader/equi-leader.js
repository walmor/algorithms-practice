// I struggle to realize that, in first place, the whole array should have a leader
// and only that leader could be the leader on both sides. After realized that the algo is easy.
// 1 hour, but at least the test passed 100%;

function solution(A) {
  const leaderInfo = findLeader(A);

  if (leaderInfo === null) return 0;

  let leftCount = 0;
  let rightCount = leaderInfo.count;
  let indexes = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === leaderInfo.leader) {
      leftCount++;
      rightCount--;
    }

    if (leftCount > (i + 1) / 2 && rightCount > (A.length - i - 1) / 2) {
      indexes++;
    }
  }

  return indexes;
}

function findLeader(A) {
  let value = null;
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (count === 0) {
      value = A[i];
      count++;
    } else if (A[i] !== value) {
      count--;
    } else {
      count++;
    }
  }

  let index = -1;
  let n = 0;

  if (count > 0) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === value) {
        index = i;
        n++;
      }
    }
  }

  return n > A.length / 2 ? { leader: value, count: n } : null;
}

console.log(solution([4, 3, 4, 4, 4, 2]));
console.log(solution([3, 3, 3, 3, 1, 1]));
console.log(solution([3, 3, 1, 3, 1, 1]));
console.log(solution([3, 3, 1, 3, 1, 1]));
