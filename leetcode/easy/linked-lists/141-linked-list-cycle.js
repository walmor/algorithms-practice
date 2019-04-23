// https://leetcode.com/problems/linked-list-cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slowRunner = head;
  let fastRunner = head;

  while (slowRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    if (slowRunner === fastRunner) {
      break;
    }
  }

  if (!slowRunner || !fastRunner) return false;

  return slowRunner === fastRunner;
};

const nodeC = {
  val: 'c',
  next: {
    val: 'd',
    next: {
      val: 'e'
    }
  }
};

nodeC.next.next = nodeC;

const ll = {
  val: 'a',
  next: {
    val: 'b'
  }
};

console.log(hasCycle(ll));
