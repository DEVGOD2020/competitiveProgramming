/**
 * class TreeNode {
 *     constructor(val, left, right) { this.val = val; this.left = left; this.right = right; }
 * }
 */
function deepestNodesSum(root) {
    let score = 0;
    let max = -1;
    let blah = function(root,depth=0){
        if(!root){return;}
        if(root.left == undefined && root.right == undefined){
            if(depth > max){
                max = depth;
                score = root.val;
            }else if(depth == max){
                score += root.val;
            }
        }
    
        blah(root.left,depth+1);
        blah(root.right,depth+1);
    }
    blah(root);
    return score;
}
