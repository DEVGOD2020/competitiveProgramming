function minDepth(root) {
    if(!root){return 0;}
    if(!root.left && !root.right){ return 1; }
    return Math.min(
        root?.left ? minDepth(root.left)+1 : Infinity,
        root?.right ? minDepth(root.right)+1 : Infinity
    )
}
