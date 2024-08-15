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
var removeZeroSumSublists = function(head) {
    let front = new ListNode(0,head);

    let start = front;
    while(start != null){
        let end = start.next;
        let count = 0;
        while(end != null){
            count += end.val;
            if(count == 0){
                start.next = end.next;
            }
            end = end.next;
        }
        start = start.next;
    }
    
    return front.next;
};