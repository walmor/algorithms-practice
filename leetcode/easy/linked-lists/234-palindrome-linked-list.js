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
var isPalindrome = function(head) {
  if (!head) return false;

  // First part: divide the linked list in two
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let ll1 = head;
  let ll2 = slow.next;
  slow.next = null;

  // Second part: reverse the second part
  let prev = null;

  while (ll2) {
    let next = ll2.next;
    ll2.next = prev;
    prev = ll2;
    ll2 = next;
  }

  ll2 = prev;

  // Third part: compare both
  while (ll1 && ll2) {
    if (ll1.val !== ll2.val) return false;
    ll1 = ll1.next;
    ll2 = ll2.next;
  }

  return true;
};

const ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1
        }
      }
    }
  }
};

console.log(isPalindrome(ll));

function llToArr(ll) {
  const arr = [];
  let i = 10;

  while (ll && i) {
    arr.push(ll.val);
    ll = ll.next;
    i--;
  }

  return arr;
}
