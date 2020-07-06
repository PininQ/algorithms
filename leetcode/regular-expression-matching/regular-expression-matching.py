class Solution:
    # 执行用时：124 ms
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        import re
        # 利用 re.findall() 方法
        # return s in re.findall(p, s)

        # 利用 re.match() 方法
        return (re.match(p, s)) and (re.match(p, s).group(0) == s)

    # 执行用时：100 ms
    def isMatch2(self, s, p):
        """
        1. i = 0; j = 0 表示字符串 s 和 p 同时为空。此时返回 True
        dp[0][0] = True

        2. i = 0; j = 1 表示字符串 s 为空，p 为非空。此时返回 False
        dp[0][1] = False

        3. i >= 1; j = 0 表示字符串 s 为非空，p 为空。此时返回 False
        dp[i][0] = False

        4. i = 0; j >= 2 这时 dp[i][j] 可以与 dp[i][j-2] 联系
        dp[i][j] = dp[i][j-2] and p[j-1] == '*'

        5. 第五种情况，先根据 p[j-1] 是否等于 '*' 分为两类
            5.1 p[j-1] != '*' 时，利用递归，求 dp[i][j] 肯定已知 dp[i-1][j-1] 只需判断 s[i-1] 和
                p[j-1] 的关系

            5.2 p[j-1] == '*' 情况比较复杂。
                s[0:i-3] + s[i-2] + s[i-1]
                p[0:j-3] + p[j-2] + p[j-1]，'*' 表示 p[j-2] 的任意次

                dp[i][j] = dp[i][j-2] 的情况表示 s 与 p[0:j-3] 匹配
                dp[i][j] = dp[i-1][j] 的情况表示 s[j-1] 与 p 匹配，此时只要 p[j-2] == '.' 或
                p[j-2] == s[i-1] 即可
        """
        # dp[i][j] = true 表示长度为 i的s 和 j的p 匹配
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        # i = j = 0 时
        dp[0][0] = True
        # j = 0,i >= 1 时，默认为 false 可以省略
        for i in range(1, len(s) + 1):
            dp[i][0] = False
        # i = 0, j >= 2 时
        for j in range(1, len(p) + 1):
            dp[0][j] = dp[0][j - 2] and p[j - 1] == '*'
        # i >= 1, j >= 1 时
        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                # 对应第五类情况 p[j-1] 不为 "*" 的一类，下 else 相反
                if p[j - 1] != '*':
                    dp[i][j] = dp[i - 1][j - 1] and (p[j - 1] == '.'
                                                     or p[j - 1] == s[i - 1])
                else:
                    dp[i][j] = dp[i][j - 2] or (dp[i - 1][j] and
                                                (p[j - 2] == '.'
                                                 or p[j - 2] == s[i - 1]))
        return dp[-1][-1]

    # 大佬的做法，执行用时：72 ms
    def isMatch3(self, s, p):
        result = [[False for j in range(len(p) + 1)] for i in range(len(s) + 1)]

        result[0][0] = True
        for i in range(2, len(p) + 1):
            if p[i - 1] == '*':
                result[0][i] = result[0][i - 2]

        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j - 1] != '*':
                    result[i][j] = result[i - 1][j - 1] and (s[i - 1] == p[j - 1] or p[j - 1] == '.')
                else:
                    result[i][j] = result[i][j - 2] or (result[i - 1][j] and (s[i - 1] == p[j - 2] or p[j - 2] == '.'))

        return result[len(s)][len(p)]


if __name__ == '__main__':
    print(Solution().isMatch3('aa', 'a'))
    print(Solution().isMatch3('aa', 'a*'))
    print(Solution().isMatch3('ab', '.*'))
    print(Solution().isMatch3('aab', 'c*a*b'))
    print(Solution().isMatch3('mississippi', 'mis*is*p*.'))
    print(Solution().isMatch3("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*c"))
