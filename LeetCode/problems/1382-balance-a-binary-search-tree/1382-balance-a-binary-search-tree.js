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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let arr = [];
    let blah = function(root){
        if(!root){return;}
        blah(root.left);
        arr.push(root.val);
        blah(root.right);
        return;
    }
    blah(root);

    let merge = function(L,R){
        let M = Math.floor( (L+R)/2 );
        if(L>=R){return null;}

        let root = new TreeNode( arr[M] );
        root.left = merge(L,M);
        root.right = merge(M+1,R);

        return root;
    }

    return merge(0,arr.length);
};
