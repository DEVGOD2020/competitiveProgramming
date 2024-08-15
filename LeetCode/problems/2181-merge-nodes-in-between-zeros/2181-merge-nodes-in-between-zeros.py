# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pre = head
        cur = head.next
        score = 0
        while(cur):
            if cur.val == 0:
                pre.val = score
                score = 0
                if cur.next:
                    pre = pre.next
                cur = cur.next
            else:
                score += cur.val
                cur = cur.next

        pre.next = None
        return head