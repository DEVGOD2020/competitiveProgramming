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
var countNodes = function(root) {

    let dfs = function(root){
        if(!root){return 0;}
        let score = 1;
        score += dfs(root?.left);
        score += dfs(root?.right);
        return score;
    }

    return dfs(root);
};