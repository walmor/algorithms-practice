// A lot of restrictions and conditions.
// nums contains numbers from 1 to N - 1. One element is duplicated and can be duplicated more than once.
// Array is read only
// Time complexity = O(n)
// Space complexity should be O(1)
// Summary: the problem can be treated as a cycle detection. The same solution used with linked lists.

function findDuplicate(nums) {
  // Find the intersection point of the two runners.
  let tortoise = nums[0];
  let hare = nums[0];

  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise != hare);

  // Find the "entrance" to the cycle.
  let ptr1 = nums[0];
  let ptr2 = tortoise;

  while (ptr1 != ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
}
