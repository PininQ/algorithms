def phi(x):
    if x == 1:
        return 1
    i = 2
    ans = m = x
    while i * i <= m:  # i * i 降低时间复杂度 m >= sqrt(m)
        if x % i == 0:
            ans = int(ans / i * (i - 1))  # 先进行除法是为了防止中间数据的溢出
            while x % i == 0:
                x /= i  # 保证 i 一定是素数
        i += 1
    if x > 1:  # 因为是遍历到sqrt(n)，所以可能存在未除尽或者n本身就为质数的情况
        ans = ans / x * (x - 1)
    return ans


n = input()
print(int(phi(int(n))))
