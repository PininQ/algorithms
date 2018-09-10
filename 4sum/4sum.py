class Solution:
    # 执行用时：1304 ms
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        res = []
        nums.sort()
        n = len(nums)
        for i in range(n - 3):
            for j in range(i + 1, n - 2):
                l, r = j + 1, n - 1
                while l < r:
                    temp = nums[i] + nums[j] + nums[l] + nums[r]
                    if temp < target:
                        l += 1
                    elif temp > target:
                        r -= 1
                    else:
                        if [nums[i], nums[j], nums[l], nums[r]] not in res:
                            res.append([nums[i], nums[j], nums[l], nums[r]])
                        l, r = l + 1, r - 1
        return res

    # 在上面的基础上加判断条件，前后数字相等可以直接跳过
    # 执行用时：1252 ms
    def fourSum2(self, nums, target):
        nums.sort()
        n, res = len(nums), []
        for i in range(n - 3):
            # 因为 i=0 这个元素会往下执行
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            for j in range(i + 1, n - 2):
                # 因为 j=i+1 这个元素会往下执行
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                l, r = j + 1, n - 1
                while l < r:
                    temp = nums[i] + nums[j] + nums[l] + nums[r]
                    if temp < target:
                        l += 1
                    elif temp > target:
                        r -= 1
                    else:
                        if [nums[i], nums[j], nums[l], nums[r]] not in res:
                            res.append([nums[i], nums[j], nums[l], nums[r]])
                        l, r = l + 1, r - 1
        return res

    # 改进，在上面的基础上加判断条件
    # 执行用时：128 ms
    def fourSum3(self, nums, target):
        nums.sort()
        n, res = len(nums), []
        for i in range(n - 3):
            # 因为 i=0 这个元素会往下执行
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            # 这是当前能凑齐的最小的 4 个数，比 target 大，后面都不用做了
            if nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target:
                break
            # 这是当前能凑齐的最大的 4 个数，比 target 小，说明第一个数不够大
            if nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target:
                continue
            for j in range(i + 1, n - 2):
                # 因为 j=i+1 这个元素会往下执行
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                if nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target:
                    break
                if nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target:
                    continue
                l, r = j + 1, n - 1
                while l < r:
                    temp = nums[i] + nums[j] + nums[l] + nums[r]
                    if temp < target:
                        l += 1
                    elif temp > target:
                        r -= 1
                    else:
                        if [nums[i], nums[j], nums[l], nums[r]] not in res:
                            res.append([nums[i], nums[j], nums[l], nums[r]])
                        l, r = l + 1, r - 1
        return res

    # 大佬的做法，利用递归解决 n数之和 的问题
    # 将 n数之和 降低为一个数加上 n-1 数之和的问题（递归），边界为 二数之和
    # 执行用时：124 ms
    def fourSum4(self, nums, target):
        def nSum(nums, target, n, result, results):
            if len(nums) < n or n < 2 or n * nums[0] > target or n * nums[-1] < target:
                return []
            if n == 2:
                begin, end = 0, len(nums) - 1
                while begin < end:
                    sums = nums[begin] + nums[end]
                    if sums < target:
                        begin += 1
                    elif sums > target:
                        end -= 1
                    else:
                        plet = [nums[begin], nums[end]]
                        results.append(result + plet)
                        while begin < end and nums[begin] == plet[0]:
                            begin += 1
                        while begin < end and nums[end] == plet[1]:
                            end -= 1
            else:
                for i in range(len(nums) - n + 1):
                    if (i > 0 and nums[i] == nums[i - 1]) or (nums[i] + (n - 1) * nums[len(nums) - 1] < target):
                        continue
                    if n * nums[i] == target and i + n - 1 < len(nums) and nums[i + n - 1] == nums[i]:
                        plet = [nums[i]] * n
                        results.append(result + plet)
                        break
                    nSum(nums[i + 1:], target - nums[i], n - 1, result + [nums[i]], results)

        results = []
        nums.sort()
        nSum(nums, target, 4, [], results)
        return results


if __name__ == '__main__':
    nums = [1, 0, -1, 0, -2, 2]
    target = 0
    print(Solution().fourSum4(nums, target))