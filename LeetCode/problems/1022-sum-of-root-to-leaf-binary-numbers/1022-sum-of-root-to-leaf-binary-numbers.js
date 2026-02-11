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
var sumRootToLeaf = function(root, score=0) {
    if(!root){return 0;}
    score = score*2 + root.val;
    let left = sumRootToLeaf(root.left,score);
    let right = sumRootToLeaf(root.right,score);

    if(root.left == root.right){
        return score;
    }
    return left+right;
};
