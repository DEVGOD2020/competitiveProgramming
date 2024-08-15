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

var removeNodes = function(head) {
    let max = 0;
    let prev = null;
    let curr = head;

    while(curr != null){
        max = Math.max(max,curr.val);
        if(curr.val < max){
            if(prev != null){
                prev.next = curr.next;
            }else{
                head = curr.next;
            }
            let del = curr;
            curr = curr.next;
            del.next = null;
        }
        else{
            prev = curr;
            curr = curr.next;
        }
    }

    return head;
};