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
var lcaDeepestLeaves = function(root) {
    let ans = root;
    let maxDepth = 0;
    let travel = function(node,depth=0){
        maxDepth = Math.max(maxDepth,depth);
        if(!node){return depth;}
        let left = travel(node.left, depth+1);
        let right = travel(node.right, depth+1);
        if(left === maxDepth && right == maxDepth){
            ans = node;
        }
        return Math.max(left, right);
    }

    travel(root);
    return ans;
};