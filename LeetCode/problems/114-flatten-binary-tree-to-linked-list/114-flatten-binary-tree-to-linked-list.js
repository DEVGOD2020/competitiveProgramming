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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root, tail=null) {
    if(!root){return tail}
    let right = flatten(root.right, tail);
    let left = flatten(root.left, right);
    root.left = null;
    root.right = left;
    return root;
};
