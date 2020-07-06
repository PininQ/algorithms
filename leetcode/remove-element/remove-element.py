class Solution:
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        if not nums:
            return 0
        length = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[length] = nums[i]
                length += 1
        return length

    # 执行用时：48 ms
    def removeElement2(self, nums, val):
        length, n, i = 0, len(nums), 0
        while i < n:
            if nums[length] == val:
                del nums[length]
            else:
                length = length + 1
            i += 1
        return length

    # 执行用时：48 ms
    def removeElement3(self, nums, val):
        while val in nums:
            nums.remove(val)
        return len(nums)


if __name__ == '__main__':
    arr1, val1 = [4, 4, 0, 1, 0, 2], 0
    # print(Solution().removeElement(arr1, val1))
    arr2, val2 = [0, 1, 2, 2, 3, 0, 4, 2], 2
    n = Solution().removeElement3(arr1, val1)
    print(n)
    for i in range(n):
        print(arr1[i], end=', ')
