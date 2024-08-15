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
 * @return {number[]}
 */

var largestValues = function(root) {
    let nodes=[];
    function traverse(root, Y=0) {
        if(!root){return [];}
        if(root.left !== null){traverse(root.left, Y+1);}
        if(root.right !== null){traverse(root.right, Y+1);}
        
        if(nodes[Y] == undefined || nodes[Y] < root.val){ nodes[Y] = root.val; }
    }
    traverse(root);
    return nodes;
};