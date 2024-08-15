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

//-1
//2
//-1

var distributeCoins = function(root) {
    let moves = 0;
    let dfs = function(tree){
        if(!tree){return 0;}
        let left = dfs(tree.left);
        let right = dfs(tree.right);

        moves += Math.abs(left)+Math.abs(right);
        return tree.val+left+right-1;
    }

    dfs(root);
    return moves;
};