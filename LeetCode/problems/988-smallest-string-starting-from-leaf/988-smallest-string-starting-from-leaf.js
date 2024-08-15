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
 * @return {string}
 */
var smallestFromLeaf = function (root) {

    const paths = [];
    function dfs(node, path = "") {
        if (!node) {
            return;
        }
        path = String.fromCharCode(node.val + 97) + path;
        if (!node.left && !node.right) {
            paths.push(path);
        } else {
            if (node.left) {
                dfs(node.left, path);
                path[path.length - 1] = undefined;
            }
            if (node.right) {
                dfs(node.right, path);
                path[path.length - 1] = undefined;
            }
        }
    }

    dfs(root, "");

    return paths.sort()[0];
};