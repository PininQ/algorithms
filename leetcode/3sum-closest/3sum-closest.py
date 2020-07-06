class Solution:
    # 执行用时：52 ms
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        # 先排好序，便于比较
        nums.sort()
        length = len(nums)
        closest = []
        # 这里采用固定第一个最小数，从之后的数中的两端开始
        for i, num in enumerate(nums[0:-2]):
            # i之后的列表中，第一个和最后一个数的索引
            l, r = i + 1, length - 1
            # 固定的数加上最大的两个数小于目标值
            if num + nums[r] + nums[r - 1] < target:
                # 将最接近target的数写入列表
                closest.append(num + nums[r] + nums[r - 1])
            # 固定的数加上最小的两个数大于目标值
            elif num + nums[l] + nums[l + 1] > target:
                # 将最接近target的数写入列表
                closest.append(num + nums[l] + nums[l + 1])
            else:
                # 当 l<r ，即两个索引还未相遇，继续执行
                while l < r:
                    closest.append(num + nums[l] + nums[r])
                    if num + nums[l] + nums[r] < target:
                        # 如果小于目标值，左边索引后移一位
                        l += 1
                    elif num + nums[l] + nums[r] > target:
                        # 如果大于目标值，右边索引前移一位
                        r -= 1
                    else:
                        # 刚好等于，根据题意，只有一个解，所以直接返回
                        return target
        # 将所有与target值接近的情况求差的绝对值再排序
        closest.sort(key=lambda x: abs(x - target))
        # 第一个便是最接近target的三数之和
        return closest[0]


if __name__ == '__main__':
    nums = [-1, 2, 1, -4]
    target = 1
    print(Solution().threeSumClosest(nums, target))