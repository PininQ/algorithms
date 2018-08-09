'''
直接求
401 / 401 个通过测试用例
状态：通过
执行用时：72 ms
'''


class Solution:
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        nlist = []
        nlist.append(n)
        while 1:
            mlist = []
            m = nlist[-1]
            while m:
                mlist.append(m % 10)
                m = m // 10
            num = 0
            for i in mlist:
                num += i * i
            if num == 1:
                return True
            elif num in nlist:
                return False
            else:
                nlist.append(num)


if __name__ == "__main__":
    print(Solution().isHappy(19))
