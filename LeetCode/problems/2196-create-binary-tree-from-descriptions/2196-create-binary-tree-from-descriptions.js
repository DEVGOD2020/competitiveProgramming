/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let myMap = new Map();
    let childSet = new Set();  
    for(let node of descriptions){

        if(!myMap.has(node[0])){
            myMap.set(node[0], new TreeNode(node[0]));
        }
        if(!myMap.has(node[1])){
            myMap.set(node[1], new TreeNode(node[1]));
        }

        if(node[2] === 1){
            let newTree = myMap.get(node[0]);
            newTree.left = myMap.get(node[1]);
            myMap.set(node[0], newTree);
        }else{
            let newTree = myMap.get(node[0]);
            newTree.right = myMap.get(node[1]);
            myMap.set(node[0], newTree);
        }

        childSet.add(node[1]);
    }

    for(let node of myMap.keys()){
        if(!childSet.has(node)){
            return myMap.get(node);
        }
    }

    return null;

};