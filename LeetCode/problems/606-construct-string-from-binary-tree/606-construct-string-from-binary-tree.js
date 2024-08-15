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

var tree2str = function(root) {
    let str = "";
    function helper(root){
      str += "(";
      str += root.val;
      if(root.left == null && root.right !== null){str += "()";}
      if(root.left !== null){helper(root.left); str += ")";}
      if(root.right !== null){helper(root.right); str += ")";}
    }
    helper(root);
    return str.slice(1,str.length);
};