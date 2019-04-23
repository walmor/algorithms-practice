/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = null;
  let curr = null;

  while (l1 || l2) {
    let selected;

    if (!l1) {
      selected = l2;
      l2 = l2.next;
    } else if (!l2) {
      selected = l1;
      l1 = l1.next;
    } else {
      if (l1.val < l2.val) {
        selected = l1;
        l1 = l1.next;
      } else {
        selected = l2;
        l2 = l2.next;
      }
    }

    if (!head) {
      head = selected;
      curr = selected;
    } else {
      curr.next = selected;
      curr = selected;
    }
  }

  return head;
};
