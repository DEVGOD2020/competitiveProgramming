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
var preorderTraversal = function(root,ans=[]) {
    if(!root){return [];}
    ans.push(root.val);
    if(root.left !== null){preorderTraversal(root.left, ans);}
    if(root.right !== null){preorderTraversal(root.right, ans);}
    return ans;
};