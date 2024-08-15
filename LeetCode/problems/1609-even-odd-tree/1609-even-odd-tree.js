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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    let stack = [ [root,1] ];
    let prev = -Infinity;
    let level = -1;
    while(stack.length > 0){
        let node = stack.pop();
        if(node[1] !== level){
            prev = (node[1]%2==1) ? -Infinity : Infinity;
            level = node[1];
        }
        
        //Check is evens or odds
        if(level%2 !== node[0].val%2){return false;}

        //Check increasing decreasing order
        if(level%2 == 0 && prev <= node[0].val){ return false;}
        if(level%2 == 1 && prev >= node[0].val){ return false; }

        prev = node[0].val;

        if(node[0].left !== null){stack.unshift( [ node[0].left,level+1 ] );}
        if(node[0].right !== null){stack.unshift( [ node[0].right,level+1 ] );}
    }
    return true;
};