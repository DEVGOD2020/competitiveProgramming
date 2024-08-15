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
var findMode = function(root) {
    let stack = [root];
    let arr = [];
    while(stack.length > 0){
        let node = (stack.pop());
        
        if(arr[node.val] === undefined){
            arr[node.val] = 0;
        }
        arr[node.val]++;

        if(node.left !== null){stack.push(node.left);}
        if(node.right !== null){stack.push(node.right);}
    }
    
    let min = Number.MIN_VALUE;
    let modes = [];
    for(let A in arr){
        if(arr[A] !== undefined){
            if(arr[A] > min){
                min = arr[A];
                modes = [A];
            }else if( arr[A] == min ){
                modes.push(A);
            }
        }
    }
    return modes;
};