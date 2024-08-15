/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let iterator = 1;
    let value = 0;

    let current = head;
    let prev = null;
    let next2 = current.next;
    while(current != null){
        next2 = current.next;
        current.next = prev;
        prev = current;
        current = next2;
    }

    while(prev != null){
        if(prev.val == 1){value += iterator;}
        iterator+=iterator;
        prev = prev.next;
    }

    return value;
};