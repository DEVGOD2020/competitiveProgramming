/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(null,head);
    let LP = dummy;
    let cur = dummy.next;

    let I = 0;
    while(I<left-1){
        LP = cur;
        cur = cur.next;
        I++;
    }

    let LCur = cur;

    let prev = null;
    for(let I = 0; I<right-left+1; I++){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    LCur.next = cur;
    LP.next = prev;

    return dummy.next;
};

var rev = function(head){
    let prev = null;
    while(head != null){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}