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
    if(!head || !head.next){return head;}

    let cnt = 1;
    let last = head;
    while(last.next){
        last = last.next;
        cnt++;
    }

    k = (cnt-(k%cnt))%cnt;
    if(k==0){return head;}
    
    let start = head;
    let curr = head;
    for(let I = 0; I<k-1; I++){
        curr = curr.next;
    }
    let next = curr.next;
    curr.next = null;
    last.next = start;
    return next;
};
