class Solution:
    # 执行用时：96 ms
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        length = 1
        for i in range(len(nums) - 1):
            if nums[i] != nums[i + 1]:
                nums[length] = nums[i + 1]
                length += 1
        return length

    # 执行用时：96 ms
    def removeDuplicates2(self, nums):
        if not nums:
            return 0
        last = 0
        for i in range(len(nums)):
            if nums[last] != nums[i]:
                last += 1
                nums[last] = nums[i]
        return last + 1


if __name__ == '__main__':
    arr1 = [1, 1, 2]
    print(Solution().removeDuplicates2(arr1))  # 2
    arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    # print(Solution().removeDuplicates(arr2))  # 5
    n = Solution().removeDuplicates2(arr2)
    print(n)
    for i in range(n):
        print(arr2[i], end=' ')
