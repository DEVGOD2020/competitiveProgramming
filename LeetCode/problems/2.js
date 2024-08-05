/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let Digit = 0;
    let Carry = 0;

    let newNode = new ListNode(0);
    let curNode = newNode;

    while(l1 != null || l2 != null){
        Digit = 0;
        if(l1 != null){
            Digit += l1.val;
            l1 = l1.next;
        }
        if(l2 != null){
            Digit += l2.val;
            l2 = l2.next;
        }

        Digit = Digit+Carry;
        Carry = Math.floor(Digit/10);
        Digit = Digit%10;

        curNode.next = new ListNode(Digit);
        curNode = curNode.next;
    }

    if(Carry > 0){
        curNode.next = new ListNode(Carry);
        curNode = curNode.next;
    }

    return newNode.next;
};