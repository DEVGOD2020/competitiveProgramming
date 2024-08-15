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
var maxAncestorDiff = function(root) {
    let high = -Infinity;
    function helper(tree,min,max){
        if(tree == null){
            return;
        }

        min = Math.min(min,tree.val);
        max = Math.max(max,tree.val);
        high = Math.max(high,max-min);

        helper(tree.left,min,max);
        helper(tree.right,min,max);
    }

    helper(root,root.val,root.val);

    return high;
};