'''
只需考虑两种情况：
第一，如果当前数字是最后一个数字，或者之后的数字比它小的话，则加上当前数字
第二，其他情况则减去这个数字

3999 / 3999 个通过测试用例
状态：通过
'''


class Solution:
    # 执行用时：260 ms
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        res = 0
        for i in range(len(s)):
            val = roman[s[i]]
            if i == len(s) - 1 or roman[s[i + 1]] <= roman[s[i]]:
                res += val
            else:
                res -= val
        return res

    # 执行用时：216 ms
    def romanToInt2(self, s):
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        res = 0
        for i in range(len(s)):
            # 每次跟前面的数字比较，如果 <= 前面的数字，则先加上当前的数字
            if i == 0 or roman[s[i]] <= roman[s[i - 1]]:
                res += roman[s[i]]
            else:
                # 如果 > 的前面的数字，则加上当前的数字再减去 2 倍前面的数字
                # 可以把在上一个循环多加数减掉
                res += roman[s[i]] - 2 * roman[s[i - 1]]
        return res

    # 执行用时：152 ms
    def romanToInt3(self, s):
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        res = 0
        for i in range(len(s)):
            if i > 0 and roman[s[i]] > roman[s[i - 1]]:
                res += roman[s[i]] - 2 * roman[s[i - 1]]
            else:
                res += roman[s[i]]
        return res


if __name__ == '__main__':

    print(Solution().romanToInt3("III"))  # 3
    print(Solution().romanToInt3("MCMXCIV"))  # 1994