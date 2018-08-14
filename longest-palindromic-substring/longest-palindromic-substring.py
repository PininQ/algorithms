class Solution:
    # 执行用时：1680 ms
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        # 字符串长度为 1 的直接返回
        if len(s) < 2:
            return s
        # 定义待返回的字符串
        res = ''

        def func(s, li, ri):
            nonlocal res
            # 判断当前回文子串两端相同的情况，向两端拓展
            while li >= 0 and ri < len(s) and s[li] == s[ri]:
                li -= 1
                ri += 1
            # 如果当前回文子串长度大于历史最大长度，则更新待返回字符串
            if ri - li - 1 > len(res):
                res = s[li + 1:ri]
            return res

        for i in range(len(s)):
            # 从同一个字符向两端拓展的情况
            func(s, i, i)
            # 从相邻两个字符串向两端拓展的情况
            func(s, i, i + 1)
        return res

    # 执行用时：80 ms
    def longestPalindrome2(self, s):
        # 如果字符串长度小于 2 或者 s 等于它的倒序，则直接返回 s
        if len(s) < 2 or s == s[::-1]:
            return s
        n = len(s)
        # 定义起始索引和最大回文串长度，odd 奇，even 偶
        start, maxlen = 0, 1
        # 因为 i=0 的话必然是不可能会有超过 maxlen 的情况出现，索引直接从 1 开始
        for i in range(1, n):
            # 取 i及 i 前面的 maxlen+2 个字符
            odd = s[i - maxlen - 1:i + 1]  # len(odd)=maxlen+2
            # 取 i 及 i 前面 maxlen+1 个字符
            even = s[i - maxlen:i + 1]  # len(even)=maxlen+1
            if i - maxlen - 1 >= 0 and odd == odd[::-1]:
                start = i - maxlen - 1
                maxlen += 2
            if i - maxlen >= 0 and even == even[::-1]:
                start = i - maxlen
                maxlen += 1
        return s[start:start + maxlen]

    # 执行用时：96 ms
    def longestPalindrome3(self, s):
        n = len(s)
        maxlen = 0
        start = 0
        for i in range(n):
            if i - maxlen >= 1 and s[i - maxlen - 1:i + 1] == s[i - maxlen - 1:i + 1][::-1]:
                start = i - maxlen - 1
                maxlen += 2
                continue
            if i - maxlen >= 0 and s[i - maxlen:i + 1] == s[i - maxlen:i + 1][::-1]:
                start = i - maxlen
                maxlen += 1
        return s[start:start + maxlen]


if __name__ == '__main__':
    print(Solution().longestPalindrome3("babad"))  # bab 或者 aba
    print(Solution().longestPalindrome3("cbbd"))  # bb
