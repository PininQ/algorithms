'''
Python 实现链表

输出结果
node:<__main__.ListNode object at 0x000001825671E518>, value:6, next:<__main__.ListNode object at 0x000001825671E470>
node:<__main__.ListNode object at 0x000001825671E470>, value:2, next:<__main__.ListNode object at 0x000001825671E4E0>
node:<__main__.ListNode object at 0x000001825671E4E0>, value:5, next:None
----------------------------------------------------------------------------------------------------
node:<__main__.ListNode object at 0x000001825671E5F8>, value:5, next:<__main__.ListNode object at 0x000001825671E4A8>
node:<__main__.ListNode object at 0x000001825671E4A8>, value:2, next:<__main__.ListNode object at 0x000001825671E5C0>
node:<__main__.ListNode object at 0x000001825671E5C0>, value:6, next:None
'''


# 自定义链表
class ListNode(object):
    def __init__(self):
        self.val = None
        self.next = None


# 实现链表操作
class ListNodeHandle:
    def __init__(self):
        self.cur_node = None

    # 添加元素
    def addList(self, data):
        node = ListNode()
        node.val = data
        node.next = self.cur_node
        self.cur_node = node
        return node

    # 打印链表
    def printListNode(self, nodeList):
        while nodeList:
            print('node:%s, value:%s, next:%s' % (nodeList, nodeList.val,
                                                    nodeList.next))
            nodeList = nodeList.next

    # 反转链表
    def _reverse(self, nodeList):
        nlist = []
        while nodeList:
            nlist.append(nodeList.val)
            nodeList = nodeList.next
        result = ListNode()
        resultHandle = ListNodeHandle()
        for i in nlist:
            result = resultHandle.addList(i)
        return result


lnh = ListNodeHandle()
l1 = ListNode()
l1_list = [5, 2, 6]
for i in l1_list:
    l1 = lnh.addList(i)
lnh.printListNode(l1)
print("--" * 50)
l1 = lnh._reverse(l1)
lnh.printListNode(l1)