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
var findTilt = function(root) {
    
    let titSum = 0;
    let blah = function(root){
        if(!root){return 0;}

        let leftSum = blah(root.left);
        let rightSum = blah(root.right);

        let tilt = Math.abs(leftSum-rightSum);
        titSum += tilt;
        return leftSum + rightSum + root.val;
    }

    blah(root)

    return titSum;
};