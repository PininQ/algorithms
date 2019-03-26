class Solution:
    def distributeCandies(self, candies):
        """
        :type candies: List[int]
        :rtype: int
        """
        d = {}
        for item in candies:
            if item in d:
                d[item] += 1
            else:
                d[item] = 1

        res = sorted(list(d.values()))

        return min(len(res), len(candies) >> 1)

    def distributeCandies2(self, candies):
        a = len(list(set(candies)))
        b = len(candies)
        if a >= b / 2:
            return b / 2
        return a
