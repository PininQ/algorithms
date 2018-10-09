'''
方法一：暴力法
遍历每个元素 i，并查找是否存在一个值 j 与 target - x 相等的目标元素。
两层循环实现，超时
PS：return None 可以省略，没有返回值默认返回 None
'''


class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                temp = nums[i] + nums[j]
                if temp == target:
                    return [i, j]
        return None


if __name__ == '__main__':
    print(Solution().twoSum([2, 7, 11, 15], 9))