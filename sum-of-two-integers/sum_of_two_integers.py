class Solution:
    # 不使用 + 和 - 运算符也是可以完成的，有点不厚道。
    # 44 ms
    def getSum(self, a, b):
        """
        :type a: int
        :type b: int
        :rtype: int
        """
        return sum([a, b])

    # 40 ms
    def getSum2(self, a, b):
        result = a ^ b
        carry = (a & b) << 1
        return sum([result, carry])

    # 40 ms .Python 的位操作有毒，没有无符号右移操作
    def getSum3(self, a, b):
        while b != 0:
            temp = a ^ b
            b = (a & b) << 1
            a = temp & 0xFFFFFFFF
        return a if a >> 31 == 0 else a - 4294967296


if __name__ == '__main__':
    print(Solution().getSum2(23, 56))
