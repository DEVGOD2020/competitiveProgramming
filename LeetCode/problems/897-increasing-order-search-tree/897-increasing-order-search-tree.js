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
var increasingBST = function(root) {
    let tree = new TreeNode();
    let newTree = tree;
    let blah = function(root){
        if(!root){return;}
        blah(root.left);

        newTree.right = new TreeNode(root.val);
        newTree = newTree.right;

        blah(root.right);
        return;
    }
    blah(root);
    
    return tree.right;
};
