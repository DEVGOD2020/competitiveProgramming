/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let min2 = Infinity;

    let search = function(node){
        if(!node){return -1;}

        if(root.val < node.val && node.val < min2){
            min2 = node.val;
        }

        if(root.val === node.val){
            search(node.left);
            search(node.right);
        }
    }

    search(root);
    return min2 === Infinity ? -1 : min2;
};