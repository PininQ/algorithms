# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        # 指定到链表头节点
        p = dummy = ListNode(-1)
        # 进位标志
        carry = 0
        # 遍历到两个链表的相同位置不为空时的元素
        while l1 and l2:
            p.next = ListNode(l1.val + l2.val + carry)
            # 获取 p.next 十位，必定是 0 或 1
            carry = p.next.val // 10
            # 获取 p.next 的个位
            p.next.val %= 10
            p = p.next
            l1 = l1.next
            l2 = l2.next
        res = l1 or l2
        # 遍历两个链表中较长链表的高位位置的元素
        while res:
            p.next = ListNode(res.val + carry)
            carry = p.next.val // 10
            p.next.val %= 10
            p = p.next
            res = res.next
        # 如果进位不为 0，则添加元素 1
        if carry:
            p.next = ListNode(1)
        # 返回链表
        return dummy.next
