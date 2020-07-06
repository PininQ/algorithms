'''
验证回文串
476 / 476 个通过测试用例
状态：通过
执行用时：112 ms
'''


class Solution:
    # 112 ms
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        s = s.lower()
        st = ''
        for i in range(len(s)):
            if s[i] >= 'a' and s[i] <= 'z' or s[i] >= '0' and s[i] <= '9':
                st += s[i]
        rev_s = st[::-1]
        for s1 in range(len(st) // 2):
            if st[s1] != rev_s[s1]:
                return False
        return True

    # 136 ms
    def isPalindrome2(self, s):
        i, j = 0, len(s) - 1
        while i < j:
            while i < j and not s[i].isalnum():
                i += 1
            while i < j and not s[j].isalnum():
                j -= 1
            if s[i].lower() != s[j].lower():
                return False
            i, j = i + 1, j - 1
        return True

    # 108 ms
    def isPalindrome3(self, s):
        left = 0
        right = len(s) - 1
        while left < right:
            if not s[left].isalnum():
                left += 1
                continue
            if not s[right].isalnum():
                right -= 1
                continue
            if s[left].lower() != s[right].lower():
                return False
            else:
                left += 1
                right -= 1
        return True

    # 116 ms
    def isPalindrome4(self, s):
        s_filter = ''.join(filter(str.isalnum, s)).lower()
        return s_filter == s_filter[::-1]



if __name__ == '__main__':
    print(Solution().isPalindrome4("A man, a plan, a canal: Panama"))  # True
    print(Solution().isPalindrome4("race a car"))  # False
