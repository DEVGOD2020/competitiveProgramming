/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head){return null;}

    let dummy = new ListNode(null,head)
    let prev = dummy;
    let cur = head;

    while(cur){
        let nxt = cur.next;

        if(cur.val == val){
            prev.next = nxt;
        }else{
            prev = cur;
        }
        cur = nxt;
    }

    return dummy.next;
};