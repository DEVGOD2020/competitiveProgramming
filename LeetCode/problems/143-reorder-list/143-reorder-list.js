/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let stack = [];
    let curPointer = head;
    while(curPointer){
        stack.push(curPointer);
        curPointer = curPointer.next;
    }

    let size = stack.length;
    curPointer = head;
    let I = 0;
    while(I<size){
        if(I%2 === 0){ curPointer.next = stack.shift();}
        else{curPointer.next = stack.pop();}
        curPointer = curPointer.next;
        I++;
    }

    curPointer.next = null;
};