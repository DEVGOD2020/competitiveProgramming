**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    let stack = [root];
    
    let Amount = 0;
    let A = 0;
    while(stack.length > 0){
        root = stack.pop();
        A = root.val;
        if(A>=low && A<=high){
            Amount+=A;
        }
        if(root.left){
            stack.push(root.left);
        }
        if(root.right){
            stack.push(root.right);
        }
    }

    return Amount;
}