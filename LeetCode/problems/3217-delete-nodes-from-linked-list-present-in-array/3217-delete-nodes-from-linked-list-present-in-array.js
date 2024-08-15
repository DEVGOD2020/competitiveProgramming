/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let mySet = new Set([...nums]);
    while(mySet.has(head.val)){
        head = head.next;
    }

    let linkedList = new ListNode(head.val);
    head = head.next;
    let pointer = linkedList;

    while(head){
        if(!mySet.has(head.val)){
            pointer.next = new ListNode(head.val);
            pointer = pointer.next;
        }
        head = head.next;
    }

    return linkedList;
};