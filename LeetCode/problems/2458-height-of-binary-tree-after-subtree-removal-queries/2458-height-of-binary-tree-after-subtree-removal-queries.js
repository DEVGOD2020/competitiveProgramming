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
 * @param {number[]} queries
 * @return {number[]}
 */

var treeQueries = function(root, queries) {
    let maxDepths = [];
    let maxHeight = 0;
    let nya = function(root, depth=0){
        if(!root){return null}
        maxDepths[root.val] = Math.max(maxDepths[root.val]||0, maxHeight);
        maxHeight = Math.max(maxHeight,depth);
        nya(root.left,depth+1);
        nya(root.right,depth+1);
    }

    let owo = function(root, depth=0){
        if(!root){return null}
        maxDepths[root.val] = Math.max(maxDepths[root.val]||0, maxHeight);
        maxHeight = Math.max(maxHeight,depth);
        owo(root.right,depth+1);
        owo(root.left,depth+1);
    }

    nya(root);
    maxHeight = 0;
    owo(root);

    let ans = [];
    for(let q of queries){
        ans.push(maxDepths[q]);
    }

    return ans;
};