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
var sumNumbers = function(root) {
    let sum = 0;
    function dfs(root, str=""){
        if(root){
            str += root.val;
        }
        if(root.left){
            dfs(root.left,str);
        }
        if(root.right){
            dfs(root.right,str);
        }
        if(!root.left && !root.right){
            sum += parseInt(str);
        }

        return 1;
    }

    dfs(root);
    return sum;
};