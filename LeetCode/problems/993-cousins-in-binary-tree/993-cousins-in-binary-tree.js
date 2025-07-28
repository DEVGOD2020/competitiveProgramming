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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let dfs = function(root,target,depth=0,parent=root){
        if(!root){
            return;
        }
        if(root.val === target){
            return [depth,parent.val];
        }
        return dfs(root.left,target,depth+1,root) || 
        dfs(root.right,target,depth+1,root);
    }

    let xNode = dfs(root,x);
    let yNode = dfs(root,y);

    return (xNode[0] == yNode[0]) && (xNode[1] !== yNode[1]);
};
