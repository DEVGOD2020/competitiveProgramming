/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const nodes = new Set();

    while (headA) {
      nodes.add(headA);
      headA = headA.next;
    }

  while (headB) {
    if (nodes.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};