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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let levelSums = [];

    let bfs = function(node, level=0){
        if(!node){
            return 0;
        }
        
        levelSums[level] = (levelSums[level] || 0) + node.val;
        if(node.left){
            bfs(node.left, level+1);
        }
        if(node.right){
            bfs(node.right, level+1);
        }

        return 1;
    }

    bfs(root);

    levelSums = _.sortBy(levelSums, (el)=>-el);

    return levelSums[k-1]?levelSums[k-1]:-1;
};