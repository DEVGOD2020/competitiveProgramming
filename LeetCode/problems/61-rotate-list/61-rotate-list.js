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
var rotateRight = function(head, k) {
    if(!head){return head;}
    if(!head.next){return head;}

    let length = 0;
    let pointer = head;
    while(pointer){
        length++;
        pointer = pointer.next;
    }

    k = k % length;
    
    let front = head;
    let secondLast = head;
    let last = head.next;

    let I = 0
    while(I<k){
        while(last.next){
            secondLast = secondLast.next;
            last = last.next;
        }
        I++;
    }

    last.next = front;
    secondLast.next = null;
    head = last;

    return head;
};