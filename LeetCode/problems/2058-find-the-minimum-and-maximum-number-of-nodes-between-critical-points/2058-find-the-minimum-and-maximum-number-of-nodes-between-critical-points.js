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


//minDistance = min of the current index - previous largest cricial point
//maxDistance = largest cirtcal point - lowest critcal point
var nodesBetweenCriticalPoints = function(head) {
    if(head.next == null || head.next.next == null){
        return [-1,-1];
    }

    let smolPoint = -1;
    let beegPoint = -1;

    let minDis = Infinity;

    let pre = head;
    let cur = head.next;
    let next = head.next.next;

    let I = 0;
    while(next){
        if(
            (pre.val > cur.val && next.val > cur.val) || 
            (pre.val < cur.val && next.val < cur.val)
        ){
            smolPoint = smolPoint == -1 ? I : smolPoint;
            if(beegPoint > -1){
                minDis = Math.min(minDis,I-beegPoint);
            }
            beegPoint = Math.max(I,beegPoint);
        }

        pre = pre.next;
        cur = cur.next;
        next = next.next;
        I++;
    }

    if(smolPoint === -1 || beegPoint === -1 || minDis === Infinity){
        return [-1,-1];
    }
    return [minDis, beegPoint-smolPoint];
};