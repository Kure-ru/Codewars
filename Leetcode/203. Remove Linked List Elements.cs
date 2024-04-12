/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode RemoveElements(ListNode head, int val)
    {
        if (head == null)
        {
            return null;
        }
        head.next = RemoveElements(head.next, val);
        if (head.val == val)
        {
            return head.next;
        }
        else
        {
            return head;
        }
    }
}