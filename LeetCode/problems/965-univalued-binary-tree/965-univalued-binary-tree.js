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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let target = root.val;
    
    let dfs = function(root){
        if(!root){ return true; }
        if(root.val !== target){ return false; }
        return dfs(root.left) && dfs(root.right);
    }

    return dfs(root);
};
