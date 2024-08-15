# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        if not root:
            return None
        
        ans = [0,0]
        while arr:
            node = arr.pop()
            if(node.right):
                arr.append(node.right)
            if(node.left):
                arr.append(node.left)
            
            print(node.val)

        return ans[1]
        
