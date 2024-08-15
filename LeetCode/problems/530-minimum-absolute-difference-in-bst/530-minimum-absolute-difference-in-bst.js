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
var getMinimumDifference = function(root) {

    //First DFS
    let stack = [];
    stack.push(root);

    let Lowest = Number.MAX_SAFE_INTEGER;
    while(stack.length>0){
        let node = stack.pop();
        if(node.left !== null){
            stack.push(node.left);
        }
        if(node.right !== null){
            stack.push(node.right);
        }
        let dis = Diff(node.val,root.left);
        if(dis < Lowest){
            Lowest = dis;
        }
    }  

    return Lowest;
};

var Diff = function(val, root){
    let stack = [];
    stack.push(root);
    
    let Lowest = Number.MAX_SAFE_INTEGER;
    while(stack.length>0){
        let node = stack.pop();
        if(node.left !== null){
            stack.push(node.left);
        }
        if(node.right !== null){
            stack.push(node.right);
        }
        let dis = Math.abs(node.val-val);
        if(dis<Lowest){
            Lowest = dis;
        }
    }
    return Lowest;
}