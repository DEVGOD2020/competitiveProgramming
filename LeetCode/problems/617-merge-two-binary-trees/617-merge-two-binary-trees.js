/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    let stack = [root1]
    let stack2 = [root2];

    let root3 = new TreeNode(null);

    while(stack.length > 0 && stack2.length > 0){
        root1 = stack.pop();
        root2 = stack2.pop();
        if(root1.left){stack.push(root1.left);}
        if(root2.left){stac2.push(root2.left);}
        if(root1.right){stack.push(root1.right);}
        if(root2.right){stac2.push(root2.right);}

        root3.val = root1.val+root2.val;
    }
};