class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        mark = 1
        if x < 0:
            mark = -1
            x *= -1
        res = mark * int(str(x)[::-1])
        if x < -2**31 and x > 2**31 - 1:
            return 0
        return res

    def reverse2(self, x):
        # 记录正负
        mark = 1
        if x < 0:
            mark = -1
        # 利用绝对值函数、整型转字符串函数，然后进行反转，添加记录的正负符号
        res = mark * int(str(abs(x))[::-1])
        # 返回反转值，超出给定范围为 0
        return res if -(2**31) - 1 < res < 2**31 else 0


if __name__ == "__main__":
    print(Solution().reverse2(123))  # 321
    print(Solution().reverse2(-123))  # -321
    print(Solution().reverse2(120))  # 21