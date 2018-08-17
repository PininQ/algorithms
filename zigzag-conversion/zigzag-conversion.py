class Solution:
    # 执行用时：160 ms
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        s_len = len(s)
        # 两列之间的间距
        row_diff = 2 * numRows - 2
        res = ''
        # 特殊情况处理，字符串长度为空和行数小于 2
        if s_len == 0 or numRows < 2:
            return s
        # 从第一行遍历到最后一行
        for i in range(numRows):
            # 每行遍历对应字符
            for j in range(i, s_len, row_diff):
                # 第一行和最后一行之间连续的字符
                res += s[j]
                # 第一行和最后一行之间不连续的字符，也就是斜的那部分，属于第 j - 2 * i + row_diff 行
                if i != 0 and i != numRows - 1 and j - 2 * i + row_diff < s_len:
                    # 只有一个字符的列
                    res += s[j - 2 * i + row_diff]
        return res

    # 简化一下，执行用时：152 ms
    def convert2(self, s, numRows):
        diff, res, n = 2 * (numRows - 1), "", len(s)
        if n == 0 or numRows < 2:
            return s
        for i in range(numRows):
            for j in range(i, n, diff):
                res += s[j]
                if 0 < i < numRows - 1:
                    index = j - 2 * i + diff
                    if index < n:
                        res += s[index]
        return res


if __name__ == '__main__':
    s = "ABCDEFGHIJKLM"
    numRows = 4
    print(Solution().convert2(s, numRows))  # 输出: "AGMBFHLCEIKDJ"
    print(Solution().convert2(s, numRows) == "AGMBFHLCEIKDJ")

    s = "PAYPALISHIRING"
    numRows = 4
    print(Solution().convert2(s, numRows))  # 输出: "PINALSIGYAHRPI"
