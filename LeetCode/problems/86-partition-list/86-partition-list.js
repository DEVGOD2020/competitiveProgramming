/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let leftList = new ListNode(0);
    let rightList = new ListNode(0);

    let leftPointer = leftList;
    let rightPointer = rightList;

    while(head){
        if(head.val < x){
            leftPointer.next = head;
            leftPointer = leftPointer.next;
        }else{
            rightPointer.next = head;
            rightPointer = rightPointer.next;
        }
        head = head.next;
    }

    rightPointer.next = null;
    leftPointer.next = rightList.next;
    return leftList.next;
};