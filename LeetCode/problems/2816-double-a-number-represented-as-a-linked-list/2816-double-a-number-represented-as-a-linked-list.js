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
var doubleIt = function(head) {

    function help(root){
        if(root === null){
            return 0;
        }

        let doubleVal = root.val*2+help(root.next);
        root.val = doubleVal % 10;
        return Math.floor(doubleVal/10);
    }

    let carry = help(head);
    if(carry!= 0){
        head = new ListNode(carry,head);
    }
    return head;
};