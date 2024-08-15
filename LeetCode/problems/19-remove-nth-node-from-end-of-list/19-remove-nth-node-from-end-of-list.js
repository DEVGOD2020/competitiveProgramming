/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(null,head);
    let pre = dummy;
    let cur = head;

    let I = 0;
    while(I<n-1){
        cur = cur.next;
        I++;
    }

    while(cur){
        if(cur.next == null){
            pre.next = pre.next.next;
            break;
        }
        
        cur = cur.next;
        pre = pre.next; 
    }

    return dummy.next;
};