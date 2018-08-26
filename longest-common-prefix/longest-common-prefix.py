class Solution:
    # 执行用时：56 ms
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        # 特殊情况：字符串列表长度为 0 或者 1
        if len(strs) == 0:
            return ''
        if len(strs) == 1:
            return strs[0]
        # 列表长度，列表中字符串长度最小的字符串的长度
        str_len, min_len = len(strs), len(strs[0])
        for i in strs[1:]:
            if min_len > len(i):
                min_len = len(i)
        # 另一种方式求 min_len
        # min_len = min([len(i) for i in strs])
        for i in range(min_len):
            for j in range(1, str_len):
                # 当遇到字符串不同，则到这里已经是最长共同前缀字符串
                if strs[0][i] != strs[j][i]:
                    return strs[0][:i]
        return strs[0][:min_len]

    # 执行用时：72 ms
    def longestCommonPrefix2(self, strs):
        import re
        if not strs:
            return ''
        # 初始化列表中的第一个字符串为匹配模式
        prefix = strs[0]
        for i in range(1, len(strs)):
            match = re.match(prefix, strs[i])
            while not match:
                # 没有匹配，则将模式后边依次去除一个字符
                prefix = prefix[:-1]
                match = re.match(prefix, strs[i])
        return prefix

    # 执行用时：60 ms
    def longestCommonPrefix3(self, strs):
        if not strs:
            return ''
        for i in range(len(strs[0])):
            for string in strs[1:]:
                if i >= len(string) or string[i] != strs[0][i]:
                    return strs[0][:i]
        return strs[0]


if __name__ == '__main__':
    str1 = ["flower", "flow", "flight"]
    # print(Solution().longestCommonPrefix3(str1))  # "fl"
    str2 = ["dog", "racecar", "car"]
    # print(Solution().longestCommonPrefix3(str2))  # ""
    str3 = ["aa", "a"]
    print(Solution().longestCommonPrefix3(str3))  # "a"
