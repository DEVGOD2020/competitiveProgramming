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
var mergeNodes = function(head) {
    let prev = head;
    let cur = head.next;
    let score = 0;

    while(cur){
        if(cur.val==0){
            prev.val = score;
            score = 0;
            if(cur.next !==null){
                prev.next = cur;
                prev = cur;
            }else{
                prev.next = null;
            }
            cur = cur.next;
        }else{
            score += cur.val;
            cur = cur.next;
        }
    }
    return head;
};