# 直接求解欧拉函数
def phi(n):
    ans = x = n
    i = 2
    while i * i <= n:  # i * i 降低时间复杂度
        if x % i == 0:
            ans = int(ans / i * (i - 1))  # 先进行除法是为了防止中间数据的溢出
            while x % i == 0:
                x /= i  # 保证 x 一定是素数
        i += 1
    if x > 1:  # 因为是遍历到sqrt(x)，所以可能存在未除尽或者x本身就为质数的情况
        ans = ans / x * (x - 1)
    return int(ans)


n = int(input())
print(phi(n))
