/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root, ans=[]) {
    if(!root){
        return [];
    }

    for(let child of root.children){
        postorder(child, ans);
    }

    ans.push(root.val);
    return ans;
};