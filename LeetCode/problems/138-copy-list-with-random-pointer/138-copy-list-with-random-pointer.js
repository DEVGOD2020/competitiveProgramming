/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head){return null;}

    const myMap = new Map();
    let pointer = head;
    while(pointer){
        myMap.set(pointer, new Node(pointer.val));
        pointer = pointer.next;
    }

    pointer = head;
    while(pointer){
        myMap.get(pointer).next = myMap.get(pointer.next) || null;
        myMap.get(pointer).random = myMap.get(pointer.random) || null;
        pointer = pointer.next;
    }

    return myMap.get(head);
};