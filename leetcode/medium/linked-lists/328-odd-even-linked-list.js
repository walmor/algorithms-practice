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
var oddEvenList = function(head) {
  if (!head || !head.next) return head;

  let lastOdd = head;
  let lastEven = head.next;
  const firstEven = head.next;
  let next = head.next.next;

  let idx = 3;

  while (next) {
    if (idx % 2 === 0) {
      lastEven.next = next;
      lastEven = next;
    } else {
      lastOdd.next = next;
      lastOdd = next;
    }
    next = next.next;
    idx++;
  }

  lastEven.next = null;
  lastOdd.next = firstEven;

  return head;
};

console.log(JSON.stringify(oddEvenList(llFromArray([1, 2, 3, 4, 5]))));
console.log(JSON.stringify(oddEvenList(llFromArray([1, 2, 3, 4, 5, 6]))));
console.log(JSON.stringify(oddEvenList(llFromArray([1, 2]))));
console.log(JSON.stringify(oddEvenList(llFromArray([1]))));

function llFromArray(arr) {
  let head = null;
  let curr = null;

  for (let i = 0; i < arr.length; i++) {
    const node = { value: arr[i] };

    if (!head) {
      head = node;
      curr = node;
    } else {
      curr.next = node;
      curr = node;
    }
  }

  return head;
}
