## 1136 欧拉函数

> 基准时间限制：1 秒 空间限制：131072 KB 分值: 0 难度：基础题 收藏  关注

对正整数 n，欧拉函数是少于或等于 n 的数中与 n 互质的数的数目。此函数以其首名研究者欧拉命名，它又称为 Euler's totient function、φ函数、欧拉商数等。例如：φ(8) = 4（Phi(8) = 4），因为 1,3,5,7 均和 8 互质。
### Input
输入一个数 N。(2 <= N <= 10^9)
### Output
输出 Phi(n)。
### Input 示例
8
### Output 示例
4

### 题解

互质是公约数只有 1 的两个整数，叫做互质整数。 公约数只有 1 的两个自然数，叫做互质自然数，后者是前者的特殊情形。——by 百度百科

欧拉函数 PHI(n) 表示的是比 n 小，并且与 n 互质的正整数的个数 (包括 1)。
比如：PHI(1) = 1; PHI(2) = 1; PHI(3) = 2; PHI(4) = 2; ... PHI(9) = 6; ...

- 当 n = 1 时，phi(1) = 1。因为 1 与任何数（包括自身）都构成互质关系。
- 当 n 为质数时，phi(n) = n - 1。因为质数与小于它的每一个数，都构成互质关系。比如 7 与 1、2、3、4、5、6 都构成互质关系。
- 当 n 可以分解为互质的两个正整数，即 n = p1 × p2。则 phi(n) = phi(p1 × p2) = phi(p1) * phi(p2)。比如 phi(56) = phi(8×7) = phi(8)×phi(7) = 4×6 = 24
- 当 n 为奇数时，phi(2n) = phi(n)。比如 phi(2*23) = phi(46) = 22
- 计算公式 phi(n) = n * (1 - 1 / p1) \ * (1 - 1 / p2) * … * (1 - 1 / pk)。推算过程如下：

```
PHI(n) = (p1 ^ k1 - p1 ^ (k1 - 1)) * (p2 ^ k2 - p2 ^ (k2 - 1)) * ... * (pn ^ kn - pn ^ (kn - 1))
       = n*(p1-1)(p2-1)……(pi-1)/(p1*p2*……pi);
       = n*(1-1/p1)*(1-1/p2) ... (1-1/pn)
```

> PS：附上 0~100 欧拉函数表 ——by 百度百科

![欧拉函数表](https://github.com/qinbin52qiul/MarkdownPhotos/tree/master/algorithms/euler_function.png)

参考文章链接

1. [三、欧拉函数 · RSA 算法原理 · 看云](https://www.kancloud.cn/kancloud/rsa_algorithm/48486)

2. [ACM 第一课 --- 数论之欧拉函数](https://blog.csdn.net/suool/article/details/14203251)
