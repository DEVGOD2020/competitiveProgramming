function rightLeavesSum(root,isRight=false) {
    if(!root){return 0;}
    if(!root.left && !root.right){
        return isRight?root.val:0;
    }
    return rightLeavesSum(root.left,false) + rightLeavesSum(root.right,true);
}