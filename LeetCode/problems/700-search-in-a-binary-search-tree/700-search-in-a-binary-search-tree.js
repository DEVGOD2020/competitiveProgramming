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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root === null){
        return null;
    }
    if(root.val === val){
        return root;
    }

    let leftTree = searchBST(root.left,val);
    let rightTree = searchBST(root.right,val);

    if(leftTree !== null){
        return leftTree;
    }
    if(rightTree !== null){
        return rightTree;
    }

    return null;
};