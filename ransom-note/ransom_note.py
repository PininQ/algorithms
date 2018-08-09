class Solution:
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        ran = len(ransomNote)
        mag = len(magazine)
        if ran > mag or ran == 0:
            return False
        for each in list(set(ransomNote)):
            if ransomNote.count(each) > magazine.count(each):
                return False
        return True


print(Solution().canConstruct('aa', 'ab'))