/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {

    let data = traversal.match( /(-*)([0-9]+)/g ).map(
        (el)=> ({
            depth: el.match(/(-+)/g)?.[0]?.length||0, 
            val: parseInt( el.match(/([0-9]+)/g) )
        })
    );

    let newTree = new TreeNode(data[0].val);
    let depth = 1;
    let pointer = newTree;
    let stack = [];

    for(let I = 1; I<data.length; I++){
        let node = data[I];
        if(node.depth === depth){
            pointer.left = new TreeNode(node.val);
            stack.push([pointer,depth]);
            pointer = pointer.left;
            depth = node.depth+1;
        }else{
            while(stack.length){
                let otherNode = stack.pop();
                if(otherNode[1] === node.depth){
                    pointer = otherNode[0];
                    pointer.right = new TreeNode(node.val);
                    stack.push([pointer,depth]);
                    pointer = pointer.right;
                    depth = node.depth+1;
                    break;
                }
            }
        }
    }

    return newTree;

};