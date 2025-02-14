/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans = [];
    let helper = function(root){
        if(!root){
            return ans;
        }
        ans.push(root.val);
        for(let child of root.children){
            helper(child);
        }
        return ans;
    }
    return helper(root);
};