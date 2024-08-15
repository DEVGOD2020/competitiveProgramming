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
var sumOfLeftLeaves = function (root) {
    let stack = [root];
    let sum = 0;
    while (stack.length) {
        let node = stack.pop();
        if (node.left) {
            stack.push(node.left);
        }
        if(node.left && !node.left.left && !node.left.right){
            sum += node.left.val;
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return sum;
};