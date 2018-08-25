class Solution:
    # 执行用时：44 ms
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if needle is None:
            return 0
        hlen = len(haystack)
        nlen = len(needle)
        if nlen > hlen:
            return -1
        if needle in haystack:
            return haystack.index(needle)
        return -1

    # 执行用时：44 ms
    def strStr2(self, haystack, needle):
        hlen = len(haystack)
        nlen = len(needle)
        for i in range(hlen - nlen + 1):
            if haystack[i:i + nlen] == needle:
                return i
        return -1


if __name__ == '__main__':
    # 2
    print(Solution().strStr2("hello", "ll"))
    # -1
    print(Solution().strStr2("aaaaa", "bba"))
