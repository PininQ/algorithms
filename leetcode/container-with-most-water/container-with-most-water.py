class Solution:
    # 执行用时：120 ms
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        maxArea, i, j = 0, 0, len(height) - 1
        while i < j:
            maxArea = max(maxArea, min(height[i], height[j]) * (j - i))
            if height[i] < height[j]:
                i += 1
            else:
                j -= 1
        return maxArea


if __name__ == '__main__':
    # 49
    print(Solution().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
