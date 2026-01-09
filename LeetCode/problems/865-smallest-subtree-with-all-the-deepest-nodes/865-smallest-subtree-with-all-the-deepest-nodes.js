/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    let ans = root;
    let maxDepth = 0;
    let travel = function(node,depth=0){
        maxDepth = Math.max(maxDepth,depth);
        if(!node){return depth;}
        let left = travel(node.left, depth+1);
        let right = travel(node.right, depth+1);
        if(left === maxDepth && right == maxDepth){
            ans = node;
        }
        return Math.max(left, right);
    }

    travel(root);
    return ans;
};
