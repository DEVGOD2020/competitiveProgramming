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
var maxDepth = function(root, X=1) {
    if(!root){return 0;}
    if(root.left === null && root.right === null){return X;}
    X++;
    return Math.max(maxDepth(root.left,X),maxDepth(root.right,X));
};