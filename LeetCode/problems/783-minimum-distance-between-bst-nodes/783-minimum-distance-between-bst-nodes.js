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
var minDiffInBST = function(root) {
    let score = Infinity;
    let prev = null;
    let dfs = function(node){
        if(!node){return;}
        dfs(node.left);
        if(prev !== null){
            score = Math.min(score, node.val - prev.val)
        }
        prev = node;
        dfs(node.right); 

    }

    dfs(root);
    return score;
};