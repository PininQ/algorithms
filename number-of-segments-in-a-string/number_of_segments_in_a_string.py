class Solution:
    # 执行用时：48 ms
    def countSegments(self, s):
        """
        :type s: str
        :rtype: int
        """
        if s is "" or set(s.split(' ')) == {''}:
            return 0
        return len([i for i in s.split(' ') if i != ''])

    # 字符串内建函数 strip() 删除开头或是结尾的空白字符
    # 执行用时：40 ms
    def countSegments2(self, s):
        return len([i for i in s.strip().split() if i])

    # split 默认分隔符为所有的空字符，包括空格、换行(\n)、制表符(\t)
    # 执行用时：44 ms
    def countSegments3(self, s):
        return len(s.split())

    # 执行用时：40 ms
    def countSegments4(self, s):
        ans = 0
        space_mode = True
        for i in s:
            if space_mode and i != ' ':
                ans += 1
                space_mode = False
            if not space_mode and i == ' ':
                space_mode = True
        return ans

    # 执行用时：44 ms
    def countSegments5(self, s):
        ans = 0
        for i in range(len(s)):
            if s[i] != ' ' and (i == 0 or s[i - 1] == ' '):
                ans += 1
        return ans


if __name__ == '__main__':
    print(Solution().countSegments5(""))  # 0
    print(Solution().countSegments5("Hello, my name is John"))  # 5
    print(Solution().countSegments5("Of all the gin joints in all the towns in all the world,"))  # 13
