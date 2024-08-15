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
 */
var FindElements = function(root) {
    mySet = new Set();
    mySet.add(0);
    
    root.val = 0;
    let stack = [root];
    while(stack.length > 0){
        let node = stack.pop();
        if( node.left !== null){
            node.left.val = 2* node.val+1;
            mySet.add(node.left.val);
            stack.push( node.left);
        }
        if( node.right !== null){
            node.right.val = 2* node.val+2;
            mySet.add(node.right.val);
            stack.push( node.right);
        }
    }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return mySet.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */