class Solution:
    # 执行用时：44 ms
    def toLowerCase(self, str):
        """
        :type str: str
        :rtype: str
        """
        return str.lower()

    # 执行用时：44 ms
    def toLowerCase2(self, str):
        res = ''
        for each in range(len(str)):
            if 'A' <= str[each] <= 'Z':
                res += chr(ord('a') + ord(str[each]) - ord('A'))
            else:
                res += str[each]
        return res

    # 执行用时：40 ms
    def toLowerCase3(self, str):
        return ''.join([
            chr(ord('a') + ord(each) - ord('A')) if 'A' <= each <= 'Z' else each
            for each in str
        ])


if __name__ == '__main__':
    print(Solution().toLowerCase3("LOVELY"))
    print(Solution().toLowerCase3("hello"))
