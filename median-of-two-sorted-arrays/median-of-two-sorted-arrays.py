class Solution:
    # 执行用时：140 ms
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        nums1.extend(nums2)
        nums1.sort()
        mid = len(nums1) // 2
        if len(nums1) % 2 != 0:
            return nums1[mid]
        return (nums1[mid - 1] + nums1[mid]) / 2

    # 执行用时：160 ms
    def findMedianSortedArrays2(self, nums1, nums2):
        len1, len2 = len(nums1), len(nums2)
        # 创建一个列表用于存储 nums1 和 nums2 中的元素值
        res = [0] * (len1 + len2)
        # 指定三个列表的索引初始值为 0
        li, ri, i = 0, 0, 0
        # 循环比较两个列表中的元素，并将较小值放入新列表中，同时较小值的列表和新列表的索引加一
        while li < len1 and ri < len2:
            if nums1[li] < nums2[ri]:
                res[i] = nums1[li]
                li += 1
            else:
                res[i] = nums2[ri]
                ri += 1
            i += 1
        # 当存在某一个列表的元素已全部放入了新列表
        # 将剩下的另一个列表中的元素直接放入新列表当前索引位置
        if li != len1:
            res[i:] = nums1[li:]
        else:
            res[i:] = nums2[ri:]
        mid = len(res) // 2
        if len(res) % 2 != 0:
            return res[mid]
        return (res[mid - 1] + res[mid]) / 2


if __name__ == '__main__':
    nums1 = [1, 3]
    nums2 = [2]
    print(Solution().findMedianSortedArrays2(nums1, nums2))
    nums3 = [1, 2]
    nums4 = [3, 4]
    print(Solution().findMedianSortedArrays2(nums3, nums4))
