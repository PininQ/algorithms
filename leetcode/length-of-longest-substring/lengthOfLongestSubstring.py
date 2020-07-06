'''
方法一：暴力法
执行用时：968 ms
'''


class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        # 源字符串长度为 0 或 1 的情况
        if len(s) == 0 or len(s) == 1:
            return len(s)
        # 记录最长子字符串长度
        max_len = 0
        # 遍历每一个子字符串
        for i in range(0, len(s) - 1):
            for j in range(i + 1, len(s)):
                if s[j] in s[i:j]:
                    if j - i > max_len:
                        max_len = j - i
                    break
                elif j == len(s) - 1:
                    if max_len < j - i + 1:
                        max_len = j - i + 1
        return max_len


if __name__ == '__main__':
    print(Solution().lengthOfLongestSubstring('abcabcbb'))