/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    let myArr = [];

    for(let list of lists){
        let pointer = list;
        while(pointer !== null){
            myArr.push(pointer.val);
            pointer = pointer.next;
        }
    }

    if(myArr.length <= 0){
        let node = new ListNode()
        node = node.next;
        return node;
    }

    myArr.sort(function(a,b){return a-b;});
    let newList = new ListNode(myArr[0]);
    myArr.shift();

    let pointer = newList;
    for(let el of myArr){
        pointer.next = new ListNode(el,undefined);
        pointer = pointer.next;
    }

    return newList; 
};