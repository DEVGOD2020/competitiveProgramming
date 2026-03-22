/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let temp = head;
    for(let I = 0; I<k; I++){
        if(!temp){ return head; }
        temp = temp.next;
    }

    let prev = null;
    let curr = head;
    let next = null;
    for(let I = 0; I<k; I++){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    head.next = reverseKGroup(temp,k);

    return prev;
};
