# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    def __repr__(self):
        if self is None:
            return "Nil"
        else:
            return "{} -> {}".format(self.val, repr(self.next))


class Solution:
    # 执行用时：44 ms
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        cur = res = ListNode(0)
        cur.next = head
        while cur.next and cur.next.next:
            cur.next.next.next, cur.next.next, cur.next, cur = \
            cur.next, cur.next.next.next, cur.next.next, cur.next
        return res.next

    # 执行用时：52 ms
    def swapPairs2(self, head):
        if head is None:
            return head
        cur = res = ListNode(0)
        cur.next = head
        while cur.next and cur.next.next:
            n1 = cur.next
            n2 = n1.next
            nxt = n2.next
            n1.next = nxt
            n2.next = n1
            cur.next = n2
            cur = n1
        return res.next

    # 执行用时：52 ms
    def swapPairs3(self, head):
        """
            首先需要建立 cur、node1、node2 和 lat 四个指针
            cur   node1  node2   lat
            h  ->  1  ->  2  ->  3  ->  4

            然后 cur->next=node2; node2.next=node1; node1.next=lat
                -----------
                ↑         ↓
            h   1 <- 2    3 -> 4
            |        ↑
            ----------
        """
        res = ListNode(0)
        res.next = head
        cur = res
        while cur.next and cur.next.next:
            node1 = cur.next
            node2 = node1.next
            lat = node2.next

            cur.next = node2
            node2.next = node1
            node1.next = lat

            cur = node1
        return res.next


if __name__ == '__main__':
    head = ListNode(1)
    head.next = ListNode(2)
    head.next.next = ListNode(3)
    head.next.next.next = ListNode(4)

    # 1 -> 2 -> 3 -> 4 -> None
    print(Solution().swapPairs3(head))
