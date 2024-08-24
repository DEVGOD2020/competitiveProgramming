/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(!head){
        return null;
    }
    let helper = function(start, end){
        if(start === end){return null;}
        let fast = start;
        let slow = start;

        while(fast !== end && fast.next !== end){
            slow = slow.next;
            fast = fast.next.next;
        }

        const root = new TreeNode(slow.val);
        root.left = helper(start, slow);
        root.right = helper(slow.next, end);

        return root;
    }

    return helper(head, null);
};