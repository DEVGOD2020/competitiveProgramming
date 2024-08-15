/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let curPointer = list1;
    let nextPointer = list1;
    let list2Pointer = list2;

    //List 1 pointer stuff
    let I = 0;
    while(nextPointer){
        if(I == b+1){ break; }
        nextPointer = nextPointer.next;
        I++;
    }

    I=0;
    while(curPointer){
        if(I == a-1){ break; }
        curPointer = curPointer.next;
        I++;
    }

    //Position a pointer at end of list2
    while(list2Pointer.next){
        list2Pointer = list2Pointer.next;
    }
    

    list2Pointer.next = nextPointer;
    curPointer.next = list2;

    return list1;
};