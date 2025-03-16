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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let mySet = new Set();
    
    let dfs = function(root){
        if(!root){
            return false;
        }

        if(mySet.has(root.val)){
            return true;
        }
        mySet.add( k-root.val);

        return dfs(root.left) || dfs(root.right);
    }

    return dfs(root);
};