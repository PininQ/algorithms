'''
可怜的小猪
这道题有点 dt，看了几遍也不知道怎么求解。
解题思路：n 维空间定义坐标的思想，一题目中描述的数据为例，每只猪在实验时间内可检测的数量是 60/15+1 = 5
（需要注意的是最后要 +1，如果喝了前面 4 桶猪没死的话，说明有毒的是这第五桶水）

如果两只猪进行试喝，水桶按二维排列。
1 号猪每 15 分钟喝一排，假设还活着，那就继续喝下一排，
2 号猪同样每 15 分钟喝一列，假设还活着继续试喝下一列。
找到有毒的 行 和 列 的交叉点，交叉点即为装有毒水的桶。
（1 号猪试喝 60/15+1 排水，2 号猪试喝 60/15+1 列水，所以两只猪能试喝 5的平方 = 25桶水）

如果三只猪进行试喝，水桶按三维排列，那三只猪能试喝 5 的三次幂 = 125桶水。

以此类推，x 只猪试喝，水桶按 x 维排列。结果是 x 的 x 次幂 = 5^x 桶水
'''


class Solution(object):
    # 执行用时：20 ms
    def poorPigs(self, buckets, minutesToDie, minutesToTest):
        """
        :type buckets: int
        :type minutesToDie: int
        :type minutesToTest: int
        :rtype: int
        """
        test_num = minutesToTest / minutesToDie + 1
        pig_num = 0
        while pow(test_num, pig_num) < buckets:
            pig_num += 1
        return pig_num


if __name__ == '__main__':
    print(Solution().poorPigs(1000, 15, 60))  # 3
