class Solution:
    # 二分查找
    def isPerfectSquare(self, num: int) -> bool:
        left, right = 1, num
        while 0 < 1:
            mid = (right + left) // 2
            if num < mid**2:
                right = mid
            elif num > mid**2:
                left = mid
            else:
                return True
            if right - left <= 1:
                return False

    # 牛顿近似法
    def isPerfectSquare2(self, num):
        ret = 1
        for i in range(1000):
            ret = (ret + num / ret) // 2
            if ret**2 == num:
                return True
        return False
