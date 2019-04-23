/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null;

  let prev = null;
  let curr = head;

  while (head) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseListRec(node, prev) {
  if (!node) return prev;

  const tail = reverseListRec(node.next, node);

  node.next = prev;

  return tail;
}

const ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5
        }
      }
    }
  }
};

console.log(llToArr(reverseList(ll)));

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
