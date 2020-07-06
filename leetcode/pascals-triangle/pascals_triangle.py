'''
杨辉三角
15 / 15 个通过测试用例
状态：通过
执行用时：40 ms
'''
from __future__ import print_function


class Solution:
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if numRows <= 0:
            return []
        res = [[1]]
        for i in range(1, numRows):
            res.append([(0 if j == 0 else res[i - 1][j - 1]) + (0 if j == len(
                res[i - 1]) else res[i - 1][j]) for j in range(i + 1)])
        return res

    def generate2(self, numRows):
        res = []
        for i in range(numRows):
            res.append([])
            for j in range(i + 1):
                if j in (0, i):
                    res[i].append(1)
                else:
                    res[i].append(res[i - 1][j - 1] + res[i - 1][j])
        return res

    def generate3(self, numRows):
        if not numRows:
            return []
        res = [[1]]
        for i in range(1, numRows):
            res += [
                list(map(lambda x, y: x + y, res[-1] + [0], [0] + res[-1]))
            ]
        return res[:numRows]

    def generate4(self, numRows):
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]
        res = [[1], [1, 1]]

        def add(nums):
            res = nums[:1]
            for i, j in enumerate(nums):
                if i < len(nums) - 1:
                    res += [nums[i] + nums[i + 1]]
            res += nums[:1]
            return res

        while len(res) < numRows:
            res.extend([add(res[-1])])
        return res


if __name__ == '__main__':
    # print(type(Solution().generate3(5)))
    for each in Solution().generate3(5):
        print(each)
