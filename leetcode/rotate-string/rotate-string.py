class Solution:
    def rotateString(self, A: str, B: str) -> bool:
        return len(A) == len(B) and B in A + A

    # 如果一个字符串是由另一个串旋转得到的，那么新串一定是2*原串的的子串，大家可以手画
    # 一下，我们现在就判断新串是不是2*原串的子串就行。
    # 这样我们就学会了判断一个串是不是另一个串的子串
    # 知道这个之后，再去想一下，怎么判断一个串是不是另一个串的子序列。这样我们就
    # 收获了两个方法。而不是用什么A==B，A.contains(B),A in B,A.find(B)
    def rotateString2(self, A: str, B: str) -> bool:
        if len(A) != len(B):
            return False
        if not A and not B:
            return True
        str_all = A * 2
        return self.substr(B, str_all)

    # 判断一个串是不是另一个串的子串
    def substr(self, s1, s2):
        s1_len = len(s1)
        s2_len = len(s2)
        index = 0
        for i in range(s2_len):
            if s2[i] == s1[index]:
                index += 1
                if index == s1_len:
                    return True
            else:
                index = 0
                if s2[i] == s1[index]:
                    index += 1
        return False
