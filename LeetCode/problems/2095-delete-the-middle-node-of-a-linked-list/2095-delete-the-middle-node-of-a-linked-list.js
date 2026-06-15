/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next == null){return null;}
    let prev = null;
    let A = head;
    let B = head;
    while(B && B.next){
        prev = A;
        A = A.next;
        B = B.next;
        B = B.next;
    }
    prev.next = A.next;
    return head;
};