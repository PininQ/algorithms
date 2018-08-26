class Solution:
    # 执行出错，Line 28: ValueError: invalid literal for int() with base 10: ''
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        res, mark = '', 1
        temp = str.strip()
        # 字符串为 ''
        if temp is '':
            return 0
        # 处理第 0 个非空字符
        if temp[0] is '-':
            mark = -1
        elif '0' <= temp[0] <= '9':
            res += temp[0]
        else:
            return 0
        # 遍历字符
        for i in temp[1:]:
            if '0' <= i <= '9':
                res += i
            if mark == -1 and int(res) >= 2**31:
                return -2**31
            if mark == 1 and int(res) >= 2**31 - 1:
                return 2**31 - 1
        return mark * int(res)

    # 执行用时：72 ms(直接用整数处理，没有报错)
    def myAtoi2(self, str):
        res, mark = 0, 1
        temp = str.strip()
        if temp is '':
            return 0
        if temp[0] is '-':
            mark = -1
        elif temp[0] is '+':
            mark = 1
        elif '0' <= temp[0] <= '9':
            res += int(temp[0])
        else:
            return 0
        for i in temp[1:]:
            if '0' <= i <= '9':
                res = res * 10 + int(i)
                if mark == -1 and res >= 2**31:
                    return -2**31
                if mark == 1 and res >= 2**31 - 1:
                    return 2**31 - 1
            else:
                break
        return mark * res

    # 执行用时：72 ms
    def myAtoi3(self, str):
        res, mark, found = 0, 1, False
        for i in str.strip():
            if not found and i == "-":
                found = True
                mark = -1
            elif not found and i == "+":
                found = True
            # 判断字符是否为数字
            elif i.isdigit():
                found = True
                res = res * 10 + int(i)
                # 超出范围
                if res > 2**31 - 1 and mark == 1:
                    return 2**31 - 1
                if res > 2**31 and mark == -1:
                    return -2**31
            # 其他情况，首字符是字母等。跳出，返回 res=0
            else:
                break
        return mark * res


if __name__ == '__main__':
    print(Solution().myAtoi3("42"))  # 42
    print(Solution().myAtoi3("   -42"))  # -42
    print(Solution().myAtoi3("4193 with words"))  # 4193
    print(Solution().myAtoi3("words and 987"))  # 0
    print(Solution().myAtoi3("-91283472332"))  # -2147483648