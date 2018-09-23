class Solution:
    # 执行用时：48 ms
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # 定义一个空列表（栈）
        stack = []
        for cur in s:
            # 左括号入栈
            if cur in ['(', '{', '[']:
                stack.append(cur)
            # 只有右括号的情况，直接返回 False
            elif not stack:
                return False
            # 匹配到右括号则出栈
            elif cur == ')' and stack[len(stack) - 1] == '(':
                stack.pop()
            elif cur == '}' and stack[len(stack) - 1] == '{':
                stack.pop()
            elif cur == ']' and stack[len(stack) - 1] == '[':
                stack.pop()
            # 当前括号与栈顶括号不匹配
            else:
                return False
        return stack == []

    # 左括号入栈，遇到右括号出栈，其它字符忽略
    # 执行用时：44 ms
    def isValid2(self, s):
        # 定义字典和空列表（栈）
        dict1, stack = {'(': ')', '{': '}', '[': ']'}, []
        for cur in s:
            if cur in dict1.keys():
                stack.append(cur)
            elif cur in dict1.values():
                # 此时 栈为空 或者 栈顶元素与当前字符不等，则返回 False
                if len(stack) == 0 or dict1.get(stack[-1]) != cur:
                    return False
                # 否则，弹出栈顶的元素
                stack.pop()
        return stack == []

    # 循环替换 () / {} / [] 为 ''
    # 执行用时：64 ms
    def isValid3(self, s):
        # 特殊情况：空字符串
        if s == '':
            return True
        # 特殊情况：字符串长度为奇数
        if len(s) % 2 == 1:
            return False
        # 将成对的可匹配括号用 "" 进行替换
        while '()' in s or '{}' in s or '[]' in s:
            s = s.replace('()', '').replace('{}', '').replace('[]', '')
        return s == ''


if __name__ == '__main__':
    print(Solution().isValid("()"))  # true
    print(Solution().isValid("()[]{}"))  # true
    print(Solution().isValid("(]"))  # false
    print(Solution().isValid("([)]"))  # false
    print(Solution().isValid("{[]}"))  # true
