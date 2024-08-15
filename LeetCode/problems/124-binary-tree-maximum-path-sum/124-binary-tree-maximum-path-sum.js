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
var maxPathSum = function(root) {

    let maxPath = Number.MIN_SAFE_INTEGER;
    let reroot = function(node){
        if(!node){return 0;}
        const leftSum = Math.max(reroot(node.left),0);
        const rightSum = Math.max(reroot(node.right),0);

        let newVal = node.val+leftSum+rightSum;
        maxPath = Math.max(maxPath,newVal);

        return node.val + Math.max(leftSum, rightSum);
    }

    reroot(root);
    return maxPath;
    
};