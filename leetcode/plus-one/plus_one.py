class Solution:
    # 执行用时：48 ms
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        # 进位
        carry = 0
        for i in range(len(digits) - 1, -1, -1):
            # 低位加一
            digits[i] += 1
            carry = digits[i] // 10
            # 如果进位为 0，直接返回低位加一后的列表
            if carry == 0:
                break
            digits[i] %= 10
        if carry == 0:
            return digits
        # 进位不为 0，则高位加一
        digits.insert(0, 1)
        return digits

    # 执行用时：56 ms
    def plusOne2(self, digits):
        """
        1. 从最后一位开始运算，
        2. 如果遇到小于 9 的数字，直接加一，返回结果。
        3. 如果等于 9，该位数字置为 0，继续下一次判断，重复 2~3 步骤。
        4. 最后所有位置都为 0 ，在首位 加 1。
        """
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        digits.insert(0, 1)
        return digits

    # 执行用时：64 ms
    def plusOne3(self, digits):
        digits = digits[::-1]
        # 进位，索引位置，列表长度
        car, i, dig_len = 1, 0, len(digits)
        while car > 0:
            if i < dig_len:
                temp = digits[i] + car
                digits[i] = temp % 10
                car = temp // 10
            else:
                digits.append(car)
                car = 0
            i += 1
        return digits[::-1]


if __name__ == '__main__':
    print(Solution().plusOne3([1, 2, 3]))  # [1,2,4]
    print(Solution().plusOne3([4, 3, 2, 1]))  # [4,3,2,2]
    print(Solution().plusOne3([9]))  # [1,0]
