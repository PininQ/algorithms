'''
分析：
1. <= 1 的数值直接返回 False
2. num 对 2 到 sqrt(num) 之间的整数求模，把求模结果为 0 的数和 num 除以这个数的值添加到 ans 里面
   例如：num % 4 == 0，ans = ans + 4 + num // 4
3. 最后 ans == num，则是完美数
'''


class Solution:
    # 超出时间限制
    def checkPerfectNumber(self, num):
        ans = 0
        for i in range(1, num):
            if num % i == 0:
                ans += i
        return ans == num

    # 执行用时：56 ms
    def checkPerfectNumber2(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 1:
            return False
        ans = 1
        sqrt_num = int(num**0.5)
        for i in range(2, sqrt_num + 1):
            if num % i == 0:
                ans += i + num // i
        # 使用列表推导式的方式
        # ans = sum(i + num // i for i in range(1, sqrt_num + 1) if num % i == 0)
        return ans == num

    # 执行用时：128 ms，换成  while 循环实现耗时增加了很多，range 这个有优势
    def checkPerfectNumber3(self, num):
        if num <= 1:
            return False
        ans = cur = 1
        while cur < int(num**0.5):
            cur += 1
            if num % cur == 0:
                ans += cur + num / cur
        return ans == num

    # 这种操作很是皮，在 1e8 内就这 5 个完美数
    # 执行用时：48 ms
    def checkPerfectNumber4(self, num):
        return num in [6, 28, 496, 8128, 33550336]


if __name__ == '__main__':
    print(Solution().checkPerfectNumber3(2))  # True
    print(Solution().checkPerfectNumber3(3))  # True
    print(Solution().checkPerfectNumber3(28))  # True
    print(Solution().checkPerfectNumber3(56200))  # False