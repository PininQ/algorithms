## 遇到的笔试题

### 1. 母牛的故事

有一头母牛，它每年年初生一头小母牛。每头小母牛从第四个年头开始，每年年初也生一头小母牛。请编程实现在第 n 年的时候，共有多少头母牛？

**Input**

输入数据由多个测试实例组成，每个测试实例占一行，包括一个整数 n `(0<n<55)`，n 的含义如题目中描述。
n=0 表示输入数据的结束，不做处理。

**Output**

对于每个测试实例，输出在第 n 年的时候母牛的数量。
每个输出占一行。

**题解**

根据题意，先列出前几年的牛头数，试着找找规律：

| 第 n 年： | n=1  | n=2  | n=3  | n=4  | n=5  | n=6  | n=7   | n=8   | n=9   |
| --------- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | ----- | ----- |
| fn 头牛？ | f1=1 | f2=2 | f3=3 | f4=4 | f5=6 | f6=9 | f7=13 | f8=19 | f9=28 |

方法一：数学公式

我们可以得出这样一个公式：f<sub>n</sub> = f<sub>n-1</sub> + f<sub>n-3</sub>

可以这么理解，

f<sub>n-1</sub> 是一年前牛的数量，第 n 年仍然在，

f<sub>n-3</sub> 是三年前牛的数量，也就是第 n 年具有生育能力的牛，也就是第 n 年能生下的小牛数。

编程序，求解这个公式就行了。其中，第 1-3 年牛的数量需要直接给出。

方法二：递归（效率低）

```js
// 数学公式
var func = function(n) {
  let res = [0, 1, 2, 3]
  if (res.indexOf(n) !== -1) return res[n]
  for (let i = 4; i <= n; i++) {
    res.push(res[i - 1] + res[i - 3])
  }
  return res[n]
}

// 数学公式改造后
var func2 = function(n) {
  let res = [null, 1, 2, 3, null]
  if (res.indexOf(n) !== -1) return res[n]
  for (let i = 4; i <= n; i++) {
    res[4] = res[1] + res[3]
    ;[res[1], res[2], res[3]] = [res[2], res[3], res[4]]
  }
  return res[4]
}

// 迭代解法
var func3 = function(n) {
  let f1, f2, f3, fn
  ;[f1, f2, f3] = [1, 2, 3]
  if (n === 1) return f1
  if (n === 2) return f2
  if (n === 3) return f3
  for (let i = 4; i <= n; i++) {
    fn = f1 + f3
    // f1 代表前 3 年，f2 代表前 2 年，f3 代表前 1 年
    ;[f1, f2, f3] = [f2, f3, fn]
  }
  return fn
}

// 递归（不推荐，耗内存）
var func4 = function(n) {
  if (n < 4) return n
  return func4(n - 1) + func4(n - 3)
}

console.log(func4(1)) // 1
console.log(func4(3)) // 3
console.log(func4(5)) // 6
console.log(func4(7)) // 13
console.log(func4(9)) // 28
```

### 2. 最大子序列

```js
/*
绝妙的算法——最大子序列和问题
https://my.oschina.net/itblog/blog/267860

LeetCode53. 最大子序和 （动态规划 / 分治法）
https://blog.csdn.net/Jaster_wisdom/article/details/80662037
*/
// 暴力法 O(N^2)
var maxSubArray = function(nums) {
  let max_sum = Number.MIN_SAFE_INTEGER
  let current,
    len = nums.length
  for (let i = 0; i < len; i++) {
    current = 0
    for (let j = i; j < len; j++) {
      current += nums[j]
      if (current > max_sum) max_sum = current
    }
  }
  return max_sum
}

// 扫描法 O(N)
var maxSubArray2 = function(nums) {
  let current = nums[0],
    max_sum = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    if (current < 0) current = nums[i]
    else current += nums[i]
    // 这里隐式的列举了所有可能，保留了所有可能的最大值
    if (current > max_sum) max_sum = current
  }
  return max_sum
}

// 动态规划 O(N)
var maxSubArray3 = function(nums) {
  let current = nums[0],
    max_sum = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    if (current > 0) current += nums[i]
    else current = nums[i]
    // 这里隐式的列举了所有可能，保留了所有可能的最大值
    if (current > max_sum) max_sum = current
  }
  return max_sum
}

// 测试
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let arr2 = [-1]
console.log(maxSubArray(arr)) // 6
```

### 3. 巴什博奕

只有一堆 n 个物品, 两个人轮流从这堆物品中取物, 规定每次至少取一个, 最多取 m 个。最后取光者得胜。

**题解**

如果 n = m + 1； 假设第一个人拿走了 k 个，还剩下 m + 1 - k。 因为 1<= (m + 1 - k) <= m， 所以， 剩下的部分一定可以被第二个人一次性取走。

将上述规律推广：

如果 n = (m + 1) * r + s (r 为任意自然数, s<=m)

那么先取者拿走 s 个物品，如果后取者拿走 k（k<=m）个，那么先取者肯定获胜。总之，要保持给对手留下（m+1）的倍数，先取者就能获胜。

那么在我方取最优解的情况下：

- 我方先取必败情况： (m + 1) * r (r∈N)；
- 我方先取必胜情况： (m + 1) * r + k (1<=k<= m, r∈N)；

可以得出如下获胜概率：

如果物品数量随机，那么先手一方胜利的概率是 m/(m+1)，后手方胜利的概率是 1/(m+1)

```js
function isWin(n, m) {
  if (n % (m + 1))
    return '后取者获胜'
  return '先取者获胜'
}
```
