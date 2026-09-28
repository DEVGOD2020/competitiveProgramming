function rightLeavesSum(root) {
    let score = 0;
    let trav = function(root,isRight=false){
        if(!root){return 0;}
        if(!root.left && !root.right && isRight){
            score += root.val;
        }
        trav(root.right,true);
        trav(root.left,false);
    }
    trav(root);
    return score;
}
