class Solution:
    # 超出时间限制
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        nums.sort()
        n = len(nums)
        for i in range(n - 1):
            for j in range(i + 1, n):
                # 判断当前两数之和的相反数是否在列表切片 nums[j+1:] 中
                if -(nums[i] + nums[j]) in nums[j + 1:]:
                    temp = (nums[i], nums[j], -(nums[i] + nums[j]))
                    if temp not in res:
                        res.append(temp)
        return res

    # 执行用时：1000 ms
    def threeSum2(self, nums):
        res = []
        nums.sort()
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            # target 为另外两个数之和
            target = 0 - nums[i]
            # 列表中剩余元素的起始索引
            start, end = i + 1, len(nums) - 1
            while start < end:
                if nums[start] + nums[end] > target:
                    end -= 1
                elif nums[start] + nums[end] < target:
                    start += 1
                # 找到两个数值的和等于目标值的两个索引
                else:
                    res.append((nums[i], nums[start], nums[end]))
                    end -= 1
                    start += 1
                    while start < end and nums[end] == nums[end + 1]:
                        # 如果尾部连续两个数值相等，尾部索引减一
                        end -= 1
                    while start < end and nums[start] == nums[start - 1]:
                        # 如果首部两虚两个数值相等，首部索引加一
                        start += 1
        return res

    def threeSum3(self, nums):
        


if __name__ == '__main__':
    nums = [-1, 0, 1, 2, -1, -4]
    print(Solution().threeSum3(nums))
