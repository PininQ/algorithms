'''
方法二：暴力法 2
遍历每个元素 i，并查找是否存在一个值 j 与 target - x 相等的目标元素。
单层循环实现，执行用时：1380 ms
'''


class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(len(nums)):
            oneNum = nums[i]
            twoNum = target - oneNum
            if twoNum in nums:
                j = nums.index(twoNum)
                if i is not j:
                    return [i, j]
        return None


if __name__ == '__main__':
    print(Solution().twoSum([2, 7, 11, 15], 9))