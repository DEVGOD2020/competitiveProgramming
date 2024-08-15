var hasPathSum = function(root, targetSum) {
    if (!root) return false // not a leaf
    if (!root.left && !root.right) return root.val === targetSum; // leaf

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};