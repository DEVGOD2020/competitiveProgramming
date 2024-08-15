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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    
    let stack = [[root,'A']];
    let path1 = "";
    let path2 = "";
    let curPath = "";
    while(stack.length){
        let poopNode = stack.pop();
        curPath = poopNode[1];
        if(!poopNode[0]){ continue; }
        if(poopNode[0].val === startValue){ path1 = curPath; }
        if(poopNode[0].val === destValue){ path2 = curPath; }
        
        if(poopNode[0].left){
            stack.push([poopNode[0].left,curPath+'L']);
        }
        if(poopNode[0].right){
            stack.push([poopNode[0].right,curPath+'R']);
        }
    }

    let a = 0;
    while(path1[a] === path2[a]){ a++; }

    path1 = path1.substring(a,path1.length);
    path2 = path2.substring(a,path2.length);

    return Array(path1.length).fill('U').join("") + path2;
};