/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let A = head;
    let B = head?.next;
    let C = head?.next?.next;
    let ans = [Infinity,-1];
    let start = -1;
    let L = -1;
    I = 0;
    while(C){
        if( 
            (A.val > B.val && B.val < C.val) || 
            (A.val < B.val && B.val > C.val)
        ){
            if(start < 0){start = I; L = I;}
            else{
                ans[0] = Math.min(ans[0], I-L);
                ans[1] = I-start;
                L = I;
            }

        }
        A = A.next;
        B = B.next;
        C = C.next;
        I++;
    }
    if(ans[0] == Infinity){return [-1,-1];}
    return ans;
};