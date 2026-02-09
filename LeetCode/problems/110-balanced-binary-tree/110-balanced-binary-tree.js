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
var isBalanced = function(root) {
    let blah = function(root){
        if(!root){return 0;}
        const left = blah(root.left);
        const right = blah(root.right);
        if( Math.abs(left-right) > 1){return Infinity; }
        return 1 + Math.max(left,right);
    }
    return blah(root) != Infinity;
};
