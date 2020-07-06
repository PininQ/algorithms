class Solution:
    # 执行用时：44 ms
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        # 数字字符串为空时
        if not digits:
            return []
        res = ['']
        dict_str = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        # 依次遍历数字字符串
        for digit in digits:
            # 初始化一个临时的列表
            temp = []
            # res存放前面已经处理的数字字符
            for char in dict_str[digit]:
                # 将数字字符对应的字符串拼接到前面已有的res中
                temp += [x + char for x in res]
                # print(temp)
            # 将处理好的前面部分存放于res，并继续处理后面字符
            res = temp
        return res

    # 大佬的思路：执行用时：44 ms
    def letterCombinations2(self, digits):
        dict_str = {
            '2': [i for i in "abc"],
            '3': [i for i in 'def'],
            '4': [i for i in "ghi"],
            '5': [i for i in 'jkl'],
            '6': [i for i in "mno"],
            '7': [i for i in 'pqrs'],
            '8': [i for i in "tuv"],
            '9': [i for i in 'wxyz'],
        }

        def helper(digits, comb=""):
            if len(digits) > 0:
                for i in dict_str[digits[0]]:
                    yield from helper(digits[1:], comb + i)
            else:
                yield comb

        return list(helper(digits)) if digits != "" else []

    # 大佬的思路：执行用时：44 ms
    def letterCombinations3(self, digits):
        if not digits:
            return []
        ls = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
        res = [""]
        for digit in reversed(digits):
            choices = ls[int(digit)]
            m, n = len(choices), len(res)
            res += [res[i % n] for i in range(n, m * n)]
            for i in range(m * n):
                res[i] = choices[i // n] + res[i]
        return res

    # 递归：执行用时：52 ms
    def letterCombinations4(self, digits):
        # 数字字符串为空时
        if not digits:
            return []
        res = []
        dict_str = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        # 递归出口，当递归到最后一个数的时候res拿到结果进行for循环遍历
        if len(digits) == 1:
            return list(dict_str[digits[0]])
        # 递归调用
        temp = self.letterCombinations4(digits[1:])
        # res是一个数组列表，遍历后字符串操作，添加到列表
        for i in temp:
            for j in dict_str[digits[0]]:
                res.append(j + i)
        return res

    # 巧用列表推导式：执行用时：44 ms
    def letterCombinations5(self, digits):
        if not digits:
            return []
        dict_str = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        res = [i for i in dict_str[digits[0]]]
        for i in digits[1:]:
            res = [m + n for m in res for n in dict_str[i]]
        return res


if __name__ == '__main__':
    # ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
    print(Solution().letterCombinations5("23"))
