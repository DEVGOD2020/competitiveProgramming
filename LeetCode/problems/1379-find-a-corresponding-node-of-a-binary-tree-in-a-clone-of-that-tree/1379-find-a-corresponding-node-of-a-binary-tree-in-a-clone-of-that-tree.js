/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let blah = function(root){
        if(!root){return undefined;}
        if(root.val == target.val){ return root; }

        let left = blah(root.left);
        let right = blah(root.right);

        if( left !== undefined){return left;}
        if( right !== undefined){return right;}
    }
    return blah(cloned);
};
