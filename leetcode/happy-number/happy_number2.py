'''
401 / 401 个通过测试用例
状态：通过
执行用时：68 ms
'''


class Solution:
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        while n > 6:
            num = 0
            while n:
                num += (n % 10) * (n % 10)
                n //= 10
            n = num
        if n == 1:
            return True
        else:
            return False


if __name__ == "__main__":
    print(Solution().isHappy(19))
