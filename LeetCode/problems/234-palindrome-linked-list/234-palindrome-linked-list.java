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
    public boolean isPalindrome(ListNode head) {

        StringBuffer sbr = new StringBuffer("");
        while(head != null){
            sbr.append(head.val);
            head = head.next;
        }

        String str1 = sbr.toString();
        sbr.reverse();
        String str2 = sbr.toString();

        return str1.contains(str2);
    }
}