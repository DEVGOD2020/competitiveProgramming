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
var findBottomLeftValue = function(root, L=0) {
    let ans = [-Infinity,-Infinity];
    function travel(root,L=0){
        if(ans[1] < L){ans = [root.val,L];}
        if(root.left != null){travel(root.left, L+1);}
        if(root.right != null){travel(root.right, L+1);} 
    }
    travel(root);
    return ans[0];
};