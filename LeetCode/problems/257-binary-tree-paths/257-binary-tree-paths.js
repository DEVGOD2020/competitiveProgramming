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
 * @return {string[]}
 */

const binaryTreePaths = (root, paths = [], path = []) => {
  path.push(root.val);
  if (!root.right && !root.left) paths.push(path.join('->'));
  root.left && binaryTreePaths(root.left, paths, path);
  root.right && binaryTreePaths(root.right, paths, path);
  path.pop();
  return paths;
};