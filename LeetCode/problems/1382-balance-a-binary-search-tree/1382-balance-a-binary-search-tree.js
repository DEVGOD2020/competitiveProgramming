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
var balanceBST = function(root) {
    let arr = [];
    
    function inorder(root){
        if(!root){
            return 0;
        }
        let left = inorder(root.left);
        arr.push(root.val);
        let right = inorder(root.right);
        return left+right;
    }

    inorder(root);
    
    function createBalBST(arr, L, R){
        if(L>R){return null;}

        let mid = L + Math.floor((R-L) / 2);

        let leftNode = createBalBST(arr, L, mid-1);
        let rightNode = createBalBST(arr, mid+1, R);

        return new TreeNode(arr[mid],leftNode, rightNode);
    }

    return createBalBST(arr, 0, arr.length-1);
};