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
var averageOfLevels = function(root) {
    let myValues = new Map();
    let myNodes = new Map();
    let ans = [];
    let dfs = function(root, depth=0){
        if(!root){return 0;}

        myValues.set( depth, (myValues.get(depth)|0) + root.val);
        myNodes.set( depth, (myNodes.get(depth)|0)+1);
        ans[depth] = myValues.get(depth)/myNodes.get(depth);
        
        if(root.left){dfs(root.left,depth+1);}
        if(root.right){dfs(root.right,depth+1)}
        return 0;
    }

    dfs(root);

    return ans;    
};