class Solution:
    def judgeSquareSum(self, c):
        """
        :type c: int
        :rtype: bool
        """
        if c == 0:
            return True
        for i in range(int(c**0.5) + 1):
            num = c - i * i
            if int(num**0.5) == num**0.5:
                return True
        return False

    def judgeSquareSum2(self, c: int) -> bool:
        l, r = 0, int(c**0.5) + 1
        while l <= r:
            rst = l * l + r * r
            if rst == c:
                return True
            elif rst < c:
                l += 1
            elif rst > c:
                r -= 1
        return False