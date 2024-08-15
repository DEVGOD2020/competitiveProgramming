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
 * @return {number[]}
 */
var postorderTraversal = function(root,ans=[]) {
    if(!root){return [];}
    if(root.left !== null){postorderTraversal(root.left, ans);}
    if(root.right !== null){postorderTraversal(root.right, ans);}
    ans.push(root.val);
    return ans;
};