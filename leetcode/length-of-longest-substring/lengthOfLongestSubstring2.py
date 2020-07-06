'''
方法二：利用字典的方法
执行用时：92 ms
'''


class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        # 创建一个空字典
        indexDict = {}
        # 存放记录最大长度和当前循环下的长度
        max_len = cur_len = 0
        for i in range(len(s)):
            # 当出现了重复字符，则比较当前找到子字符串和最大字符串的长度
            if s[i] in indexDict and i - indexDict[s[i]] - 1 <= cur_len:
                if max_len < cur_len:
                    max_len = cur_len
                # 当前找到子字符串的长度
                cur_len = i - indexDict[s[i]] - 1
            # 当 s[i] 没有在之前出现过，则当前长度 cur_len 加一
            cur_len = cur_len + 1
            indexDict[s[i]] = i
        return max_len if cur_len < max_len else cur_len


if __name__ == '__main__':
    print(Solution().lengthOfLongestSubstring('abcabcbb'))