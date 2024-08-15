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
var rob = function(root) {
  return Math.max(...dfs(root));
};

function dfs(root2){
    if(!root2){
      return [0,0];
    }

    const leftPair = dfs(root2.left);
    const rightPair = dfs(root2.right);

    const withRoot = root2.val+leftPair[1]+rightPair[1];
    const withoutRoot = Math.max(...leftPair)+Math.max(...rightPair);
    
    return [withRoot, withoutRoot];
}