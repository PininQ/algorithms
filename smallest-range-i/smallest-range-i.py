class Solution(object):
    def smallestRangeI(self, A, K):
        """
        :type A: List[int]
        :type K: int
        :rtype: int
        """
        a = max(A)
        b = min(A)
        if a - b <= 2 * K:
            return 0
        else:
            return a - b - 2 * K

    def smallestRangeI2(self, A, K):
        result = max(A) - min(A) - 2 * K
        if result >= 0:
            return result
        else:
            return 0
