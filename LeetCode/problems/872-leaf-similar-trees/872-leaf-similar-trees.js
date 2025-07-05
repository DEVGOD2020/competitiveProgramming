/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let blah = function(root){
        let seq = [];
        let dfs = function(root){
            if(!root){return;}
            if(!root.left && !root.right){ seq.push(root.val); return;}
            if(root.left){dfs(root.left);}
            if(root.right){dfs(root.right);}
        }
        dfs(root);
        return seq.join(",");
    }
    return blah(root1) == blah(root2);
};
