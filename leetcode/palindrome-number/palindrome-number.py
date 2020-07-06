class Solution:
    # 执行用时：296 ms /战胜 97.78 %
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        return int(str(x)[::-1]) == x

    # 执行用时：412 ms
    def isPalindrome2(self, x):
        temp = x
        res = 0
        while temp > 0:
            res = res * 10 + temp % 10
            temp //= 10
        return res == x

    # 执行用时：476 ms
    def isPalindrome3(self, x):
        if x < 0:
            return False
        temp, res = x, 0
        while temp:
            res = res * 10 + temp % 10
            temp //= 10
        return res == x


if __name__ == '__main__':
    print(Solution().isPalindrome3(123))
    print(Solution().isPalindrome3(121))
    print(Solution().isPalindrome3(-121))