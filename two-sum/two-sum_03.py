'''
方法三：与方法二类似
遍历每个元素 i，并查找是否存在一个值 j 与 target - x 相等的目标元素。
通过创建字典，将 nums 里的值和序号对应起来，temp = target - 列表中的元素的值（该值暂且称为 temp），
然后判断 temp 是否在字典 dict1 中（dict 查找速度非常快，因为dict的实现原理和查字典是一样的。
而在 list 中查找元素的方法，list 越大，查找越慢。）。如果是返回索引值，不是则下一个 temp 的判断。
单层循环实现，执行用时：48 ms
'''


class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        n = len(nums)
        dict1 = {nums[i]: i for i in range(n)}
        for i in range(n - 1):
            temp = target - nums[i]
            if (temp in nums) and (i != dict1[temp]):
                return [i, dict1[temp]]
        return None


if __name__ == '__main__':
    print(Solution().twoSum([2, 7, 11, 15], 100))