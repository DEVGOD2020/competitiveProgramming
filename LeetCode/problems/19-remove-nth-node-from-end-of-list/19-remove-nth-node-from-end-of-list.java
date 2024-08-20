/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode cur = head.next;
        ListNode pre = head;

        int I = 0;
        while(I < n && cur != null){
            cur = cur.next;
        }

        pre.next = cur;

        return head;
    }
}