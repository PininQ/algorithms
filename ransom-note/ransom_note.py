'''
126 / 126 个通过测试用例
状态：通过
执行用时：56 ms
'''


class Solution:
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        ran = len(ransomNote)
        mag = len(magazine)
        if ran > mag:
            return False
        if ran == 0:
            return True
        for each in list(set(ransomNote)):
            if ransomNote.count(each) > magazine.count(each):
                return False
        return True


print(Solution().canConstruct('aa', 'ab'))
print(Solution().canConstruct('aa', 'abba'))