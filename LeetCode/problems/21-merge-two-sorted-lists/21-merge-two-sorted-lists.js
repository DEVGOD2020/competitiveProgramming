/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newNode = new ListNode(null);
    let temp = newNode;

    while(list1 != null || list2 != null){
        if(list1 == null){
            temp.next = new ListNode(list2.val);
            temp = temp.next;
            list2 = list2.next;
        }
        else if(list2 == null){
            temp.next = new ListNode(list1.val);
            temp = temp.next;
            list1 = list1.next;
        }
        else if(list1.val <= list2.val){
            temp.next = new ListNode(list1.val);
            temp = temp.next;
            list1 = list1.next;
        }else{
            temp.next = new ListNode(list2.val);
            temp = temp.next;
            list2 = list2.next;
        }
    }

    newNode = newNode.next;

    return newNode;
};