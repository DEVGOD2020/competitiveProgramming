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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    let helper = function(pointer, root){
        if(!root){ return false; }

        if(root.val === pointer.val){ pointer = pointer.next; }
        else{
            pointer = head;
            if(root.val === pointer.val){ pointer = pointer.next; }
        }

        if(pointer === null){ return true; }

        let leftSide = false;
        let rightSide = false;
        if(root.left){leftSide = helper(pointer, root.left);}
        if(root.right){rightSide = helper(pointer, root.right);}
        
        return leftSide || rightSide;
    }
    return helper(head,root);
};