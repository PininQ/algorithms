class Solution:
    # 执行用时: 44 ms
    def findTheDifference(self, s, t):
        '''
        :type s: str
        :type t: str
        :rtype: str
        '''
        for i in range(len(t)):
            if t.count(t[i]) != s.count(t[i]):
                return t[i]

    # 执行用时: 48 ms
    def findTheDifference2(self, s, t):
        result = 0
        for i in range(len(s)):
            result ^= ord(s[i]) - 97
        for i in range(len(t)):
            result ^= ord(t[i]) - 97  # ord 将字符转化为对应的数字
        return chr(result + 97)  # chr 将对应的数字转换为字母

    # 执行用时: 44 ms
    def findTheDifference3(self, s, t):
        sums = 0
        sumt = 0
        for s1 in s:
            sums += ord(s1)
        for t1 in t:
            sumt += ord(t1)
        return chr(sumt - sums)

    # 执行用时: 44 ms
    def findTheDifference4(self, s, t):
        res = 0
        for i in s + t:
            res ^= ord(i)
        return chr(res)


if __name__ == "__main__":
    print(Solution().findTheDifference2("abcd", "abcde"))
