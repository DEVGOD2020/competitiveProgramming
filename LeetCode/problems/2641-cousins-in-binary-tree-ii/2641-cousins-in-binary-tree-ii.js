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
var replaceValueInTree = function(root) {
    let levelSums = [];

    let helperSums = function(root, level=0){
        if(!root){return 0;}
        levelSums[level] = (levelSums[level]||0) + root.val;
        if(root.left){helperSums(root.left,level+1)}
        if(root.right){helperSums(root.right,level+1)}
    }

    let helperBlah = function(root,level=0){
        if(!root){return null;}
        let score = ( (root.left?.val||0)+(root.right?.val||0) );
        if(root.left){root.left.val = levelSums[level+1]-score;}
        if(root.right){root.right.val = levelSums[level+1]-score;}

        let left = helperBlah(root.left,level+1);
        let right = helperBlah(root.right,level+1);
        root.left = left;
        root.right = right;
        return root;
    }

    helperSums(root);

    let newTree = helperBlah(root);
    newTree.val = 0;

    return newTree;
};