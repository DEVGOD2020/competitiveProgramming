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
var deleteDuplicates = function(head) {
    if(head == null){
        return null;
    }

    let current = new ListNode(head.val);
    let pointer = current;
    let temp = head.val;
    while(head != null){
        if(temp != head.val){
            temp = head.val;
            pointer.next = new ListNode(temp);
            pointer = pointer.next;
        }
        head = head.next;

    }

    return current;
};