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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let helper = function(root){
        if(!root){return root;}

        let temp = helper(root.right);
        root.right = helper(root.left);
        root.left = temp;
    
        return root;
    }

    return helper(root);
};