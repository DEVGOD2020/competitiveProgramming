function maxDepth(root) {
    if(!root){return 0;}
    if(!root.left && !root.right){ return 1; }
    return Math.max(
        root?.left ? maxDepth(root.left)+1 : -Infinity,
        root?.right ? maxDepth(root.right)+1 : -Infinity
    )
}
