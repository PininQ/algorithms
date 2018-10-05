class Solution:
    # 执行用时：240 ms
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """

        # 子函数（递归），生成括号序列
        def generate(A=[]):
            # 如果生成的括号序列长度为 2n，则判断是否有效
            if len(A) == 2 * n:
                if valid(A):
                    # 有效括号序列添加进 res
                    res.append("".join(A))
            # 如果括号序列长度未达到 2n，则通过递归调用 generate 生成
            else:
                A.append('(')
                generate(A)
                # 如果无效则将上一个括号移除
                A.pop()
                A.append(')')
                generate(A)
                A.pop()

        # 判断生成的括号序列是否有效
        def valid(A):
            bal = 0
            for ch in A:
                if ch == '(':
                    bal += 1
                else:
                    bal -= 1
                if bal < 0:
                    return False
            return bal == 0

        # 定义一个空列表存储括号序列
        res = []
        generate()
        return res

    # 执行用时：60 ms
    def generateParenthesis2(self, n):
        # 递归，当当前括号字符序列仍然保持有效时才添加 '(' or ')' 到 res 中
        # s 为当前括号序列，left 为 左括号数量，right 为右括号数量
        def backrack(s, left, right):
            if len(s) == 2 * n:
                res.append(s)
                return
            # 控制左右括号数量生成有效括号序列
            if left < n:
                backrack(s + '(', left + 1, right)
            if left > right:
                backrack(s + ')', left, right + 1)

        res = []
        backrack('', 0, 0)
        return res

    # 执行用时：60 ms
    def generateParenthesis3(self, n):
        def generate(result, current, left, right):
            if left == 0 and right == 0:
                result.append(current)
            if left > 0:
                generate(result, current + '(', left - 1, right)
            if left < right:
                generate(result, current + ')', left, right - 1)

        res = []
        generate(res, "", n, n)
        return res


if __name__ == '__main__':
    # ['((()))', '(()())', '(())()', '()(())', '()()()']
    print(Solution().generateParenthesis3(3))
