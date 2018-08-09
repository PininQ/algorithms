'''
简单调整一下判断顺序就快很多了，哈哈
401 / 401 个通过测试用例
状态：通过
执行用时：60 ms
'''


class Solution:
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        # 下面这一段代码效率跟 happy-number.py 一样
        # nlist = []
        # nlist.append(n)
        # while n != 1:
        #     num = 0
        #     while n > 0:
        #         num += (n % 10) * (n % 10)
        #         n //= 10
        #     if num in nlist:
        #         return False
        #     else:
        #         nlist.append(num)
        #     n = num
        # return True
        nlist = []
        nlist.append(n)
        while nlist[-1] != 1:
            m = nlist[-1]
            num = 0
            while m:
                num += (m % 10) * (m % 10)
                m //= 10
            if num in nlist:
                return False
            else:
                nlist.append(num)
        return True


if __name__ == "__main__":
    print(Solution().isHappy(44))
