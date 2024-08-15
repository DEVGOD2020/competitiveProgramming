/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var pairSum = function(head) {
    let current = head;
    let newNode = new ListNode(current.val);
    let twinScore = 0;
    current = current.next;

    while(current != null){
        let newA = new ListNode(current.val);
        newA.next = newNode;
        newNode = newA;
        current = current.next;
    }

    current = head;

    while(current != null){
        if(current.val + newNode.val > twinScore){
            twinScore = current.val + newNode.val;
        }
        current = current.next;
        newNode = newNode.next;
    }

    return twinScore;
};