class Solution(object):
    # 执行用时：184 ms
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        res = ''
        # 从大到小依次处理，几个关键位置分别是：
        # 1000；900；500；400；100；90；50；40；10；9；5；4；1
        while num > 0:
            if num >= 1000:
                res += 'M'
                num -= 1000
            elif num >= 900:
                res += 'CM'
                num -= 900
            elif num >= 500:
                res += 'D'
                num -= 500
            elif num >= 400:
                res += 'CD'
                num -= 400
            elif num >= 100:
                res += 'C'
                num -= 100
            elif num >= 90:
                res += 'XC'
                num -= 90
            elif num >= 50:
                res += 'L'
                num -= 50
            elif num >= 40:
                res += 'XL'
                num -= 40
            elif num >= 10:
                res += 'X'
                num -= 10
            elif num >= 9:
                res += 'IX'
                num -= 9
            elif num >= 5:
                res += 'V'
                num -= 5
            elif num >= 4:
                res += 'IV'
                num -= 4
            elif num >= 1:
                res += 'I'
                num -= 1
        return res

    # 执行用时：136 ms
    def intToRoman2(self, num):
        romans = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", 'LXXX', "XC"],
                  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC",
                   "CM"], ["", "M", "MM", "MMM"]]
        res = ''
        level = 0
        while num > 0:
            ret = num % 10
            res = romans[level][ret] + res
            level += 1
            num //= 10
        return res


if __name__ == '__main__':
    print(Solution().intToRoman2(4))  # "IV"
    print(Solution().intToRoman2(9))  # "IX"
    print(Solution().intToRoman2(58))  # "LVIII"
    print(Solution().intToRoman2(1994))  # "MCMXCIV"
