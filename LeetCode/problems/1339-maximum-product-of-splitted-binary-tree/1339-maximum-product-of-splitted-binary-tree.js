/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    let max = -1e6;
    let total = 0;
    let blah = function(root){
        if(!root){return 0;}
        let sum = root.val + blah(root.left) + blah(root.right);
        max = Math.max(max, sum*(total-sum) );
        return sum;
    }

    total = blah(root);
    blah(root);
    return max % (1e9+7);
};
