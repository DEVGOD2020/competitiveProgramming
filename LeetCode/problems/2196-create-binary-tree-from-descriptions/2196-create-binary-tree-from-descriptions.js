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
    let rootSet = new Set();
    for(let [parent,child,place] of descriptions){
        if(!myMap.has(parent)){
            myMap.set(parent, new TreeNode(parent));
        }
        if(!myMap.has(child)){
            myMap.set(child, new TreeNode(child));
        }
        if(place){
            myMap.get(parent).left = myMap.get(child);
        }else{
            myMap.get(parent).right = myMap.get(child);
        }
        if(!childSet.has(parent)){
            rootSet.add(parent);
        }
        if(rootSet.has(child)){
            rootSet.delete(child);
        }
        childSet.add(child);
    }
    return myMap.get(rootSet.values().next().value);
};