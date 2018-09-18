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
    # 执行用时：60 ms
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        # 前指针和后指针分别指向 head
        firstNode = behindNode = head
        # 前指针移动到位置 n
        for _ in range(n):
            firstNode = firstNode.next
        # 特殊情况，firstNode 指向最后一个节点，且要删的是第一个节点
        if not firstNode:
            return head.next
        # 前后 指针 同步移动
        # 直到 firstNode 指向了最后一个节点（俩个指针始终保持相同间距）
        while firstNode.next:
            firstNode = firstNode.next
            behindNode = behindNode.next
        # 删除元素
        behindNode.next = behindNode.next.next
        return head


if __name__ == '__main__':
    head = ListNode(1)
    head.next = ListNode(2)
    head.next.next = ListNode(3)
    head.next.next.next = ListNode(4)
    head.next.next.next.next = ListNode(5)

    # 1 -> 2 -> 3 -> 5 -> None
    print(Solution().removeNthFromEnd(head, 2))