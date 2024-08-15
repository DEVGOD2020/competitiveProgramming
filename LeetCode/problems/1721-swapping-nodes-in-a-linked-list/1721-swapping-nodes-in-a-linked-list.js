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

var swapNodes = function(head, k) {

    //Backwards and forwards array
    let current = head;
    let forwards = [];
    let backwards = [];
    while (current.next) {
        backwards.push(current.val);
        forwards.unshift(current.val);
        current = current.next;
    }
    backwards.push(current.val);
    forwards.unshift(current.val);


    current = new ListNode();
    current = current.next;

    let I = 0;
    let new_node = new ListNode(0);
    while(I<forwards.length){
        if(I == k-1 || I == forwards.length-k){new_node = new ListNode(backwards[I]);}
        else{new_node = new ListNode(forwards[I]);}
        new_node.next = current;
        current = new_node;
        I++;
    }

    return current;
};

