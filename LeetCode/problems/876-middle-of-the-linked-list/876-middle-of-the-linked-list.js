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
var middleNode = function(head) {
    let L = head;
    let R = head;

    while(R !== null && R.next !== null){
        L = L.next;
        R = R.next.next;
    }

    return L;
};