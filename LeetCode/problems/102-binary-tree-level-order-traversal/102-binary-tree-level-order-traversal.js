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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){return [];}
    let arr = [[root,0]];
    let ans = [];
    while(arr.length){
        let [node,depth] = arr.pop();
        if(ans[depth] == undefined){
            ans[depth] = [];
        }
        ans[depth].push(node.val);
        if(node.left){arr.unshift( [node.left,depth+1] );}
        if(node.right){arr.unshift( [node.right,depth+1] );}
    }
    return ans;
};
