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
    public ListNode middleNode(ListNode head) {
        List<Integer> myList = new ArrayList();
        final ListNode myHead = head;
        while(head.next!=null){
            myList.add(head.val);
            head = head.next;
        }

        int SIZE = myList.size();
        if(SIZE%2==1){SIZE++;}
        head = myHead;

        int I = 0;
        while(I<Math.floor(SIZE/2)){
            head = head.next;
            I++;
        }

        return head;
    }
}