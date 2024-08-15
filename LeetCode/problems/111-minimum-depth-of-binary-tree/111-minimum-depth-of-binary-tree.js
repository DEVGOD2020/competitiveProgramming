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
var minDepth = function(root, X=0) {
    if(!root){return X;}
    X++;

    if(root.left === null){
        return minDepth(root.right, X);
    }else if(root.right === null){
       return minDepth(root.left, X); 
    }

    return Math.min(minDepth(root.left,X),minDepth(root.right,X));
};