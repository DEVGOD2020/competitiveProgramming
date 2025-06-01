/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let turtle = head;
    let hare = head;
    while(hare != null && hare.next != null){
        turtle = turtle.next;
        hare = hare.next.next;
    }

    function reverseList(head) {
        let curr = head;
        let prev = null;
        let next;
        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    let mid = turtle;
    mid = reverseList(mid);

    let pointer = head;
    while(mid !== null){
        if(pointer.val !== mid.val){
            return false;
        }
        pointer = pointer.next;
        mid = mid.next;
    }

    return true;
};
