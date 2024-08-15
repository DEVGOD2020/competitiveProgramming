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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let stack = [root];
    let adjList = [];
    while(stack.length > 0){
        let node = stack.pop();
        if(adjList[node.val] === undefined){adjList[node.val] = [];}
        if(node.left !== null){
            if(adjList[node.left.val] === undefined){adjList[node.left.val] = [];}
            adjList[node.val].push(node.left.val);
            adjList[node.left.val].push(node.val);
            stack.push(node.left);
        }
        if(node.right !== null){
            if(adjList[node.right.val] === undefined){adjList[node.right.val] = [];}
            adjList[node.val].push(node.right.val);
            adjList[node.right.val].push(node.val);
            stack.push(node.right);
        }
    }

    stack = [start];
    let visited = new Set();
    visited.add(start);
    let ans = -1;
    while(stack.length > 0){
        ans++;
        const size = stack.length;
        for(let a = 0; a < size; a++){
            let node = stack.shift();
            for(let b of adjList[node]){
                if(!visited.has(b)){
                    visited.add(node);
                    stack.push(b);
                }
            }
        }
    }

    return ans;
};