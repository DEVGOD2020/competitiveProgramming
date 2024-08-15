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
var averageOfSubtree = function(root) {
    let score = 0;

    let stack = [root];
    while(stack.length > 0){
        let node = stack.pop();
        if(node.val == nodeAvg(node)){ score++; }
        if(node.left !== null){stack.push(node.left);}
        if(node.right !== null){stack.push(node.right);}
    }

    return score;
};

var nodeAvg = function(root){
    let size = 0;
    let amount = 0;
    let inoderTraverse = function(root){
        size++;
        amount += root.val;
        if(root.left !== null){inoderTraverse(root.left)}
        if(root.right !== null){inoderTraverse(root.right)}
    }
    inoderTraverse(root);
    return Math.floor(amount/size);
}