# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    def __repr__(self):
        if self is None:
            return "Null"
        else:
            return "{} -> {}".format(self.val, repr(self.next))


class Solution:
    # 执行用时：96 ms
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        # 指向头指针
        first = res = ListNode(-1)
        # 当两个链表都不为空的时候，比较大小
        while l1 and l2:
            if l1.val < l2.val:
                first.next = l1
                l1 = l1.next
            else:
                first.next = l2
                l2 = l2.next
            first = first.next
        # 将链表长度最大的链表中剩余元素拼接在目标链表后
        if l1:
            first.next = l1
        if l2:
            first.next = l2
        return res.next

    # 执行用时：68 ms
    def mergeTwoLists2(self, l1, l2):
        first = res = ListNode(-1)
        while l1 and l2:
            if l1.val < l2.val:
                first.next = l1
                l1 = l1.next
            else:
                first.next = l2
                l2 = l2.next
            first = first.next
        # 巧妙利用逻辑运算符
        first.next = l1 or l2
        return res.next

    # 递归，执行用时：68 ms
    def mergeTwoLists3(self, l1, l2):
        if not l1 or not l2:
            return l1 or l2
        if l1.val < l2.val:
            l1.next = self.mergeTwoLists2(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists2(l1, l2.next)
            return l2


if __name__ == '__main__':
    l1 = ListNode(1)
    l1.next = ListNode(2)
    l1.next.next = ListNode(4)
    l2 = ListNode(1)
    l2.next = ListNode(3)
    l2.next.next = ListNode(4)

    # 1 -> 1 -> 2 -> 3 -> 4 -> 4- > None
    print(Solution().mergeTwoLists3(l1, l2))
