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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    if (depth == 1) {
        return new TreeNode(val, root, null);
    }
    function bfs(node, I = 0) {
        if (!node) {
            return null;
        }
        
        if (I === depth - 2) {
            node.left = new TreeNode(val, node.left, null);
            node.right = new TreeNode(val, null, node.right);
        }

        if (node.left) {
            bfs(node.left, I + 1);
        }
        if (node.right) {
            bfs(node.right, I + 1);
        }
    }

    bfs(root);
    return root;
};