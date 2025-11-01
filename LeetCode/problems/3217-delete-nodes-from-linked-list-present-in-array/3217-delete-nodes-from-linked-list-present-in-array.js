/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let mySet = new Set(nums);
    let left = head;

    while(mySet.has(left.val)){
        left = left.next;
    }

    if(left == null){return head;}
    else{ head = left;}
    let right = left.next;

    while(right){
        if( !mySet.has(right.val)){
            left.next = right;
            left = right;
        }
        right = right.next;
    }

    left.next = right;
    return head;
};
